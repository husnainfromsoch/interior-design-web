import { Body, H2, Intro, MediaFigure, Note, ProjectCards, ScopeList, Section, SplitHero, TextWithMedia } from "@/components/spec/blocks";
import SampleViewer from "@/components/spec/SampleViewer";
import { lightboxLabels } from "@/components/spec/labels";
import ServiceFees from "@/components/sections/ServiceFees";
import { getMedia, getMediaList } from "@/data/media";
import { items, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.3 P03 Interior Design: D01–D08.
export default async function P03InteriorDesign({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);
  const triptych = getMediaList(["BV-IMG-15", "BV-IMG-16", "BV-IMG-17"], locale);
  const drawings = getMediaList(["BV-IMG-18", "BV-IMG-19", "BV-IMG-20", "BV-IMG-21", "BV-IMG-22", "BV-IMG-23"], locale);

  return (
    <>
      <SplitHero
        eyebrow={c("C-P03-D01", "eyebrow")}
        title={c("C-P03-D01", "H1")}
        body={c("C-P03-D01", "body")}
        cta={{ label: c("C-P03-D01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-14", locale)}
      />

      {/* D02: hidden entirely if any of the three frames is unpublished */}
      {triptych.length === 3 && (
        <Section surface>
          <H2>{c("C-P03-D02", "H2")}</H2>
          <Intro>{c("C-P03-D02", "body")}</Intro>
          <div className="mt-8 grid gap-8 md:grid-cols-3 lg:mt-10">
            {triptych.map((m) => (
              <MediaFigure key={m.id} asset={m} ratio="4:3" sizes="(min-width: 768px) 33vw, 100vw" />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <H2>{c("C-P03-D03", "H2")}</H2>
        <ScopeList items={items(c("C-P03-D03", "list")).map((title) => ({ title }))} />
        <Note>{c("C-P03-D03", "note")}</Note>
        {/* D03a */}
        <SampleViewer
          items={drawings}
          buttonLabel={c("C-P03-D03a", "button")}
          note={c("C-P03-D03a", "note")}
          labels={lightboxLabels(locale)}
        />
      </Section>

      {/* D04, anchor #fees */}
      <ServiceFees />

      <Section surface>
        <TextWithMedia heading={c("C-P03-D05", "H2")} media={getMedia("BV-IMG-24", locale)} ratio="4:3" contain>
          <Body>{c("C-P03-D05", "body")}</Body>
        </TextWithMedia>
      </Section>

      <Section>
        <H2>{c("C-P03-D06", "H2")}</H2>
        <ProjectCards slugs={["coastal-villa-concept", "tower-residence-concept"]} locale={locale} />
      </Section>

      <FaqSection code="C-P03-D07" locale={locale} />
      <ClosingForm slug="interior-design" locale={locale} related={["landscape-design", "materials-procurement", "villa-renovation"]} />
    </>
  );
}
