import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PrivacyPage");
  const sections = t.raw("sections") as { title: string; body: string }[];

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <section className="bg-bv-background pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-bv-line border-y border-bv-line">
            {sections.map((s) => (
              <div key={s.title} className="py-8">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink sm:text-[28px]">
                  {s.title}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.7] text-bv-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
