import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Body, H2, MediaFigure, ProjectCards, RiseWords, Section, TextLink } from "@/components/spec/blocks";
import Gallery from "@/components/spec/Gallery";
import { lightboxLabels } from "@/components/spec/labels";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { CONCEPTS, conceptTitle, getConcept } from "@/data/concepts";
import { getMedia, getMediaList } from "@/data/media";
import { serviceHref, serviceTitle, type ServiceSlug } from "@/data/servicePages";
import { items, sc, scMaybe } from "@/lib/spec";

// Spec §15.15 concept project template, P15–P18: CS01–CS09. No areas, budgets,
// durations, client names, addresses, dates, status words or before/after blocks.

const WIDE: Record<string, string> = {
  "coastal-villa-concept": "BV-IMG-70",
  "garden-villa-concept": "BV-IMG-77",
  "tower-residence-concept": "BV-IMG-84",
  "business-district-office-concept": "BV-IMG-90",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => CONCEPTS.map((c) => ({ locale, slug: c.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};
  return {
    title: `${sc(`C-${concept.page}-CS02`, "H1", locale)} | Bellvero Group`,
    description: sc(`C-${concept.page}-CS03`, "overview", locale),
  };
}

export default async function ConceptProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const concept = getConcept(slug);
  if (!concept) notFound();

  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const code = (block: string) => `C-${concept.page}-${block}`;
  const title = sc(code("CS02"), "H1", locale);
  const cover = getMedia(concept.cover, locale);
  const plan = getMedia(concept.plan, locale);
  const mood = getMedia(concept.mood, locale);
  const gallery = getMediaList(concept.gallery, locale);
  const planCaption = scMaybe(code("CS05"), "caption", locale);
  const moodCaption = scMaybe(code("CS06"), "caption", locale);

  return (
    <>
      <section className="bg-bv-background pb-10 pt-8 lg:pb-16 lg:pt-12">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          {/* CS01 */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[14px] text-bv-muted">
              <li>
                <Link href="/projects" className="underline-offset-4 hover:text-bv-ink hover:underline">
                  {sc("UI", "breadcrumb.projects", locale)}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-bv-ink">
                {conceptTitle(concept, locale)}
              </li>
            </ol>
          </nav>
          {/* CS02: concept disclosure directly beneath the cover, above the fold on mobile */}
          <h1 className="mt-6 font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
            <RiseWords text={title} start={100} />
          </h1>
          <p className="mt-4 text-[15px] leading-[1.5] text-bv-muted">{sc(code("CS02"), "scope line", locale)}</p>
          {cover && <MediaFigure asset={cover} priority ratio="16:9" className="mt-8" sizes="100vw" />}
        </div>
      </section>

      <Section surface>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <H2>{t("overview")}</H2>
            <Body className="mt-6">{sc(code("CS03"), "overview", locale)}</Body>
          </div>
          <div>
            <H2>{t("scopeIllustrated")}</H2>
            <ul className="mt-6 space-y-3">
              {items(sc(code("CS04"), "scope", locale)).map((it) => (
                <li key={it} className="flex gap-3 text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]">
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-bv-accent" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CS05 hidden when the drawing is unpublished; CS06 one palette of this project only */}
      {(plan || mood) && (
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {plan && (
              <div>
                <H2>{t("planDesign")}</H2>
                <MediaFigure asset={{ ...plan, caption: planCaption ?? plan.caption }} ratio="4:3" contain className="mt-8" />
              </div>
            )}
            {mood && (
              <div>
                <H2>{t("materials")}</H2>
                <MediaFigure asset={{ ...mood, caption: moodCaption ?? mood.caption }} ratio="4:3" className="mt-8" />
              </div>
            )}
          </div>
        </Section>
      )}

      {gallery.length > 0 && (
        <Section surface>
          <H2>{sc("C-P15-CS07", "H2", locale)}</H2>
          <Gallery items={gallery} wide={[WIDE[concept.slug]]} labels={lightboxLabels(locale)} />
        </Section>
      )}

      {/* CS08 */}
      <Section>
        <H2>{sc("C-CS08", "H2", locale)}</H2>
        <ProjectCards slugs={concept.related} locale={locale} />
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-1">
          {concept.serviceLinks.map((s) => (
            <li key={s}>
              <TextLink href={serviceHref(s as ServiceSlug)}>{serviceTitle(s as ServiceSlug, locale)}</TextLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* CS09: project context passed to the form */}
      <EnquiryForm
        heading={sc("UI", "cta.similar_project", locale)}
        defaultService={concept.service}
        project={conceptTitle(concept, locale)}
        topic={conceptTitle(concept, locale)}
        leadSource={concept.page}
      />
    </>
  );
}
