import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import ContactFormPanel from "@/components/sections/ContactFormPanel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <ContactFormPanel />
      </section>
    </>
  );
}
