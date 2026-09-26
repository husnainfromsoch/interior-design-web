import { Body, EngStrip, H2, Intro, MediaFigure, ProjectCard, ScopeList, Section, SplitHero, TextLink, WarrantyStrip } from "@/components/spec/blocks";
import Gallery from "@/components/spec/Gallery";
import { lightboxLabels } from "@/components/spec/labels";
import { getMedia, getMediaList } from "@/data/media";
import { serviceTitle } from "@/data/servicePages";
import { items, pair, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.6 P06 Apartment Renovation: A01–A08.
export default async function P06ApartmentRenovation({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);
  const buildingImage = getMedia("BV-IMG-35", locale);

  return (
    <>
      <SplitHero
        title={c("C-P06-A01", "H1")}
        body={c("C-P06-A01", "body")}
        cta={{ label: sc("UI", "cta.primary", locale), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-33", locale)}
      />

      {/* A02: wide 8:5 card with the scope line, linking to P17 */}
      <Section surface>
        <H2>{c("C-P06-A02", "H2")}</H2>
        <div className="mt-8 lg:mt-10">
          <ProjectCard slug="tower-residence-concept" locale={locale} wide />
        </div>
      </Section>

      <Section>
        <H2>{c("C-P06-A03", "H2")}</H2>
        <Intro>{c("C-P06-A03", "body")}</Intro>
        <ScopeList items={items(c("C-P06-A03", "list")).map((title) => ({ title }))} />
      </Section>

      <Section surface>
        <div className={buildingImage ? "grid items-start gap-8 lg:grid-cols-12 lg:gap-12" : undefined}>
          <div className="lg:col-span-7">
            <H2>{c("C-P06-A04", "H2")}</H2>
            <ScopeList items={items(c("C-P06-A04", "items")).map(pair)} />
          </div>
          {buildingImage && <MediaFigure asset={buildingImage} ratio="4:5" className="lg:col-span-5" />}
        </div>
      </Section>

      <Section compact>
        <div className="border-l-2 border-bv-accent pl-6 lg:ml-[calc(100%/12*5)] lg:pl-10">
          <Body lead>{c("C-P06-A05", "body")}</Body>
        </div>
      </Section>

      <Section>
        <H2>{c("C-P06-A06", "H2")}</H2>
        <Gallery items={getMediaList(["BV-IMG-36", "BV-IMG-37", "BV-IMG-38"], locale)} wide={["BV-IMG-38"]} labels={lightboxLabels(locale)} />
        <div className="mt-6 flex flex-wrap gap-x-8">
          <TextLink href="/services/custom-kitchens">{serviceTitle("custom-kitchens", locale)}</TextLink>
          <TextLink href="/services/wardrobes">{serviceTitle("wardrobes", locale)}</TextLink>
        </div>
      </Section>

      <EngStrip locale={locale} />
      <FaqSection code="C-P06-A07" locale={locale} withPayment />
      {/* A08: renovation warranty strip, then F1 */}
      <WarrantyStrip kind="renovation" locale={locale} />
      <ClosingForm slug="apartment-renovation" locale={locale} />
    </>
  );
}
