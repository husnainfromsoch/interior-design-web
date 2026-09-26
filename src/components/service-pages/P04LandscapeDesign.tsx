import { getTranslations } from "next-intl/server";
import { Body, H2, Intro, MediaRow, Note, ScopeList, Section, SplitHero, Steps, SurfaceBlock } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { items, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.4 P04 Landscape Design: L01–L07.
export default async function P04LandscapeDesign({ locale }: ServicePageProps) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const c = (code: string, label: string) => sc(code, label, locale);

  return (
    <>
      <SplitHero
        eyebrow={c("C-P04-L01", "eyebrow")}
        title={c("C-P04-L01", "H1")}
        body={c("C-P04-L01", "body")}
        cta={{ label: c("C-P04-L01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-25", locale)}
      />

      <Section surface>
        <H2>{c("C-P04-L02", "H2")}</H2>
        <Intro>{c("C-P04-L02", "body")}</Intro>
        <MediaRow assets={["BV-IMG-26", "BV-IMG-27", "BV-IMG-28"]} locale={locale} ratio="4:3" />
      </Section>

      <Section>
        <H2>{t("scope")}</H2>
        <ScopeList items={items(c("C-P04-L03", "list")).map((title) => ({ title }))} />
        <Note>{c("C-P04-L03", "note")}</Note>
      </Section>

      <Section compact>
        <SurfaceBlock heading={c("C-P04-L04", "H2")}>
          <p>{c("C-P04-L04", "body")}</p>
        </SurfaceBlock>
      </Section>

      <Section>
        <H2>{t("process")}</H2>
        <Steps horizontal steps={c("C-P04-L05", "steps").split(" → ").map((title) => ({ title }))} />
        <Body className="mt-8 text-bv-muted">{c("C-P04-L05", "note")}</Body>
      </Section>

      <FaqSection code="C-P04-L06" locale={locale} />
      <ClosingForm slug="landscape-design" locale={locale} related={["villa-renovation", "materials-procurement"]} />
    </>
  );
}
