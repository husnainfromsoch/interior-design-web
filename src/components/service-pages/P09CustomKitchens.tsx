import { H2, Intro, MediaFigure, Note, ProcessSplit, ScopeList, Section, SplitHero, SurfaceBlock, WarrantyStrip } from "@/components/spec/blocks";
import Gallery from "@/components/spec/Gallery";
import { lightboxLabels } from "@/components/spec/labels";
import { getMedia, getMediaList } from "@/data/media";
import { items, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.9 P09 Custom Kitchens: K01–K08. K05 is the six-step list adapted from J05.
export default async function P09CustomKitchens({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);
  const drawing = getMedia("BV-IMG-50", locale);
  const interior = getMedia("BV-IMG-51", locale);

  return (
    <>
      <SplitHero
        title={c("C-P09-K01", "H1")}
        body={c("C-P09-K01", "body")}
        cta={{ label: c("C-P09-K01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-49", locale)}
      />

      <Section surface>
        <H2>{c("C-P09-K02", "H2")}</H2>
        <Intro>{c("C-P09-K02", "body")}</Intro>
        {drawing && interior && (
          <div className="mt-8 grid items-start gap-8 md:grid-cols-2 lg:mt-10">
            <MediaFigure asset={drawing} ratio="4:3" contain />
            <MediaFigure asset={interior} ratio="4:3" />
          </div>
        )}
      </Section>

      <Section>
        <H2>{c("C-P09-K03", "H2")}</H2>
        <ScopeList columns={3} items={items(c("C-P09-K03", "items")).map((title) => ({ title }))} />
        <Note>{c("C-P09-K03", "note")}</Note>
      </Section>

      <Section surface>
        <H2>{c("C-P09-K04", "H2")}</H2>
        <Gallery items={getMediaList(["BV-IMG-52", "BV-IMG-53", "BV-IMG-54", "BV-IMG-55"], locale)} labels={lightboxLabels(locale)} />
      </Section>

      {/* K05 steps and the K06 quote block share one split section: timeline right, quote left */}
      <Section>
        <ProcessSplit
          heading={c("C-P09-K05", "H2")}
          steps={items(c("C-P08-J05", "steps")).map((title) => ({ title }))}
          aside={
            <SurfaceBlock heading={c("C-P09-K06", "H2")}>
              <p>{c("C-P09-K06", "body")}</p>
            </SurfaceBlock>
          }
        />
      </Section>

      <FaqSection code="C-P09-K07" locale={locale} cta={{ label: c("C-P09-K01", "CTA"), href: FORM_ANCHOR }} />
      <WarrantyStrip kind="joinery" locale={locale} />
      <ClosingForm slug="custom-kitchens" locale={locale} related={["wardrobes", "materials-procurement"]} />
    </>
  );
}
