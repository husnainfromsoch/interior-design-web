import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CtaBand, Intro, ProjectCards, RiseWords, Section } from "@/components/spec/blocks";
import { CONCEPTS_IN_CARD_ORDER } from "@/data/concepts";
import { sc } from "@/lib/spec";

// Spec §15.14 P14 Concept Projects: G01 intro (no hero image), G02 two-column grid of
// four cards, G03 CTA to the form on /contact.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${sc("C-P14-G01", "H1", locale)} | Bellvero Group`,
    description: sc("C-P14-G01", "intro", locale),
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-bv-background pb-4 pt-10 lg:pt-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <h1 className="font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
            <RiseWords text={sc("C-P14-G01", "H1", locale)} start={100} />
          </h1>
          <Intro>{sc("C-P14-G01", "intro", locale)}</Intro>
        </div>
      </section>

      <Section>
        <div className="-mt-8 lg:-mt-10">
          <ProjectCards slugs={CONCEPTS_IN_CARD_ORDER.map((c) => c.slug)} locale={locale} />
        </div>
      </Section>

      <Section compact>
        <CtaBand href="/contact#project-enquiry" text={sc("C-P14-G03", "CTA", locale)} />
      </Section>
    </>
  );
}
