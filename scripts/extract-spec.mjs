// Extracts website copy (spec §17) and image metadata (spec §18) from the FINAL
// specification into JSON, so pages render the spec text verbatim instead of
// hand-copied strings. Em dashes are replaced on output (owner request, see
// scripts/no-dash.mjs). Re-run after any spec revision:  node scripts/extract-spec.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { noDashDeep } from "./no-dash.mjs";

const SPEC = "bellvero-website/Bellvero_Website_Technical_Specification_EN_1.md";
const OUT_DIR = "src/data/spec";
const lines = readFileSync(SPEC, "utf8").split(/\r?\n/);

const cells = (line) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
const unquote = (s) => s.replace(/^`(.*)`$/, "$1").trim();

// ---------- §17 copy ----------
const start = lines.findIndex((l) => l.startsWith("## 17."));
const end = lines.findIndex((l) => l.startsWith("## 18."));
const copy = {};
let boldCode = null;
let tableCode = null; // for "| Section | EN | RU |" tables without codes (privacy)

const put = (code, label, en, ru) => {
  copy[code] ??= {};
  copy[code][label] = { en: unquote(en), ru: unquote(ru) };
};

for (let i = start; i < end; i++) {
  const line = lines[i];
  const heading = line.match(/^###\s+17\.\d+\s+(.*)$/);
  if (heading) {
    boldCode = null;
    tableCode = /Privacy Notice/.test(heading[1])
      ? "C-P23"
      : /C-FOOTER/.test(heading[1])
        ? "C-FOOTER"
        : /C-F1/.test(heading[1])
          ? "C-F1"
          : null;
    continue;
  }
  const bold = line.match(/^\*\*`(C-[A-Z0-9-]+)`\*\*/);
  if (bold) {
    boldCode = bold[1];
    continue;
  }
  const plainBold = line.match(/^\*\*([^`*]+)\*\*\s*$/);
  if (plainBold) {
    boldCode = /Warranty strips/.test(plainBold[1]) ? "C-WARRANTY-STRIP" : null;
    continue;
  }
  if (!line.startsWith("|") || /^\|\s*-/.test(line)) continue;
  const c = cells(line);
  if (c.length < 3) continue;
  if (["Ref", "Element", "Key", "#", "Section"].includes(c[0])) continue;

  const ref = c[0].match(/^`(C-[A-Za-z0-9-]+)`\s*(.*)$/);
  if (ref) {
    put(ref[1], ref[2] || "text", c[1], c[2]);
  } else if (boldCode) {
    put(boldCode, /^\d+$/.test(c[0]) && boldCode.endsWith("H07") ? `Q${c[0]}` : c[0], c[1], c[2]);
  } else if (tableCode) {
    put(tableCode, c[0], c[1], c[2]);
  } else if (c[0].startsWith("`") || /^[a-z]+\.[a-z_]+/.test(c[0])) {
    put("UI", unquote(c[0]), c[1], c[2]); // §17.1 interface microcopy
  } else {
    put("SHARED", c[0], c[1], c[2]);
  }
}

// ---------- §18 image cards ----------
const media = {};
let current = null;
for (let i = end; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith("## 19.")) break;
  const card = line.match(/^####\s+(BV-IMG-\d+)\s+—\s+(.*)$/);
  if (card) {
    current = { id: card[1], title: card[2].trim() };
    media[current.id] = current;
    continue;
  }
  if (!current || !line.startsWith("|")) continue;
  const [field, value = ""] = cells(line);
  const map = {
    "Asset type": "assetType",
    Page: "page",
    Section: "section",
    "Project Visual ID": "project",
    "Desktop aspect ratio": "ratio",
    "EN alt text": "altEn",
    "RU alt text": "altRu",
    "EN caption": "captionEn",
    "RU caption": "captionRu",
    "AI disclosure EN": "disclosureEn",
    "AI disclosure RU": "disclosureRu",
  };
  if (map[field]) current[map[field]] = unquote(value);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/copy.json`, JSON.stringify(noDashDeep(copy), null, 2) + "\n");
writeFileSync(`${OUT_DIR}/media.json`, JSON.stringify(noDashDeep(media), null, 2) + "\n");
console.log(`copy: ${Object.keys(copy).length} blocks, media: ${Object.keys(media).length} cards`);
