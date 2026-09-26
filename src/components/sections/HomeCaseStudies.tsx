import { getLocale } from "next-intl/server";
import { H2, Intro, ProjectCards, Section, TextLink } from "@/components/spec/blocks";
import { CONCEPTS_IN_CARD_ORDER } from "@/data/concepts";
import { sc } from "@/lib/spec";

// Spec §15.1 H03 Concept projects: H2, intro, four CARD-PROJECT items in a 2 × 2 grid
// (one column on mobile), concept disclosure on every card, CTA to /projects.
export default async function HomeCaseStudies() {
  const locale = await getLocale();
  return (
    <Section>
      <H2>{sc("C-P01-H03", "H2", locale)}</H2>
      <Intro>{sc("C-P01-H03", "Intro", locale)}</Intro>
      <ProjectCards slugs={CONCEPTS_IN_CARD_ORDER.map((c) => c.slug)} locale={locale} />
      <TextLink href="/projects" className="mt-10">
        {sc("C-P01-H03", "CTA", locale)}
      </TextLink>
    </Section>
  );
}
