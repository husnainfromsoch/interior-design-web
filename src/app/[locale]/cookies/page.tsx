import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import CookieChoices from "@/components/ui/CookieChoices";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CookiesPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const tools = ["necessary", "analytics", "marketing"] as const;

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CookiesPage");

  return (
    <>
      <PageIntro narrow eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <section className="bg-bv-background pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-8">
          <h2 className="t-h2 text-bv-ink">
            {t("toolsHeading")}
          </h2>
          <div className="mt-6 divide-y divide-bv-line border-y border-bv-line">
            {tools.map((k) => (
              <div key={k} className="py-6">
                <h3 className="t-h3 text-bv-ink">{t(`${k}Title`)}</h3>
                {/* A tool is listed only once it is actually installed (spec §24). */}
                <p className="mt-2 t-body text-bv-muted">
                  {k === "analytics" && process.env.NEXT_PUBLIC_GA_ID ? t("analyticsGa") : t(`${k}Body`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CookieChoices />
          </div>
        </div>
      </section>
    </>
  );
}
