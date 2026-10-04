import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { CompletedProjects } from "@/components/final/shared";
import { formCopy } from "@/components/final/formCopy";
import { H2, Intro, PrimaryButton, ProjectCards, Section, SplitHero } from "@/components/spec/blocks";
import { CONCEPTS_IN_CARD_ORDER } from "@/data/concepts";
import { block, meta, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P14 Projects (Final Changes Sheet, P14): PJ01 hero, PJ02 completed projects (hidden
// until one is published with photos), PJ03 concept projects.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P14", locale), "/projects", locale);
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const hero = block("P14", "PJ01", locale);
  const concepts = block("P14", "PJ03", locale);

  return (
    <>
      <SplitHero title={val(hero[0])} body={<p>{val(hero[1])}</p>} />
      <CompletedProjects page="P14" id="PJ02" locale={locale} />
      <Section>
        <H2>{val(concepts[0])}</H2>
        <Intro>{val(concepts[1])}</Intro>
        <ProjectCards slugs={CONCEPTS_IN_CARD_ORDER.map((c) => c.slug)} locale={locale} />
        <div className="mt-10">
          <PrimaryButton>{val(concepts[4])}</PrimaryButton>
        </div>
      </Section>
      <EnquiryForm copy={formCopy(locale)} leadSource="P14" />
    </>
  );
}
