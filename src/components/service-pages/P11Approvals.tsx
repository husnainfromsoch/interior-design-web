import { Body, H2, Intro, PrimaryButton, ProjectCards, ScopeList, Section, SplitHero, TextSplit } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { items, linkText, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.11 P11 Approvals & NOCs: N01–N07. Documentary page: no gallery, never
// shortened. No authority logos, no fee amounts, no review durations, no permit promises.
export default async function P11Approvals({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);
  const rows = [1, 2, 3, 4].map((n) => {
    const text = c("C-P11-N02", `row ${n}`);
    const dot = text.indexOf(". ");
    return { title: text.slice(0, dot + 1), body: text.slice(dot + 2) };
  });
  const [col1Title, ...col1Rest] = c("C-P11-N02b", "column 1").split(": ");
  const [col2Title, ...col2Rest] = c("C-P11-N02b", "column 2").split(": ");

  return (
    <>
      {/* N01: drawing view, contain on --surface, never cropped */}
      <SplitHero
        title={c("C-P11-N01", "H1")}
        body={c("C-P11-N01", "body")}
        cta={{ label: c("C-P11-N01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-59", locale)}
        contain
      />

      {/* N02: four-row text table desktop, stacked blocks mobile; row order fixed */}
      <Section surface>
        <H2>{c("C-P11-N02", "H2")}</H2>
        <Intro>{c("C-P11-N02", "intro")}</Intro>
        <dl className="mt-8 border-t border-bv-line lg:mt-10">
          {rows.map((r) => (
            <div key={r.title} className="grid gap-2 border-b border-bv-line py-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8">
              <dt className="text-[18px] font-semibold leading-[1.4] text-bv-ink">{r.title}</dt>
              <dd className="m-0 text-[16px] leading-[1.65] text-bv-muted lg:text-[17px]">{r.body}</dd>
            </div>
          ))}
        </dl>
        <Body className="mt-6">{c("C-P11-N02", "closing")}</Body>
      </Section>

      <Section>
        <TextSplit heading={c("C-P11-N02a", "H2")}>
          <Body lead>{c("C-P11-N02a", "body 1")}</Body>
          <Body>{c("C-P11-N02a", "body 2")}</Body>
        </TextSplit>
      </Section>

      <Section surface>
        <H2>{c("C-P11-N02b", "H2")}</H2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10 lg:gap-12">
          {[
            [col1Title, col1Rest.join(": ")],
            [col2Title, col2Rest.join(": ")],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-bv-line pt-5">
              <h3 className="text-[18px] font-semibold leading-[1.4] text-bv-ink">{title}</h3>
              <p className="mt-2 text-[16px] leading-[1.65] text-bv-muted lg:text-[17px]">{body}</p>
            </div>
          ))}
        </div>
        {/* Mandatory disclaimer at body size, never small print */}
        <Body className="mt-8">{c("C-P11-N02b", "disclaimer")}</Body>
      </Section>

      <Section>
        <H2>{c("C-P11-N03", "H2")}</H2>
        <ScopeList numbered items={items(c("C-P11-N03", "items")).map((title) => ({ title }))} />
      </Section>

      <Section compact>
        <div className="reveal flex flex-col gap-6 rounded-lg bg-bv-surface px-6 py-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-10">
          <p className="max-w-[60ch] font-bv-heading text-[22px] font-medium leading-[1.4] text-bv-ink lg:text-[26px]">{c("C-P11-N03a", "line")}</p>
          <PrimaryButton href="/about#leadership" variant="outline" className="flex-none">
            {linkText(sc("UI", "cta.meet_leadership", locale))}
          </PrimaryButton>
        </div>
      </Section>

      <Section surface>
        <TextSplit heading={c("C-P11-N04", "H2")}>
          <Body lead>{c("C-P11-N04", "body")}</Body>
        </TextSplit>
      </Section>

      <Section>
        <ProjectCards slugs={["coastal-villa-concept", "business-district-office-concept"]} locale={locale} />
      </Section>

      <FaqSection code="C-P11-N06" locale={locale} />
      <ClosingForm slug="approvals" locale={locale} related={["mep-hvac", "villa-renovation", "commercial-fit-out"]} />
    </>
  );
}
