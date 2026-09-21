import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

// Enquiry capture endpoint (spec §4.1 / §31.1). Scope note: this validates input and
// makes a durable local write before reporting success, and de-duplicates by
// idempotency key — it does NOT yet notify anyone (WhatsApp/Telegram/email per §4.8),
// and the local-file store below is for development only. Before this goes live it
// needs: (1) a real datastore that survives serverless deploys, (2) the instant
// notification pipeline to at least two recipients required by §4.8. Both are
// separate follow-up tasks, deliberately not faked here.

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.log");

const seenIdempotencyKeys = new Map<string, number>();
const rateLimitHits = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function pruneIdempotencyKeys() {
  const now = Date.now();
  for (const [key, ts] of seenIdempotencyKeys) {
    if (now - ts > 10 * 60_000) seenIdempotencyKeys.delete(key);
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    location?: string;
    message?: string;
    locale?: string;
    sourcePage?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  const phoneDigits = phone.replace(/[^\d]/g, "");
  if (phoneDigits.length < 7) {
    return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  const message = (body.message ?? "").slice(0, 2000);

  const idempotencyKey = request.headers.get("idempotency-key") ?? randomUUID();
  pruneIdempotencyKeys();
  if (seenIdempotencyKeys.has(idempotencyKey)) {
    return NextResponse.json({ ok: true, deduplicated: true });
  }
  seenIdempotencyKeys.set(idempotencyKey, Date.now());

  const record = {
    enquiryId: randomUUID(),
    createdAt: new Date().toISOString(),
    locale: body.locale ?? "en",
    name,
    phone,
    email: email || null,
    service: body.service ?? null,
    location: body.location ?? null,
    message: message || null,
    sourcePage: body.sourcePage ?? null,
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(DATA_FILE, `${JSON.stringify(record)}\n`, "utf8");
  } catch (err) {
    console.error("enquiry write failed", err);
    return NextResponse.json({ error: "write_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, enquiryId: record.enquiryId });
}
