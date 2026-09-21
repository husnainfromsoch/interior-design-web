import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import HomeDirections from "@/components/sections/HomeDirections";
import HomeCaseStudies from "@/components/sections/HomeCaseStudies";
import HomeResponsibility from "@/components/sections/HomeResponsibility";
import HomeStages from "@/components/sections/HomeStages";
import HomeFamily from "@/components/sections/HomeFamily";
import HomeFaq from "@/components/sections/HomeFaq";
import EnquiryForm from "@/components/ui/EnquiryForm";
import ScrollProgress from "@/components/ui/ScrollProgress";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ScrollProgress />
      {/* H01 */}
      <Hero />
      {/* H02 */}
      <HomeDirections />
      {/* H03 */}
      <HomeCaseStudies />
      {/* H04 */}
      <HomeResponsibility />
      {/* H05 */}
      <HomeStages />
      {/* H06 */}
      <HomeFamily />
      {/* H07 */}
      <HomeFaq />
      {/* H08 — footer itself is rendered globally by the locale layout */}
      <EnquiryForm />
    </>
  );
}
