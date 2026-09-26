import { getTranslations } from "next-intl/server";
import { Body, CtaButton, H2, Intro, MediaFigure, Note, ScopeList, Section, SplitHero, ProcessSplit, TextSplit, WarrantyStrip } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { serviceTitle } from "@/data/servicePages";
import { items, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.10 P10 Wardrobes & Dressing Rooms: W01–W07. W04 repeats J04, W05 the J05 steps.
export default async function P10Wardrobes({ locale }: ServicePageProps) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const c = (code: string, label: string) => sc(code, label, locale);
  const closed = getMedia("BV-IMG-57", locale);
  const open = getMedia("BV-IMG-58", locale);
  const [closedCaption, openCaption] = items(c("C-P10-W03", "captions"));

  return (
    <>
      <SplitHero
        title={c("C-P10-W01", "H1")}
        body={c("C-P10-W01", "body")}
        cta={{ label: c("C-P10-W01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-56", locale)}
      />

      <Section>
        <H2>{c("C-P10-W02", "H2")}</H2>
        <Intro>{c("C-P10-W02", "body")}</Intro>
        <ScopeList items={items(c("C-P10-W02", "list")).map((title) => ({ title }))} />
        <Note>{c("C-P10-W02", "note")}</Note>
      </Section>

      {/* W03: hidden unless both frames exist; one frame alone does not make the point */}
      {closed && open && (
        <Section surface>
          <H2>{c("C-P10-W03", "H2")}</H2>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-2 lg:mt-10">
            <MediaFigure asset={{ ...closed, caption: closedCaption }} ratio="4:5" />
            <MediaFigure asset={{ ...open, caption: openCaption }} ratio="4:5" />
          </div>
        </Section>
      )}

      <Section>
        <TextSplit heading={c("C-P08-J04", "H2")}>
          <Body lead>{c("C-P08-J04", "body")}</Body>
          <CtaButton href="/services/bespoke-joinery" className="pt-3">
            {serviceTitle("bespoke-joinery", locale)}
          </CtaButton>
        </TextSplit>
      </Section>

      <Section surface>
        <ProcessSplit heading={t("process")} steps={items(c("C-P08-J05", "steps")).map((title) => ({ title }))} />
      </Section>

      <FaqSection code="C-P10-W06" locale={locale} />
      <WarrantyStrip kind="joinery" locale={locale} />
      <ClosingForm slug="wardrobes" locale={locale} />
    </>
  );
}
