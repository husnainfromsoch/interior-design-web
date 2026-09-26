import { Body, EngStrip, H2, Intro, Note, ProjectCard, ScopeList, Section, SplitHero, TextSplit } from "@/components/spec/blocks";
import Gallery from "@/components/spec/Gallery";
import { lightboxLabels } from "@/components/spec/labels";
import { getMedia, getMediaList } from "@/data/media";
import { items, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.7 P07 Commercial Fit-Out: C01–C07.
export default async function P07CommercialFitOut({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);

  return (
    <>
      <SplitHero
        title={c("C-P07-C01", "H1")}
        body={c("C-P07-C01", "body")}
        cta={{ label: c("C-P07-C01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-39", locale)}
      />

      {/* C02: full-width WIDE card linking to P18 */}
      <Section surface>
        <H2>{c("C-P07-C02", "H2")}</H2>
        <Intro>{c("C-P07-C02", "body")}</Intro>
        <div className="mt-8 lg:mt-10">
          <ProjectCard slug="business-district-office-concept" locale={locale} wide />
        </div>
      </Section>

      <Section>
        <H2>{c("C-P07-C03", "H2")}</H2>
        <ScopeList numbered items={items(c("C-P07-C03", "list")).map((title) => ({ title }))} />
        <Note>{c("C-P07-C03", "note")}</Note>
      </Section>

      <Section surface>
        <TextSplit heading={c("C-P07-C04", "H2")}>
          <Body lead>{c("C-P07-C04", "body")}</Body>
        </TextSplit>
      </Section>

      <Section>
        <H2>{c("C-P07-C05", "H2")}</H2>
        <Gallery items={getMediaList(["BV-IMG-41", "BV-IMG-42", "BV-IMG-43"], locale)} wide={["BV-IMG-43"]} labels={lightboxLabels(locale)} />
      </Section>

      <EngStrip locale={locale} />
      <FaqSection code="C-P07-C06" locale={locale} withPayment />
      <ClosingForm slug="commercial-fit-out" locale={locale} related={["approvals", "mep-hvac", "materials-procurement"]} />
    </>
  );
}
