// Owner request 2026-09-26: no em dashes (—) anywhere on the site.
// Replaces each " — " with punctuation that fits its position:
//   "Title — body" (short lead-in, no sentence break)  → "Title: body"
//   "Question? — answer"                                → "Question? answer"
//   "a — aside — b" (two dashes in one sentence)        → "a, aside, b"
//   any other dash: EN → ", "   RU → ": "
// A bare "—" (empty value) becomes "-".

const LEAD_MAX = 60;

// Sentences where the rule above reads badly: rewritten by hand.
const OVERRIDES = [
  ["shortly — if your message", "shortly. If your message"],
  ["upgrades — design, approvals", "upgrades: design, approvals"],
  ["plumbing loads — each carries", "plumbing loads: each carries"],
  ["furniture commission — share", "furniture commission: share"],
  [
    "Интерьер — связанный проект: дизайн должен быть технически реализуемым, работы — соответствовать согласованному объёму, а мебель — подходить",
    "Интерьер представляет собой связанный проект: дизайн должен быть технически реализуемым, работы должны соответствовать согласованному объёму, а мебель должна подходить",
  ],
  ["Согласование в Дубае — это не одна процедура", "Согласование в Дубае не сводится к одной процедуре"],
  ["управляющей компании сообщества — определяется", "управляющей компании сообщества, определяется"],
  ["Задача роли — сохранять понятную коммуникацию между вами и командой: чтобы", "Задача роли: сохранять понятную коммуникацию между вами и командой, чтобы"],
  ["Честный первый ответ — встречный вопрос:", "Честный первый ответ звучит как встречный вопрос:"],
  ["квадратный метр?» — не тот", "квадратный метр?» не тот"],
  ["Чего он не видит — так это", "Чего он не видит, так это"],
  ["дизайн-проекта — и та, где", "дизайн-проекта, и та, где"],
];

function sentenceStart(text, i) {
  const before = text.slice(0, i);
  const m = Math.max(before.lastIndexOf(". "), before.lastIndexOf("! "), before.lastIndexOf("\n"));
  return m === -1 ? 0 : m + 1;
}

// True when the text since the start of the string (or of the current " · " list item)
// holds no sentence break, i.e. the dash follows a lead-in or item title.
function itemStart(text) {
  const item = text.slice(text.lastIndexOf(" · ") + 1);
  return !/[.!?]\s/.test(item) && !item.includes("\n");
}

export function noDash(text, locale) {
  if (typeof text !== "string" || !text.includes("—")) return text;
  if (text.trim() === "—") return text.replace("—", "-");
  for (const [from, to] of OVERRIDES) text = text.split(from).join(to);
  // Article markup prefix, not visible text.
  text = text.replace(/^Callout\s*—\s*/gm, "Callout: ");
  let out = "";
  let rest = text;
  let openPair = false;
  for (;;) {
    const i = rest.search(/\s*—\s*/);
    if (i === -1) break;
    const m = rest.slice(i).match(/^\s*—\s*/)[0];
    const head = rest.slice(0, i);
    const tail = rest.slice(i + m.length);
    const full = out + head;
    const start = sentenceStart(full, full.length);
    const lead = full.slice(Math.max(start, full.lastIndexOf(" · ") + 3)).trim();
    // Second dash of a pair in the same sentence → comma.
    const nextStop = tail.search(/[.!?\n]/);
    const nextDash = tail.indexOf("—");
    let sep;
    if (openPair && !/[.!?\n]/.test(head)) sep = ", ";
    else if (head.length === 0 && out.length === 0) sep = "";
    else if (/[?!]$/.test(head)) sep = " ";
    else if (/[.:;,]$/.test(head)) sep = " ";
    else if (itemStart(full) && lead.length <= LEAD_MAX && !/[.,;]/.test(lead)) sep = ": ";
    else if (nextDash !== -1 && (nextStop === -1 || nextDash < nextStop)) sep = ", ";
    else sep = locale === "ru" ? ": " : ", ";
    openPair = !openPair && sep === ", " && nextDash !== -1 && (nextStop === -1 || nextDash < nextStop);
    out += head + sep;
    rest = tail;
  }
  return out + rest;
}

/** Deep-apply to a JSON value. `locale` is taken from "en"/"ru"/"...Ru"/"...En" keys when present. */
export function noDashDeep(value, locale = "en", key = "") {
  const loc = /(^ru$|Ru$)/.test(key) ? "ru" : /(^en$|En$)/.test(key) ? "en" : locale;
  if (typeof value === "string") return noDash(value, loc);
  if (Array.isArray(value)) return value.map((v) => noDashDeep(v, loc, key));
  if (value && typeof value === "object") {
    const o = {};
    for (const [k, v] of Object.entries(value)) o[k] = noDashDeep(v, loc, k);
    return o;
  }
  return value;
}
