import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import AboutStory from "@/components/sections/AboutStory";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import AboutGallery from "@/components/sections/AboutGallery";
import FinalCta from "@/components/sections/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AboutStory />
      <FounderSpotlight />
      <AboutGallery />
      <FinalCta />
    </>
  );
}
