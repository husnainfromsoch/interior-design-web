import { getTranslations } from "next-intl/server";
import { Body, H2, ScopeList, Section, SplitHero, Steps, TextSplit } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { items, pair, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.12 P12 MEP & HVAC: E01–E06. Design, installation and upgrades; never routine
// AC servicing. Specific tests are not promised.
export default async function P12MepHvac({ locale }: ServicePageProps) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const c = (code: string, label: string) => sc(code, label, locale);

  return (
    <>
      <SplitHero
        title={c("C-P12-E01", "H1")}
        body={c("C-P12-E01", "body")}
        cta={{ label: c("C-P12-E01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-60", locale)}
        contain
      />

      <Section surface>
        <H2>{t("scope")}</H2>
        <ScopeList items={items(c("C-P12-E02", "items")).map(pair)} />
      </Section>

      <Section>
        <TextSplit heading={c("C-P12-E03", "H2")}>
          <Body lead>{c("C-P12-E03", "body")}</Body>
        </TextSplit>
      </Section>

      <Section surface>
        <H2>{t("process")}</H2>
        <Steps steps={items(c("C-P12-E04", "steps")).map((title) => ({ title }))} />
      </Section>

      <FaqSection code="C-P12-E05" locale={locale} />
      <ClosingForm slug="mep-hvac" locale={locale} related={["approvals", "commercial-fit-out", "villa-renovation"]} />
    </>
  );
}
