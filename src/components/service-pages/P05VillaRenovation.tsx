import { getTranslations } from "next-intl/server";
import { Body, CtaButton, EngStrip, H2, Intro, MediaFigure, Note, ProjectCards, ScopeList, Section, SplitHero, Steps, TextSplit, WarrantyStrip } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { items, linkText, pair, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.5 P05 Villa Renovation: V01–V09 with the ENG strip above the FAQ.
export default async function P05VillaRenovation({ locale }: ServicePageProps) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const c = (code: string, label: string) => sc(code, label, locale);
  const scopeImage = getMedia("BV-IMG-30", locale);
  const stages = [1, 2, 3, 4, 5].map((n) => pair(c("C-P01-H05", String(n))));

  return (
    <>
      <SplitHero
        title={c("C-P05-V01", "H1")}
        body={c("C-P05-V01", "body")}
        cta={{ label: sc("UI", "cta.primary", locale), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-29", locale)}
      />

      <Section surface>
        <H2>{c("C-P05-V02", "H2")}</H2>
        <ProjectCards slugs={["coastal-villa-concept", "garden-villa-concept"]} locale={locale} />
      </Section>

      <Section>
        <div className={scopeImage ? "grid items-start gap-8 lg:grid-cols-12 lg:gap-12" : undefined}>
          <div className="lg:col-span-7">
            <H2>{c("C-P05-V03", "H2")}</H2>
            <Intro>{c("C-P05-V03", "body")}</Intro>
            <ScopeList items={items(c("C-P05-V03", "list")).map((title) => ({ title }))} />
            <Note>{c("C-P05-V03", "note")}</Note>
          </div>
          {scopeImage && <MediaFigure asset={scopeImage} ratio="4:3" className="lg:col-span-5" />}
        </div>
      </Section>

      <Section surface>
        <TextSplit heading={c("C-P05-V04", "H2")}>
          <Body lead>{c("C-P05-V04", "body")}</Body>
        </TextSplit>
      </Section>

      <Section>
        <H2>{c("C-P05-V05", "H2")}</H2>
        <Intro>{c("C-P05-V05", "body")}</Intro>
        <ScopeList columns={3} items={items(c("C-P05-V05", "list")).map((title) => ({ title }))} />
      </Section>

      <EngStrip locale={locale} />

      <Section surface>
        <H2>{c("C-P05-V06", "H2")}</H2>
        <Intro>{c("C-P05-V06", "body")}</Intro>
        {/* 4:3 beside 4:5: columns 5fr / 3fr give both images the same height, no dead space under the first. */}
        <div className="mt-8 grid items-start gap-8 md:grid-cols-[5fr_3fr] lg:mt-10">
          <MediaFigure asset={getMedia("BV-IMG-31", locale)} ratio="4:3" />
          <MediaFigure asset={getMedia("BV-IMG-32", locale)} ratio="4:5" />
        </div>
        <CtaButton href="/services/bespoke-joinery" className="mt-8">
          {linkText(sc("UI", "cta.explore_joinery", locale))}
        </CtaButton>
      </Section>

      <Section>
        <H2>{t("processWarranty")}</H2>
        <Steps steps={stages} />
        <CtaButton href="/process" className="mt-10">
          {c("C-P01-H05", "Link")}
        </CtaButton>
      </Section>
      <WarrantyStrip kind="renovation" locale={locale} />

      <FaqSection code="C-P05-V08" locale={locale} withPayment />
      <ClosingForm slug="villa-renovation" locale={locale} heading={c("C-P05-V09", "form heading")} />
    </>
  );
}
