import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageIntro from "@/components/ui/PageIntro";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WarrantyPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const terms = ["renovation", "joinery"] as const;

export default async function WarrantyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WarrantyPage");

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <section className="bg-bv-background pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {terms.map((k, i) => (
              <div
                key={k}
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="reveal rounded-[20px] border border-bv-line bg-bv-surface p-8 sm:p-10"
              >
                <span className="font-[var(--font-bv-heading)] text-[56px] font-medium leading-none text-bv-accent sm:text-[72px]">
                  {t(`${k}Term`)}
                </span>
                <h2 className="mt-5 font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.15] text-bv-ink">
                  {t(`${k}Title`)}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.65] text-bv-muted">{t(`${k}Body`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("productsHeading")}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("productsBody")}</p>
            </div>
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("contactHeading")}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("contactBody")}</p>
              <Link
                href="/contact"
                className="mt-7 inline-flex h-[52px] items-center rounded-full bg-bv-accent px-8 text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-bv-accent-hover active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
