// Extracts the FINAL website copy (Bellvero_Final_Copy_EN_RU.md, v3.0, 03.10.2026) into
// JSON so pages render it verbatim instead of hand-copied strings. The Changes Sheet says
// "publish verbatim", so nothing is rewritten here (unlike extract-spec.mjs, the text is
// not run through no-dash.mjs). Re-run after any copy revision:
//   node scripts/extract-final-copy.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SRC = "Bellvero_Final_Copy_EN_RU.md";
const OUT_DIR = "src/data/final";
const lines = readFileSync(SRC, "utf8").split(/\r?\n/);

const PIPE = "\u0000";
const cells = (line) =>
  line
    .replaceAll("\\|", PIPE)
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim().replaceAll(PIPE, "|"));
const isRule = (line) => /^\|\s*-/.test(line);
const fullBold = (line) => line.match(/^\*\*((?:(?!\*\*).)+)\*\*$/)?.[1];

// ---------- split the file into "# " chapters ----------
const chapters = [];
for (const line of lines) {
  const h = line.match(/^# (.+)$/);
  if (h) chapters.push({ title: h[1], lines: [] });
  else chapters.at(-1)?.lines.push(line);
}
const chapter = (start) => chapters.find((c) => c.title.startsWith(start));

// ---------- Global components: every "## " table as raw rows ----------
const GLOBAL_KEYS = {
  Header: "header",
  "Services menu (dropdown)": "servicesMenu",
  Footer: "footer",
  "Enquiry form F1": "f1",
  "Mobile bottom bar": "bottomBar",
  "Image captions": "captions",
};
const global = {};
{
  let key = null;
  let headerSeen = false;
  for (const line of chapter("Global components").lines) {
    const h = line.match(/^## (.+)$/);
    if (h) {
      key = GLOBAL_KEYS[h[1]];
      if (!key) throw new Error(`Unknown global section: ${h[1]}`);
      global[key] = [];
      headerSeen = false;
      continue;
    }
    if (!key || !line.startsWith("|") || isRule(line)) continue;
    if (!headerSeen) {
      headerSeen = true; // first row is the column header
      continue;
    }
    global[key].push(cells(line));
  }
}

// ---------- Meta titles and descriptions ----------
const meta = {};
for (const line of chapter("Meta titles").lines) {
  if (!line.startsWith("|") || isRule(line)) continue;
  const c = cells(line);
  const page = c[0].match(/^(P\d+)\b/)?.[1];
  if (!page) continue;
  meta[page] = { en: { title: c[1], description: c[2] }, ru: { title: c[3], description: c[4] } };
}

// ---------- Page chapters ----------
const BUTTON = /^(?:Button|Кнопка): (.+)$/;
const UNDER = /^(?:Under the button|Под кнопкой): (.+)$/;
const FACTS = /^(?:Facts strip|Полоса фактов): (.+)$/;
const RELATED = /^(?:Related services|Связанные услуги): (.+)$/;
const BLOCK_ID = /^\*\*([A-Z]{1,2}\d{2}b?)(?: (.+?))?\*\*(.*)$/;
const dots = (text) =>
  text
    .split(" · ")
    .map((s) => s.trim())
    .filter(Boolean);

function parseTable(rows) {
  const body = rows.filter((r) => !isRule(r)).map(cells);
  return { t: "table", head: body[0], rows: body.slice(1) };
}

/** Service-format page: H1, intro, button, facts strip, "####" sections, related links. */
function parseDoc(src) {
  const doc = { h1: null, intro: [], button: null, underButton: null, facts: [], sections: [], related: [] };
  let section = null;
  const push = (block) => {
    if (!section) throw new Error(`Block before first section: ${JSON.stringify(block).slice(0, 80)}`);
    section.blocks.push(block);
  };
  for (let i = 0; i < src.length; i++) {
    const line = src[i].trim();
    if (!line || line === "---" || /^\*\(.*\)\*$/.test(line)) continue;

    const h = line.match(/^#### (.+)$/);
    if (h) {
      const note = h[1].match(/\s*\*\((.+)\)\*$/);
      section = { heading: h[1].replace(/\s*\*\(.+\)\*$/, ""), blocks: [] };
      if (note) section.note = note[1];
      doc.sections.push(section);
      continue;
    }
    let m;
    if ((m = line.match(RELATED))) {
      doc.related = dots(m[1]);
      continue;
    }
    if ((m = line.match(BUTTON))) {
      if (section) push({ t: "button", text: m[1] });
      else doc.button = m[1];
      continue;
    }
    if (!section && (m = line.match(UNDER))) {
      doc.underButton = m[1];
      continue;
    }
    if (!section && (m = line.match(FACTS))) {
      doc.facts = dots(m[1]);
      continue;
    }
    const bold = fullBold(line);
    if (!section) {
      if (bold && !doc.h1) doc.h1 = bold;
      else doc.intro.push(line);
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < src.length && src[i].trim().startsWith("|")) rows.push(src[i++].trim());
      i--;
      push(parseTable(rows));
      continue;
    }
    if (/^- /.test(line)) {
      const items = [];
      while (i < src.length && /^- /.test(src[i].trim())) items.push(src[i++].trim().slice(2));
      i--;
      push({ t: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < src.length && /^\d+\. /.test(src[i].trim())) items.push(src[i++].trim().replace(/^\d+\. /, ""));
      i--;
      push({ t: "ol", items });
      continue;
    }
    if (bold) {
      const next = (src[i + 1] ?? "").trim();
      if (next.startsWith("**")) {
        // Case card: title, then "**Label.** text" rows.
        const rows = [];
        while ((src[i + 1] ?? "").trim().startsWith("**")) {
          const r = src[++i].trim().match(/^\*\*(.+?)\*\*\s*(.+)$/);
          if (!r) throw new Error(`Bad case row: ${src[i]}`);
          rows.push({ label: r[1].replace(/\.$/, ""), text: r[2] });
        }
        push({ t: "case", title: bold, rows });
      } else {
        const answer = [];
        while ((src[i + 1] ?? "").trim() && !(src[i + 1] ?? "").trim().startsWith("**")) answer.push(src[++i].trim());
        if (!answer.length) throw new Error(`FAQ question without answer: ${bold}`);
        push({ t: "faq", q: bold, a: answer.join(" ") });
      }
      continue;
    }
    push({ t: "p", text: line });
  }
  return doc;
}

/** Block-format page (P01, P14, P19, P20, P21): "**H01 Title**" blocks of raw lines. */
function parseBlocks(src) {
  const blocks = {};
  let current = null;
  for (const raw of src) {
    const line = raw.trim();
    if (!line || line === "---") continue;
    const m = line.match(BLOCK_ID);
    if (m) {
      current = { title: m[2] ?? "", lines: [] };
      const anchor = m[3].match(/`#([a-z-]+)`/);
      if (anchor) current.anchor = anchor[1];
      blocks[m[1]] = current;
      continue;
    }
    if (!current) throw new Error(`Line before first block: ${line}`);
    current.lines.push(line);
  }
  return blocks;
}

const docs = {};
const blocks = {};
for (const ch of chapters) {
  const page = ch.title.match(/^(P\d+)\b/)?.[1];
  if (!page) continue;
  const en = ch.lines.indexOf("## EN");
  const ru = ch.lines.indexOf("## RU");
  if (en === -1 || ru === -1) throw new Error(`${page}: missing ## EN / ## RU`);
  const parts = { en: ch.lines.slice(en + 1, ru), ru: ch.lines.slice(ru + 1) };
  const first = parts.en.find((l) => l.trim());
  const blockFormat = BLOCK_ID.test(first.trim());
  const out = { en: (blockFormat ? parseBlocks : parseDoc)(parts.en), ru: (blockFormat ? parseBlocks : parseDoc)(parts.ru) };

  // EN and RU must have the same shape, so a page can address text by position.
  if (blockFormat) {
    for (const id of Object.keys(out.en)) {
      const a = out.en[id].lines.length;
      const b = out.ru[id]?.lines.length;
      if (a !== b) throw new Error(`${page} ${id}: EN has ${a} lines, RU has ${b}`);
    }
    blocks[page] = out;
  } else {
    const shape = (d) => d.sections.map((s) => s.blocks.map((b) => b.t + (b.items?.length ?? b.rows?.length ?? "")).join(","));
    const a = shape(out.en);
    const b = shape(out.ru);
    a.forEach((s, i) => {
      if (s !== b[i]) throw new Error(`${page} section ${i + 1} "${out.en.sections[i].heading}": EN [${s}] vs RU [${b[i]}]`);
    });
    if (a.length !== b.length) throw new Error(`${page}: EN has ${a.length} sections, RU has ${b.length}`);
    docs[page] = out;
  }
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/copy.json`, JSON.stringify({ global, meta, docs, blocks }, null, 1) + "\n");
console.log(
  `global: ${Object.keys(global).length} tables, meta: ${Object.keys(meta).length} pages, docs: ${Object.keys(docs).join(" ")}, blocks: ${Object.keys(blocks).join(" ")}`
);
