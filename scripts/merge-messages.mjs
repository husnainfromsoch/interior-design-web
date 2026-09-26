// Deep-merges a JSON patch into messages/en.json and messages/ru.json, keeping the
// files' CRLF line endings and 2-space indentation.
//   node scripts/merge-messages.mjs path/to/patch.json
// Patch shape: { "en": { "Namespace": { ... } }, "ru": { ... } }. A null value deletes a key.
import { readFileSync, writeFileSync } from "node:fs";

const patch = JSON.parse(readFileSync(process.argv[2], "utf8"));

const merge = (target, source) => {
  for (const [k, v] of Object.entries(source)) {
    if (v === null) delete target[k];
    else if (v && typeof v === "object" && !Array.isArray(v) && target[k] && typeof target[k] === "object" && !Array.isArray(target[k])) merge(target[k], v);
    else target[k] = v;
  }
};

for (const locale of ["en", "ru"]) {
  if (!patch[locale]) continue;
  const file = `messages/${locale}.json`;
  const raw = readFileSync(file, "utf8");
  const data = JSON.parse(raw);
  merge(data, patch[locale]);
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  writeFileSync(file, JSON.stringify(data, null, 2).replace(/\n/g, eol) + eol);
}
console.log("merged");
