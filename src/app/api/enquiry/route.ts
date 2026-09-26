import { NextResponse, after } from "next/server";
import { randomUUID } from "crypto";
import { claimIdempotencyKey, releaseIdempotencyKey, hitRateLimit, saveEnquiry, storeConfigured, type EnquiryRecord } from "@/lib/enquiry/store";
import { notifyEnquiry } from "@/lib/enquiry/notify";

// Enquiry endpoint (spec §20.1). First-party, validates everything server-side, stores
// the enquiry durably, returns an acceptance id, then notifies the team (§20.2) after
// the response. A silent loss is the highest-severity defect: when storage is not
// configured or fails, the visitor gets the error state and keeps their input.

const SERVICES = new Set(["design", "landscape", "villa", "apartment", "commercial", "kitchens", "wardrobes", "joinery", "approvals", "mep", "procurement", "notSure"]);
const LOCATIONS = new Set(["dubai", "abuDhabi", "other"]);
const NAME_RE = /^[\p{L}\p{M}' .-]{1,100}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 2500;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Best-effort E.164; the original string is always stored unchanged alongside it. */
function toE164(phone: string): string | null {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return /^\+\d{7,15}$/.test(digits) ? digits : null;
  if (digits.startsWith("00")) return `+${digits.slice(2)}`;
  if (/^05\d{8}$/.test(digits)) return `+971${digits.slice(1)}`; // UAE mobile written locally
  return null;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Spam: honeypot filled or submitted faster than a person can type. Answer like a
  // success so bots learn nothing, but store and notify nothing.
  const elapsed = Number(body.elapsedMs);
  if (str(body.website, 200) || (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS)) {
    console.warn("[enquiry] dropped as spam", { ip, elapsed });
    return NextResponse.json({ ok: true, enquiryId: randomUUID() });
  }

  const name = str(body.name, 100);
  const phone = str(body.phone, 40);
  const email = str(body.email, 200);
  if (!NAME_RE.test(name)) return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 7) return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
  if (email && !EMAIL_RE.test(email)) return NextResponse.json({ error: "invalid_email" }, { status: 400 });

  try {
    if ((await hitRateLimit(`ip:${ip}`, 5, 600)) || (await hitRateLimit(`phone:${phone.replace(/\D/g, "")}`, 3, 3600))) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }
  } catch (err) {
    console.error("[enquiry] rate limit check failed", err);
  }

  if (!storeConfigured()) {
    console.error("[enquiry] ALERT store not configured in production; enquiry rejected so it is not lost silently");
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const service = str(body.service, 30);
  const location = str(body.location, 30);
  const utmRaw = body.utm && typeof body.utm === "object" ? (body.utm as Record<string, unknown>) : null;
  const utm = utmRaw
    ? Object.fromEntries(Object.entries(utmRaw).filter(([k]) => k.startsWith("utm_")).map(([k, v]) => [k, str(v, 200)]))
    : null;

  const record: EnquiryRecord = {
    enquiryId: randomUUID(),
    createdAt: new Date().toISOString(),
    locale: body.locale === "ru" ? "ru" : "en",
    name,
    phone,
    phoneE164: toE164(phone),
    email: email || null,
    service: SERVICES.has(service) ? service : null,
    location: LOCATIONS.has(location) ? location : null,
    message: str(body.message, 2000) || null,
    project: str(body.project, 120) || null,
    sourcePage: str(body.sourcePage, 300) || null,
    referrer: str(body.referrer, 500) || null,
    utm: utm && Object.keys(utm).length ? utm : null,
    status: "new",
    firstContactAt: null,
  };

  const idempotencyKey = str(request.headers.get("idempotency-key"), 100);
  try {
    if (idempotencyKey) {
      const existing = await claimIdempotencyKey(idempotencyKey, record.enquiryId);
      if (existing) return NextResponse.json({ ok: true, enquiryId: existing, deduplicated: true });
    }
    await saveEnquiry(record);
  } catch (err) {
    console.error("[enquiry] ALERT durable write failed", { enquiryId: record.enquiryId, err });
    if (idempotencyKey) await releaseIdempotencyKey(idempotencyKey).catch(() => {});
    return NextResponse.json({ error: "write_failed" }, { status: 500 });
  }

  after(() => notifyEnquiry(record));

  return NextResponse.json({ ok: true, enquiryId: record.enquiryId });
}
