import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SERVICE_PAGES, getServicePage, type ServiceSlug } from "@/data/servicePages";
import { getMediaList } from "@/data/media";
import { meta } from "@/lib/final";
import { sc } from "@/lib/spec";
import { pageMetadata } from "@/lib/seo";
import DocPage, { ROW, type DocPageProps } from "@/components/final/DocPage";
import ApprovalsPage from "@/components/final/ApprovalsPage";
import FromInsights from "@/components/sections/FromInsights";
import SampleViewer from "@/components/spec/SampleViewer";
import { lightboxLabels } from "@/components/spec/labels";
import { H2, Intro, MediaRow, ProjectCard, WarrantyStrip } from "@/components/spec/blocks";

// P03–P13 and P23 (Final Changes Sheet, sections 3 and 4). Every page is rendered from the
// final copy by DocPage in the order of the copy; the blocks the sheet keeps "as built"
// (sample drawing set, warranty badge, concept card, palette images) are placed here.
// P11 Approvals keeps its own structure (ApprovalsPage).

type Extras = Pick<DocPageProps, "inside" | "beforeFaq">;

/** A kept concept card under its existing heading, placed directly above the FAQ. */
function ConceptBlock({ heading, intro, children }: { heading: string; intro?: string; children: ReactNode }) {
  return (
    <section className={ROW}>
      <H2>{heading}</H2>
      {intro && <Intro>{intro}</Intro>}
      <div className="mt-8 grid grid-rows-[auto_auto_auto] lg:mt-10">{children}</div>
    </section>
  );
}

function extras(slug: ServiceSlug, locale: string): Extras {
  const c = (code: string, label: string) => sc(code, label, locale);
  switch (slug) {
    case "interior-design":
      // "View a Sample Drawing Set" stays, after "What the design package contains" (3rd section).
      return {
        inside: {
          3: (
            <SampleViewer
              items={getMediaList(["BV-IMG-18", "BV-IMG-19", "BV-IMG-20", "BV-IMG-21", "BV-IMG-22", "BV-IMG-23"], locale)}
              buttonLabel={c("C-P03-D03a", "button")}
              note={c("C-P03-D03a", "note")}
              labels={lightboxLabels(locale)}
            />
          ),
        },
      };
    case "villa-renovation":
      return { beforeFaq: <WarrantyStrip kind="renovation" locale={locale} /> };
    case "apartment-renovation":
      return {
        beforeFaq: (
          <>
            <WarrantyStrip kind="renovation" locale={locale} />
            <ConceptBlock heading={c("C-P06-A02", "H2")}>
              <ProjectCard slug="tower-residence-concept" locale={locale} wide />
            </ConceptBlock>
          </>
        ),
      };
    case "commercial-fit-out":
      return {
        beforeFaq: (
          <ConceptBlock heading={c("C-P07-C02", "H2")} intro={c("C-P07-C02", "body")}>
            <ProjectCard slug="business-district-office-concept" locale={locale} wide />
          </ConceptBlock>
        ),
      };
    case "bespoke-joinery":
    case "custom-kitchens":
    case "wardrobes":
      return { beforeFaq: <WarrantyStrip kind="joinery" locale={locale} /> };
    case "materials-procurement": {
      // Material palette images stay, directly above the FAQ; hidden while there are none (D10).
      const palettes = ["BV-IMG-62", "BV-IMG-63", "BV-IMG-64"];
      if (getMediaList(palettes, locale).length === 0) return {};
      return {
        beforeFaq: (
          <section className={ROW}>
            <H2>{c("C-P13-M05", "H2")}</H2>
            <MediaRow assets={palettes} locale={locale} ratio="4:5" />
          </section>
        ),
      };
    }
    default:
      return {};
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => SERVICE_PAGES.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return pageMetadata(meta(page.page, locale), `/services/${page.slug}`, locale);
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getServicePage(slug);
  if (!page) notFound();
  if (page.slug === "approvals") return <ApprovalsPage locale={locale} />;
  return (
    <DocPage
      page={page.page}
      locale={locale}
      heroImage={page.heroImage}
      formService={page.formService}
      afterFaq={<FromInsights serviceSlug={page.slug} />}
      {...extras(page.slug, locale)}
    />
  );
}
