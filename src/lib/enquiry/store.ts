import { appendFile, mkdir } from "fs/promises";
import path from "path";

// Enquiry register (spec §20.5). Durable storage is required before success is shown.
//
// Production: Upstash Redis over its REST API (works on serverless; no SDK needed).
//   UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
// Development: an append-only file in .data/ (never used in production, because a
// serverless filesystem does not survive between requests).

export type EnquiryRecord = {
  enquiryId: string;
  createdAt: string;
  locale: string;
  name: string;
  phone: string;
  phoneE164: string | null;
  email: string | null;
  service: string | null;
  location: string | null;
  message: string | null;
  project: string | null;
  sourcePage: string | null;
  referrer: string | null;
  utm: Record<string, string> | null;
  /** Updated manually by the team: new, contacted, qualified, proposal, closed */
  status: "new";
  firstContactAt: null;
};

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export const storeConfigured = () => Boolean(REDIS_URL && REDIS_TOKEN) || process.env.NODE_ENV !== "production";

async function redis(command: (string | number)[]) {
  const res = await fetch(REDIS_URL!, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`redis ${command[0]} failed: ${res.status}`);
  const json = (await res.json()) as { result?: unknown; error?: string };
  if (json.error) throw new Error(`redis ${command[0]} error: ${json.error}`);
  return json.result;
}

/**
 * Reserves an idempotency key for 24 h. Returns the enquiry id already stored under the
 * key when this is a retry, so a network-timeout retry never creates a duplicate record.
 */
export async function claimIdempotencyKey(key: string, enquiryId: string): Promise<string | null> {
  if (REDIS_URL && REDIS_TOKEN) {
    const set = await redis(["SET", `enquiry:idem:${key}`, enquiryId, "NX", "EX", 86400]);
    if (set === "OK") return null;
    return (await redis(["GET", `enquiry:idem:${key}`])) as string | null;
  }
  const existing = devKeys.get(key);
  if (existing) return existing;
  devKeys.set(key, enquiryId);
  return null;
}
const devKeys = new Map<string, string>();

/** Frees a claimed key when the write failed, so the visitor's retry is stored rather than deduplicated. */
export async function releaseIdempotencyKey(key: string) {
  if (REDIS_URL && REDIS_TOKEN) await redis(["DEL", `enquiry:idem:${key}`]);
  else devKeys.delete(key);
}

export async function saveEnquiry(record: EnquiryRecord) {
  if (REDIS_URL && REDIS_TOKEN) {
    await redis(["SET", `enquiry:${record.enquiryId}`, JSON.stringify(record)]);
    await redis(["LPUSH", "enquiries", record.enquiryId]);
    return;
  }
  if (process.env.NODE_ENV === "production") throw new Error("enquiry store not configured");
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "enquiries.log"), `${JSON.stringify(record)}\n`, "utf8");
}

/** Sliding-window rate limit shared across instances when Redis is configured. */
export async function hitRateLimit(bucket: string, limit: number, windowSec: number): Promise<boolean> {
  if (REDIS_URL && REDIS_TOKEN) {
    const key = `enquiry:rl:${bucket}`;
    const count = Number(await redis(["INCR", key]));
    if (count === 1) await redis(["EXPIRE", key, windowSec]);
    return count > limit;
  }
  const now = Date.now();
  const hits = (devHits.get(bucket) ?? []).filter((t) => now - t < windowSec * 1000);
  hits.push(now);
  devHits.set(bucket, hits);
  return hits.length > limit;
}
const devHits = new Map<string, number[]>();
