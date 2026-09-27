/**
 * Create-only CMS seed. Run with:  npx payload run src/cms/seed/run.ts confirm
 * (`payload run` forwards positional arguments only, so the confirmation is a plain word.)
 *
 * - Creates a global only if it has never been saved (no published document and no draft
 *   version). An existing global is left untouched: nothing is ever overwritten.
 * - Refuses to run on Vercel Production (VERCEL_ENV=production). Production content is only
 *   created deliberately, never by a build.
 * - Writes English first, then Russian onto the same array rows (arrays are shared between
 *   languages; only their labels are localized), then reads both languages back and fails
 *   loudly if anything required is empty.
 */
import {
  commitTransaction,
  createLocalReq,
  getPayload,
  initTransaction,
  killTransaction,
  type Payload,
  type PayloadRequest,
} from "payload";
import config from "../../payload.config";
import { SEED } from "./data";

type Locale = "en" | "ru";
type Json = null | string | number | boolean | Json[] | { [key: string]: Json };

const isLocalized = (v: unknown): v is { en: Json; ru: Json } =>
  !!v && typeof v === "object" && !Array.isArray(v) && Object.keys(v).sort().join() === "en,ru";

/** Picks one language out of { en, ru } values, everywhere in the tree. */
function pick(value: unknown, locale: Locale): Json {
  if (isLocalized(value)) return value[locale];
  if (Array.isArray(value)) return value.map((v) => pick(v, locale));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, pick(v, locale)]));
  return value as Json;
}

/** Copies array row ids from the saved English document onto the Russian data, by position. */
function withRowIds(data: Json, saved: unknown): Json {
  if (Array.isArray(data) && Array.isArray(saved)) {
    return data.map((row, i) => {
      const id = (saved[i] as { id?: string } | undefined)?.id;
      const merged = withRowIds(row, saved[i]);
      return id && merged && typeof merged === "object" && !Array.isArray(merged) ? { ...merged, id } : merged;
    });
  }
  if (data && typeof data === "object" && !Array.isArray(data) && saved && typeof saved === "object") {
    return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, withRowIds(v, (saved as Record<string, unknown>)[k])]));
  }
  return data;
}

/** Every required string in the seed must come back non-empty in both languages. */
function assertComplete(slug: string, seed: unknown, saved: Record<Locale, unknown>, path = "") {
  if (isLocalized(seed)) {
    for (const locale of ["en", "ru"] as const) {
      const want = seed[locale];
      const got = path.split(".").filter(Boolean).reduce<unknown>((o, k) => (o as Record<string, unknown> | undefined)?.[k], saved[locale]);
      if (typeof want === "string" && got !== want) throw new Error(`${slug}.${path} (${locale}) did not save as expected`);
    }
    return;
  }
  if (Array.isArray(seed)) seed.forEach((v, i) => assertComplete(slug, v, saved, `${path}.${i}`));
  else if (seed && typeof seed === "object") for (const [k, v] of Object.entries(seed)) assertComplete(slug, v, saved, path ? `${path}.${k}` : k);
}

async function exists(payload: Payload, slug: "site-settings" | "navigation", req: PayloadRequest) {
  const doc = (await payload.findGlobal({ slug, draft: true, depth: 0, req })) as { updatedAt?: string };
  if (doc.updatedAt) return true;
  const versions = await payload.findGlobalVersions({ slug, limit: 1, depth: 0, req });
  return versions.totalDocs > 0;
}

/**
 * One transaction per global: the existence check, both language writes and the read-back
 * either all commit or all roll back, so a failure can never leave a half-created global
 * (which the create-only rule would then refuse to complete).
 */
async function seedGlobal(payload: Payload, slug: "site-settings" | "navigation", seed: unknown) {
  const req = await createLocalReq({ context: { skipLocaleCheck: true, skipRevalidate: true } }, payload);
  await initTransaction(req);
  try {
    if (await exists(payload, slug, req)) {
      await killTransaction(req);
      console.log(`[cms-seed] ${slug}: already exists, left unchanged.`);
      return;
    }
    const en = await payload.updateGlobal({
      slug,
      locale: "en",
      data: { ...(pick(seed, "en") as object), _status: "published" } as never,
      depth: 0,
      req,
    });
    await payload.updateGlobal({
      slug,
      locale: "ru",
      data: { ...(withRowIds(pick(seed, "ru"), en) as object), _status: "published" } as never,
      depth: 0,
      req,
    });
    const saved = {
      en: await payload.findGlobal({ slug, locale: "en", depth: 0, req }),
      ru: await payload.findGlobal({ slug, locale: "ru", depth: 0, req }),
    };
    assertComplete(slug, seed, saved);
    await commitTransaction(req);
    console.log(`[cms-seed] ${slug}: created and published (EN + RU).`);
  } catch (error) {
    await killTransaction(req);
    throw error;
  }
}

async function main() {
  if (process.env.VERCEL_ENV === "production") throw new Error("Refusing to seed: VERCEL_ENV is production.");
  const confirmed = process.argv.includes("confirm") || process.argv.includes("--confirm") || process.env.CMS_SEED === "1";
  if (!confirmed) {
    throw new Error("Refusing to seed without confirmation (`payload run src/cms/seed/run.ts confirm`). Check which database DATABASE_URL points at first.");
  }
  const payload = await getPayload({ config });
  await seedGlobal(payload, "site-settings", SEED.siteSettings);
  await seedGlobal(payload, "navigation", SEED.navigation);
}

// Top-level await: `payload run` exits as soon as this module has been imported.
try {
  await main();
  process.exit(0);
} catch (error) {
  const cause = error instanceof Error && error.cause instanceof Error ? ` (cause: ${error.cause.message})` : "";
  console.error("[cms-seed] FAILED:", error instanceof Error ? error.message.split("\n")[0] + cause : error);
  process.exit(1);
}
