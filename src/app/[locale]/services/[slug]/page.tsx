import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SERVICE_PAGES, getServicePage, type ServiceSlug } from "@/data/servicePages";
import { sc } from "@/lib/spec";
import type { ServicePageProps } from "@/components/service-pages/common";
import P03InteriorDesign from "@/components/service-pages/P03InteriorDesign";
import P04LandscapeDesign from "@/components/service-pages/P04LandscapeDesign";
import P05VillaRenovation from "@/components/service-pages/P05VillaRenovation";
import P06ApartmentRenovation from "@/components/service-pages/P06ApartmentRenovation";
import P07CommercialFitOut from "@/components/service-pages/P07CommercialFitOut";
import P08BespokeJoinery from "@/components/service-pages/P08BespokeJoinery";
import P09CustomKitchens from "@/components/service-pages/P09CustomKitchens";
import P10Wardrobes from "@/components/service-pages/P10Wardrobes";
import P11Approvals from "@/components/service-pages/P11Approvals";
import P12MepHvac from "@/components/service-pages/P12MepHvac";
import P13MaterialsProcurement from "@/components/service-pages/P13MaterialsProcurement";

// P03–P13 (spec §15.3–15.13). Each page is composed in its own file in the spec's
// section order; copy is read verbatim from the spec.
const PAGES: Record<ServiceSlug, ComponentType<ServicePageProps>> = {
  "interior-design": P03InteriorDesign,
  "landscape-design": P04LandscapeDesign,
  "villa-renovation": P05VillaRenovation,
  "apartment-renovation": P06ApartmentRenovation,
  "commercial-fit-out": P07CommercialFitOut,
  "bespoke-joinery": P08BespokeJoinery,
  "custom-kitchens": P09CustomKitchens,
  wardrobes: P10Wardrobes,
  approvals: P11Approvals,
  "mep-hvac": P12MepHvac,
  "materials-procurement": P13MaterialsProcurement,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => SERVICE_PAGES.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: `${page.title[locale === "ru" ? "ru" : "en"]} | Bellvero Group`,
    description: sc(page.heroCode, "body", locale),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getServicePage(slug);
  if (!page) notFound();
  const Page = PAGES[page.slug];
  return <Page locale={locale} />;
}
