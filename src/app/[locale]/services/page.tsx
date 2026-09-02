import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServicesHero from "@/components/sections/ServicesHero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import MidCta from "@/components/sections/MidCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesHero />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <MidCta />
    </>
  );
}
