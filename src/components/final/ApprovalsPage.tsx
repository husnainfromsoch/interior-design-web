import EnquiryForm from "@/components/ui/EnquiryForm";
import FromInsights from "@/components/sections/FromInsights";
import { Body, Faq, H2, H3, Intro, PrimaryButton, ProjectCards, RelatedLinks, Rich, ScopeList, Section, SplitHero, TextSplit } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { serviceHref, serviceTitle, type ServiceSlug } from "@/data/servicePages";
import { doc, type DocBlock, type DocSection } from "@/lib/final";
import { faq, items, sc } from "@/lib/spec";
import { Block, CaseSection, ROW, TextSection } from "./DocPage";
import { formCopy } from "./formCopy";

// P11 Approvals & NOC (Final Changes Sheet, P11). The live page keeps its structure and
// its texts (earlier spec, N01–N06); the sheet adds Blocks A–G from the final copy and
// replaces the lines below. Blocks F and G have no visible heading.

type L = { en: string; ru: string };
// Row 3: the first paragraph of "The Route Depends…" (replaces its first two sentences).
const ROUTE_INTRO: L = {
  en: "In Dubai, the approval route depends on the property. The location decides which authority issues the permit, which drawing format is accepted and whether a community No Objection Certificate comes first.",
  ru: "В Дубае маршрут согласования зависит от объекта. Локация определяет, какой орган выдаёт разрешение, какой формат чертежей принимается и нужен ли сначала NOC сообщества.",
};
// Row 4: sentence deleted from the "Independent villa" route card.
const ROUTE_CARD_CUT: L = { en: " There is no master-developer layer.", ru: " Слоя управляющей компании нет." };
// Row 6
const SETTLED_H2: L = { en: "Why the Route Is Settled Before Design", ru: "Почему маршрут определяется до дизайна" };
// Row 7
const CHECK_LABEL: L = { en: "Usually needs only a check", ru: "Обычно достаточно проверки" };
// Row 8
const LIST_NOTE: L = {
  en: "This is a general guide. Requirements depend on the property, the responsible parties and the actual scope of works.",
  ru: "Это общий ориентир. Требования зависят от объекта, ответственных сторон и фактического состава работ.",
};
// Row 9
const ENGINEERING_LINE: L = {
  en: "Approvals are coordinated by our team, with engineering decisions led by our chief engineer, Haidar Al Gilani.",
  ru: "Согласования ведёт наша команда, а инженерными решениями руководит главный инженер Хайдар Аль-Гилани.",
};
// Row 13: FAQ "Why do you ask about the community before quoting?"
const FAQ_COMMUNITY: L = {
  en: "Because the community determines the route: the authority, the required documents and the accepted drawing format. We confirm it first, so the quote is accurate.",
  ru: "Потому что маршрут определяет сообщество: орган, нужные документы и формат чертежей. Мы подтверждаем его заранее, чтобы расчёт был точным.",
};
const RELATED: ServiceSlug[] = ["mep-hvac", "villa-renovation", "commercial-fit-out"];
const RELATED_HEADING: L = { en: "Related services", ru: "Связанные услуги" };

/** "Block A. In brief" → "In brief" */
const blockHeading = (s: DocSection) => s.heading.replace(/^\S+ \S\.\s*/, "");
const lastSentence = (text: string) => text.slice(text.lastIndexOf(". ", text.length - 3) + 2);

export default async function ApprovalsPage({ locale }: { locale: string }) {
  const lang = locale === "ru" ? "ru" : "en";
  const c = (code: string, label: string) => sc(code, label, locale);
  const [a, b, cWho, d, e, f, gCta] = doc("P11", locale).sections;

  const rows = [1, 2, 3, 4].map((n) => {
    const text = c("C-P11-N02", `row ${n}`).replace(ROUTE_CARD_CUT[lang], "");
    const dot = text.indexOf(". ");
    return { title: text.slice(0, dot + 1), body: text.slice(dot + 2) };
  });
  const [col1Title, ...col1Rest] = c("C-P11-N02b", "column 1").split(": ");
  const col2Body = c("C-P11-N02b", "column 2").split(": ").slice(1).join(": ");

  // Rows 12 and 13: FAQ 03 deleted, FAQ 06 answer replaced, Block F appended.
  const questions = [
    ...faq("C-P11-N06", locale)
      .filter((_, i) => i !== 2)
      .map((q, i, list) => (i === list.length - 1 ? { q: q.q, a: FAQ_COMMUNITY[lang] } : q)),
    ...f.blocks.filter((x): x is Extract<DocBlock, { t: "faq" }> => x.t === "faq"),
  ];

  return (
    <>
      <SplitHero
        title={c("C-P11-N01", "H1")}
        body={<p>{c("C-P11-N01", "body")}</p>}
        cta={{ label: c("C-P11-N01", "CTA") }}
        media={getMedia("BV-IMG-59", locale)}
        contain
      />

      {/* Blocks A and B, directly under the hero */}
      <div className="bg-bv-background">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <TextSection section={a} heading={blockHeading(a)} />
          <TextSection section={b} heading={blockHeading(b)} />
        </div>
      </div>

      {/* The Route Depends…: four-row text table desktop, stacked blocks mobile; row order fixed */}
      <Section surface>
        <H2>{c("C-P11-N02", "H2")}</H2>
        <Intro>
          {ROUTE_INTRO[lang]} {lastSentence(c("C-P11-N02", "intro"))}
        </Intro>
        <dl className="mt-8 border-t border-bv-line lg:mt-10">
          {rows.map((r) => (
            <div key={r.title} className="reveal grid gap-2 border-b border-bv-line py-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
              <dt className="t-h3">{r.title}</dt>
              <dd className="t-body m-0 text-bv-muted">{r.body}</dd>
            </div>
          ))}
        </dl>
        <Body className="mt-6">{c("C-P11-N02", "closing")}</Body>
      </Section>

      <div className="bg-bv-background">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <TextSection section={cWho} heading={blockHeading(cWho)} />
        </div>
      </div>

      <Section surface>
        <TextSplit heading={SETTLED_H2[lang]}>
          <Body>{c("C-P11-N02a", "body 1")}</Body>
          <Body>{c("C-P11-N02a", "body 2")}</Body>
        </TextSplit>
      </Section>

      <Section>
        <H2>{c("C-P11-N02b", "H2")}</H2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10 lg:gap-12">
          {[
            [col1Title, col1Rest.join(": ")],
            [CHECK_LABEL[lang], col2Body],
          ].map(([title, body]) => (
            <div key={title} className="reveal border-t border-bv-line pt-5">
              <H3>{title}</H3>
              <p className="t-body mt-2 text-bv-muted">{body}</p>
            </div>
          ))}
        </div>
        <Body className="mt-8">{LIST_NOTE[lang]}</Body>
      </Section>

      <Section surface>
        <H2>{c("C-P11-N03", "H2")}</H2>
        <ScopeList numbered items={items(c("C-P11-N03", "items")).map((title) => ({ title }))} />
        <Body className="mt-8">{ENGINEERING_LINE[lang]}</Body>
      </Section>

      {/* Block D replaces "What to Share with Us"; Block E case, then the two concept cards; FAQ */}
      <div className="bg-bv-background">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <TextSection section={d} heading={blockHeading(d)} />
          <CaseSection section={e} heading={blockHeading(e)} />
          <section className={ROW}>
            <ProjectCards slugs={["coastal-villa-concept", "business-district-office-concept"]} locale={locale} />
          </section>
          <section className={ROW}>
            <Faq
              heading={locale === "ru" ? "Частые вопросы" : "Frequently asked questions"}
              items={questions.map((q) => ({ q: q.q, a: <Rich text={q.a} /> }))}
            />
          </section>
          <FromInsights serviceSlug="approvals" />
        </div>
      </div>

      {/* Block G: text and button above the form, no heading */}
      <Section surface>
        <div className="max-w-[760px] space-y-5">
          {gCta.blocks.map((x, i) => (x.t === "button" ? <PrimaryButton key={i}>{x.text}</PrimaryButton> : <Block key={i} block={x} />))}
        </div>
      </Section>
      <EnquiryForm copy={formCopy(locale)} defaultService="approvals" leadSource="P11" noHeading />

      <RelatedLinks heading={RELATED_HEADING[lang]} links={RELATED.map((s) => ({ label: serviceTitle(s, locale), href: serviceHref(s) }))} />
    </>
  );
}
