import { Body, H2, MediaRow, Note, ScopeList, Section, SplitHero, SurfaceBlock } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { pair, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.13 P13 Materials & Procurement: M01–M07. M02 order is fixed: Selection,
// Comparison, Specification, Coordination, the joint-working line, then the categories.
// No savings claims, no swatch circles, no material switcher.
export default async function P13MaterialsProcurement({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);

  return (
    <>
      <SplitHero
        title={c("C-P13-M01", "H1")}
        body={c("C-P13-M01", "body")}
        cta={{ label: c("C-P13-M01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-61", locale)}
      />

      <Section surface>
        <H2>{c("C-P13-M02", "H2")}</H2>
        <ScopeList items={[1, 2, 3, 4].map((n) => pair(c("C-P13-M02", `item ${n}`)))} />
        <Body className="mt-8">{c("C-P13-M02", "line")}</Body>
        <Note>{c("C-P13-M02", "categories")}</Note>
      </Section>

      <Section>
        <H2>{c("C-P13-M03", "H2")}</H2>
        <ScopeList
          items={[
            { title: "A", body: c("C-P13-M03", "A") },
            { title: "B", body: c("C-P13-M03", "B") },
          ]}
        />
        <Note>{c("C-P13-M03", "note")}</Note>
      </Section>

      <Section compact>
        <SurfaceBlock heading={c("C-P13-M04", "H2")}>
          <p>{c("C-P13-M04", "body")}</p>
        </SurfaceBlock>
      </Section>

      <Section>
        <H2>{c("C-P13-M05", "H2")}</H2>
        <MediaRow assets={["BV-IMG-62", "BV-IMG-63", "BV-IMG-64"]} locale={locale} ratio="4:5" />
      </Section>

      <FaqSection code="C-P13-M06" locale={locale} />
      <ClosingForm slug="materials-procurement" locale={locale} />
    </>
  );
}
