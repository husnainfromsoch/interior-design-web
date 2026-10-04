import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DocPage, { ROW } from "@/components/final/DocPage";
import { Faq } from "@/components/spec/blocks";
import { g, meta } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";
import { faq } from "@/lib/spec";

// P02 Services (Final Changes Sheet, P02): H1 with the "Discuss Your Project" button, then
// the sections of the copy ("About us in brief" first). The FAQ stays as built, after
// "How we start" (6th section) and before "Wherever you are starting from".

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P02", locale), "/services", locale);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "SpecUi" });

  return (
    <DocPage
      page="P02"
      locale={locale}
      heroImage="BV-IMG-09"
      heroButton={g("header", "Button", locale)}
      after={{
        6: (
          <section className={ROW}>
            <Faq heading={t("faq")} items={faq("C-P02-S04", locale)} />
          </section>
        ),
      }}
    />
  );
}
