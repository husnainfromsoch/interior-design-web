// Verifies that every text of the final copy can be rendered: each [Link text] has a URL
// in the Changes Sheet's G8 map, every block line parses the way its page reads it, and
// the form, navigation and meta tables are complete, in both languages.
//   npx tsx scripts/check-final-copy.ts
import { block, doc, dots, linkHref, meta, numbered, runs, titled, val } from "../src/lib/final";
import { formCopy } from "../src/components/final/formCopy";
import { footerLinks, headerNav } from "../src/components/final/navCopy";
import { SERVICE_PAGES } from "../src/data/servicePages";

const DOC_PAGES = ["P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13", "P22", "P23"];
const META_PAGES = ["P01", ...DOC_PAGES, "P14", "P19", "P20", "P21"];
let texts = 0;
let links = 0;

const rich = (text: string) => {
  texts++;
  links += runs(text).filter((r) => r.href).length;
};

for (const locale of ["en", "ru"]) {
  for (const page of META_PAGES) {
    const m = meta(page, locale);
    if (!m.title || !m.description) throw new Error(`${page} ${locale}: empty meta`);
  }

  for (const page of DOC_PAGES) {
    const d = doc(page, locale);
    d.related.forEach(linkHref);
    for (const s of d.sections) {
      for (const b of s.blocks) {
        if (b.t === "p") rich(b.text);
        else if (b.t === "ul" || b.t === "ol") b.items.forEach(rich);
        else if (b.t === "table") b.rows.flat().forEach(rich);
        else if (b.t === "case") b.rows.forEach((r) => rich(r.text));
        else if (b.t === "faq") rich(b.a);
      }
    }
  }
  if (doc("P11", locale).sections.length !== 7) throw new Error("P11: expected Blocks A–G");
  for (const s of SERVICE_PAGES) if (!doc(s.page, locale)) throw new Error(`No copy for ${s.slug}`);

  // P01 Home
  const b = (id: string) => block("P01", id, locale);
  b("H01").slice(0, 5).map(val);
  dots(b("H01b")[0]);
  const services = b("H02");
  for (const line of services.slice(1, 6)) {
    const [, cardLinks] = numbered(line).body.split(/ (?:Links?|Ссылк[аи]): /);
    dots(cardLinks).forEach(linkHref);
  }
  linkHref(val(services[6]));
  linkHref(val(b("H04")[3]));
  b("H05").slice(2, 6).map(titled);
  b("H06").slice(1, 6).map(numbered);
  linkHref(val(b("H06")[6]));
  b("H07").slice(2, 4).forEach((l) => {
    if (dots(val(l)).length !== 2) throw new Error(`H07 role line: ${l}`);
  });
  const faq = b("H08");
  faq.slice(1, 8).map(numbered);
  if (titled(val(faq[8])).body.split(/ (?:Button|Кнопка): /).length !== 2) throw new Error("H08 side box");

  // P19 Our Process
  const pr = (id: string) => block("P19", id, locale);
  pr("PR02").slice(1, 11).map(numbered);
  const ways = pr("PR03").slice(1, 5).map(numbered);
  if (ways.map((w) => w.anchor).join() !== "design-only,design-and-build,build-from-your-design,individual-services") throw new Error("PR03 anchors");
  dots(val(pr("PR03b")[1])).forEach(linkHref);

  // P20 About
  const a = (id: string) => block("P20", id, locale);
  const [joinery, metal] = dots(val(a("A04")[2]));
  linkHref(joinery);
  linkHref(metal);
  linkHref(val(a("A05")[2]));
  if (a("A03b").slice(3, 6).some((row) => dots(row).length !== 4)) throw new Error("A03b table");
  if (!val(a("A04b")[1]).includes("{licence_number}")) throw new Error("A04b placeholder");

  // P14, P21
  if (block("P14", "PJ03", locale).length !== 5) throw new Error("PJ03");
  if (block("P21", "K02", locale).length !== 5 || block("P21", "K03", locale).length !== 5) throw new Error("P21");

  // Global
  const form = formCopy(locale);
  if (form.nextSteps.length !== 3 || form.locations.length !== 3) throw new Error("F1 copy");
  const nav = headerNav(locale);
  if (nav.serviceGroups.length !== 4 || nav.links.length !== 4) throw new Error("Header nav");
  if (nav.serviceGroups.flatMap((g) => g.services).length !== SERVICE_PAGES.length) throw new Error("Services menu does not list every service page");
  if (footerLinks(locale).length !== 6) throw new Error("Footer links");
}

console.log(`final copy ok: ${texts} texts, ${links} inline links, ${META_PAGES.length} meta rows, EN + RU`);
