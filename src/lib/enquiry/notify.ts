import type { EnquiryRecord } from "./store";

// Instant enquiry notification (spec §20.2): messenger (Telegram bot) plus an email copy
// (Resend), each to at least two recipients, three attempts with exponential backoff,
// then an alert. Nothing here ever reports success to the visitor; the visitor's success
// state depends only on durable storage.
//
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_IDS   (comma-separated chat ids)
//   RESEND_API_KEY, ENQUIRY_EMAIL_FROM, ENQUIRY_EMAIL_TO   (comma-separated addresses)
//   ALERT_WEBHOOK_URL   (optional: receives a JSON POST when delivery ultimately fails)

const list = (v?: string) =>
  (v ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const SERVICE_LABELS: Record<string, string> = {
  design: "Design",
  landscape: "Landscape",
  villa: "Villa",
  apartment: "Apartment",
  commercial: "Commercial",
  kitchens: "Kitchens",
  wardrobes: "Wardrobes",
  joinery: "Joinery",
  approvals: "Approvals",
  mep: "MEP",
  procurement: "Procurement",
  notSure: "Not sure yet",
};
const LOCATION_LABELS: Record<string, string> = { dubai: "Dubai", abuDhabi: "Abu Dhabi", other: "Other" };

/** Everything needed to make the first call (spec §20.4). */
export function formatEnquiry(r: EnquiryRecord) {
  const lines = [
    `New enquiry: ${r.name}`,
    `Phone: ${r.phone}${r.phoneE164 && r.phoneE164 !== r.phone ? ` (${r.phoneE164})` : ""}`,
    r.email ? `Email: ${r.email}` : null,
    `Service: ${r.service ? (SERVICE_LABELS[r.service] ?? r.service) : "-"}`,
    `Location: ${r.location ? (LOCATION_LABELS[r.location] ?? r.location) : "-"}`,
    r.project ? `Project context: ${r.project}` : null,
    `Page: ${r.sourcePage ?? "-"} (${r.locale.toUpperCase()})`,
    `Submitted: ${r.createdAt}`,
    `Reference: ${r.enquiryId}`,
    "",
    r.message ? `Project details:\n${r.message}` : "Project details: -",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

async function withRetry(label: string, fn: () => Promise<void>) {
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await fn();
      return true;
    } catch (err) {
      lastError = err;
      if (attempt < 2) await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
    }
  }
  console.error(`[enquiry] ${label} delivery failed after 3 attempts`, lastError);
  return false;
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chats = list(process.env.TELEGRAM_CHAT_IDS);
  if (!token || chats.length === 0) return null;
  const results = await Promise.all(
    chats.map((chat) =>
      withRetry(`telegram:${chat}`, async () => {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chat, text, disable_web_page_preview: true }),
        });
        if (!res.ok) throw new Error(`telegram ${res.status}`);
      })
    )
  );
  return results.every(Boolean);
}

async function sendEmail(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_EMAIL_FROM;
  const to = list(process.env.ENQUIRY_EMAIL_TO);
  if (!key || !from || to.length === 0) return null;
  return withRetry("email", async () => {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject, text }),
    });
    if (!res.ok) throw new Error(`resend ${res.status}`);
  });
}

async function alert(reason: string, enquiryId: string) {
  console.error(`[enquiry] ALERT ${reason} (${enquiryId})`);
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reason, enquiryId }),
  }).catch((err) => console.error("[enquiry] alert webhook failed", err));
}

export async function notifyEnquiry(record: EnquiryRecord) {
  const text = formatEnquiry(record);
  const [telegram, email] = await Promise.all([
    sendTelegram(text),
    sendEmail(`New enquiry: ${record.name} (${record.service ?? "service not selected"})`, text),
  ]);
  if (telegram === null && email === null) {
    await alert("no notification channel configured", record.enquiryId);
  } else if (telegram === false || email === false) {
    await alert(`notification delivery failed (telegram: ${telegram}, email: ${email})`, record.enquiryId);
  }
}
