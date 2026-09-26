import { Link } from "@/i18n/navigation";
import { Body, H2, Intro, MediaRow, Note, Section, SplitHero, ProcessSplit, TextWithMedia, WarrantyStrip } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { items, pair, sc } from "@/lib/spec";
import { ClosingForm, FaqSection, FORM_ANCHOR, type ServicePageProps } from "./common";

// Spec §15.8 P08 Bespoke Joinery: J01–J08. J03 carries the permanent anchor #capabilities.
export default async function P08BespokeJoinery({ locale }: ServicePageProps) {
  const c = (code: string, label: string) => sc(code, label, locale);
  const modules = items(c("C-P08-J02", "items")).map(pair);
  const moduleHrefs = ["/services/custom-kitchens", "/services/wardrobes", "#capabilities"];

  return (
    <>
      <SplitHero
        title={c("C-P08-J01", "H1")}
        body={c("C-P08-J01", "body")}
        cta={{ label: c("C-P08-J01", "CTA"), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-44", locale)}
      />

      <Section surface>
        <H2>{c("C-P08-J02", "H2")}</H2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3 lg:mt-10">
          {modules.map((m, i) => (
            <li key={m.title}>
              <Link
                href={moduleHrefs[i]}
                className="group flex h-full flex-col rounded-lg border border-bv-line bg-bv-background p-6 transition-colors hover:border-bv-accent lg:p-8"
              >
                <span className="font-bv-heading text-[26px] font-medium leading-[1.18] text-bv-ink group-hover:text-bv-accent lg:text-[30px]">{m.title}</span>
                <span className="mt-3 text-[16px] leading-[1.65] text-bv-muted lg:text-[17px]">{m.body}</span>
                <span aria-hidden="true" className="mt-auto pt-6 text-bv-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="capabilities">
        <H2>{c("C-P08-J03", "H2")}</H2>
        <Intro>{c("C-P08-J03", "body")}</Intro>
        <MediaRow assets={["BV-IMG-45", "BV-IMG-46", "BV-IMG-47"]} locale={locale} ratio="1:1" />
      </Section>

      <Section surface>
        <TextWithMedia heading={c("C-P08-J04", "H2")} media={getMedia("BV-IMG-48", locale)} ratio="4:5">
          <Body>{c("C-P08-J04", "body")}</Body>
        </TextWithMedia>
      </Section>

      <Section>
        <ProcessSplit
          heading={c("C-P08-J05", "H2")}
          steps={items(c("C-P08-J05", "steps")).map((title) => ({ title }))}
          aside={<Note>{c("C-P08-J05", "note")}</Note>}
        />
      </Section>

      <WarrantyStrip kind="joinery" locale={locale} />
      <FaqSection code="C-P08-J07" locale={locale} />
      <ClosingForm slug="bespoke-joinery" locale={locale} related={["custom-kitchens", "wardrobes", "materials-procurement"]} />
    </>
  );
}
