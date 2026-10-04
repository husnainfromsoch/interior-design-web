import copy from "@/data/final/copy.json";

// FINAL website copy (Bellvero_Final_Copy_EN_RU.md v3.0), generated verbatim by
// scripts/extract-final-copy.mjs. Server code only: the JSON is large, so client
// components get their strings as props.

export type Locale = "en" | "ru";
export const asLocale = (locale: string): Locale => (locale === "ru" ? "ru" : "en");

export type DocBlock =
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "case"; title: string; rows: { label: string; text: string }[] }
  | { t: "faq"; q: string; a: string }
  | { t: "button"; text: string };
export type DocSection = { heading: string; note?: string; blocks: DocBlock[] };
export type Doc = {
  h1: string | null;
  intro: string[];
  button: string | null;
  underButton: string | null;
  facts: string[];
  sections: DocSection[];
  related: string[];
};
type CopyBlock = { title: string; anchor?: string; lines: string[] };

const DATA = copy as unknown as {
  global: Record<string, string[][]>;
  meta: Record<string, Record<Locale, { title: string; description: string }>>;
  docs: Record<string, Record<Locale, Doc>>;
  blocks: Record<string, Record<Locale, Record<string, CopyBlock>>>;
};

/** Service-format page (P02–P13, P22, P23). */
export function doc(page: string, locale: string): Doc {
  const d = DATA.docs[page]?.[asLocale(locale)];
  if (!d) throw new Error(`Final copy missing: ${page}`);
  return d;
}

/** Lines of one block of a block-format page, e.g. block("P01", "H05", locale). */
export function block(page: string, id: string, locale: string): string[] {
  const b = DATA.blocks[page]?.[asLocale(locale)]?.[id];
  if (!b) throw new Error(`Final copy missing: ${page} ${id}`);
  return b.lines;
}

export function meta(page: string, locale: string) {
  const m = DATA.meta[page]?.[asLocale(locale)];
  if (!m) throw new Error(`Final meta missing: ${page}`);
  return m;
}

/** A row of a Global table by its first cell; `nth` picks among rows that share it ("Field"). */
function globalRow(table: string, item: string, nth = 0): string[] {
  const row = DATA.global[table]?.filter((r) => r[0] === item)[nth];
  if (!row) throw new Error(`Final global copy missing: ${table} / ${item}`);
  return row;
}
/** Text of a three-column Global table (Item | EN | RU). */
export const g = (table: string, item: string, locale: string, nth = 0) => globalRow(table, item, nth)[asLocale(locale) === "ru" ? 2 : 1];
export const globalTable = (table: string) => DATA.global[table];

/** "A · B · C" → ["A", "B", "C"] */
export const dots = (text: string) =>
  text
    .split(" · ")
    .map((s) => s.trim())
    .filter(Boolean);

/** "Label: text" → "text" (first ": " only, so colons in the text survive). */
export const val = (line: string) => line.slice(line.indexOf(": ") + 2);

/** "01 Title `#anchor` — body" or "1. Question? — answer" → parts. */
export function numbered(line: string): { n: string; title: string; body: string; anchor?: string } {
  const m = line.match(/^(\d+)\.?\s+(.+?) — (.+)$/);
  if (!m) throw new Error(`Not a numbered line: ${line}`);
  const anchor = m[2].match(/\s*`#([a-z-]+)`/);
  return { n: m[1], title: m[2].replace(/\s*`#[a-z-]+`/, ""), body: m[3], anchor: anchor?.[1] };
}

/** "Title — body" → parts (first dash only). */
export function titled(text: string): { title: string; body: string } {
  const i = text.indexOf(" — ");
  if (i === -1) throw new Error(`No "Title — body" in: ${text}`);
  return { title: text.slice(0, i), body: text.slice(i + 3) };
}

// Changes Sheet G8: link labels (EN and RU) → URL. Matched case-insensitively, "&" = "and".
const G8: [string[], string][] = [
  [["Villa renovation", "Villas", "Ремонт вилл", "Виллы"], "/services/villa-renovation"],
  [["Apartment renovation", "Apartments", "Ремонт квартир", "Квартиры"], "/services/apartment-renovation"],
  [["Commercial fit-out", "Коммерческая отделка"], "/services/commercial-fit-out"],
  [["Interior design", "Дизайн интерьера"], "/services/interior-design"],
  [["Landscaping", "Landscaping and pools", "Ландшафт", "Ландшафт и бассейны"], "/services/landscape-design"],
  [["Custom kitchens", "Kitchens", "Кухни на заказ", "Кухни"], "/services/custom-kitchens"],
  [["Bespoke joinery", "Joinery", "Мебель на заказ", "Мебель"], "/services/bespoke-joinery"],
  [["Wardrobes and dressing rooms", "Wardrobes", "Шкафы и гардеробные", "Гардеробные и шкафы", "Гардеробные"], "/services/wardrobes"],
  [["Metal and aluminium", "metalwork", "metal partitions", "Металл и алюминий", "изделия из металла", "металлические перегородки"], "/services/metal-aluminium"],
  [["MEP systems", "Инженерные системы"], "/services/mep-hvac"],
  [["Approvals and NOC", "Согласования и NOC"], "/services/approvals"],
  [["Materials and procurement", "Материалы и комплектация", "Комплектация"], "/services/materials-procurement"],
  [["Warranty", "Гарантия"], "/warranty"],
  [["All Services", "Все услуги"], "/services"],
  [["All Projects", "Все проекты"], "/projects"],
  [["Our Process", "Как мы работаем"], "/process"],
];
const norm = (label: string) => label.trim().toLowerCase().replaceAll("&", "and").replace(/\s+/g, " ");
const LINKS = new Map(G8.flatMap(([labels, url]) => labels.map((l) => [norm(l), url] as const)));

/** URL for a link label from the copy. Throws on an unknown label so it never ships as "[text]". */
export function linkHref(label: string): string {
  const url = LINKS.get(norm(label));
  if (!url) throw new Error(`No G8 URL for link label: ${label}`);
  return url;
}

/** Inline markup of a copy string: plain text, **bold** and [Link text] runs, in order. */
export type Run = { text: string; bold?: boolean; href?: string };
export function runs(text: string): Run[] {
  const out: Run[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    out.push(m[1] !== undefined ? { text: m[1], bold: true } : { text: m[2], href: linkHref(m[2]) });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}
