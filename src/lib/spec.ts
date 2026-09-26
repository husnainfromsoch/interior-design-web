import copy from "@/data/spec/copy.json";

// Spec §17 copy, generated verbatim from the FINAL spec by scripts/extract-spec.mjs.
// Pages read their text from here so EN and RU never drift from the spec.

type Entry = { en: string; ru: string };
type Block = Record<string, Entry>;
const COPY = copy as Record<string, Block>;

export type Locale = "en" | "ru";
export const asLocale = (locale: string): Locale => (locale === "ru" ? "ru" : "en");

/** One spec string, e.g. sc("C-P03-D01", "H1", "en"). Throws on a missing key so gaps fail the build. */
export function sc(code: string, label: string, locale: string): string {
  const entry = COPY[code]?.[label];
  if (!entry) throw new Error(`Spec copy missing: ${code} / ${label}`);
  return entry[asLocale(locale)];
}

/** Same as sc() but returns undefined when the spec has no such row. */
export function scMaybe(code: string, label: string, locale: string): string | undefined {
  return COPY[code]?.[label]?.[asLocale(locale)];
}

/** "A · B · C" → ["A", "B", "C"] */
export const items = (text: string) =>
  text
    .split(" · ")
    .map((s) => s.trim())
    .filter(Boolean);

/**
 * "Title: body" or "Question? Answer" → { title, body }. Also accepts "Title. Body".
 * (The spec writes "Title — body"; the extractor turns that dash into ": " or drops it after "?".)
 */
export function pair(text: string): { title: string; body: string } {
  const q = text.indexOf("? ");
  const i = text.indexOf(": ");
  if (q !== -1 && (i === -1 || q < i)) return { title: text.slice(0, q + 1).trim(), body: text.slice(q + 2).trim() };
  if (i !== -1 && i < 80) return { title: text.slice(0, i).trim(), body: text.slice(i + 2).trim() };
  const dot = text.indexOf(". ");
  if (dot !== -1 && dot < 80) return { title: text.slice(0, dot).trim(), body: text.slice(dot + 2).trim() };
  return { title: text, body: "" };
}

/** Strip a trailing arrow from link copy; the UI draws its own. */
export const linkText = (text: string) => text.replace(/\s*→\s*$/, "");

/** FAQ rows ("Q1", "Q2", …) of a block as question/answer pairs. */
export function faq(code: string, locale: string): { q: string; a: string }[] {
  const block = COPY[code];
  if (!block) throw new Error(`Spec FAQ missing: ${code}`);
  return Object.keys(block)
    .filter((k) => /^Q\d+$/.test(k))
    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
    .map((k) => {
      const { title, body } = pair(block[k][asLocale(locale)]);
      return { q: title, a: body };
    });
}

/** The PAY-SHORT body, which the spec requires verbatim wherever payment is answered. */
export const payShort = (locale: string) => sc("C-PAY-SHORT", "Body", locale);
