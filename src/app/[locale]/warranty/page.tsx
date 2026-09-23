import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ShieldCheck, Boxes, Info, Package, MessageCircle, ArrowUpRight } from "lucide-react";
import FinalCta from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WarrantyPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const terms = [
  { key: "renovation", Icon: ShieldCheck },
  { key: "joinery", Icon: Boxes },
] as const;

export default async function WarrantyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WarrantyPage");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bv-surface pb-14 pt-14 md:pb-[72px] md:pt-[72px] lg:pb-[88px] lg:pt-[104px]">
        <ShieldCheck
          aria-hidden="true"
          strokeWidth={0.6}
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 text-bv-accent/[0.07] lg:block"
        />
        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="hero-in inline-flex items-center gap-2 font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bv-accent/40 bg-bv-background">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
              </span>
              {t("eyebrow")}
            </span>
            <h1 className="hero-in mt-5 font-[var(--font-bv-heading)] text-[38px] font-medium leading-[1.08] text-bv-ink sm:text-[52px] lg:text-[64px]">
              {t("title")}
            </h1>
            <div
              className="reveal-line mt-6 h-px w-16 bg-bv-accent"
              style={{ ["--reveal-delay" as string]: "150ms" }}
            />
            <p className="hero-in mt-6 max-w-2xl text-[17px] leading-[1.65] text-bv-muted">{t("intro")}</p>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {terms.map(({ key, Icon }, i) => (
              <div
                key={key}
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="reveal group relative overflow-hidden rounded-[20px] border border-bv-line bg-bv-surface p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-bv-accent/50 hover:shadow-[0_24px_48px_-24px_rgba(46,42,37,0.25)] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent transition-colors duration-500 group-hover:bg-bv-accent group-hover:text-bv-white">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-[var(--font-bv-heading)] text-[56px] font-medium leading-none text-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 sm:text-[72px]">
                    {t(`${key}Term`)}
                  </span>
                </div>
                <h2 className="mt-6 font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.15] text-bv-ink">
                  {t(`${key}Title`)}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.65] text-bv-muted">{t(`${key}Body`)}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>

          <div className="reveal mt-6 flex items-start gap-3 rounded-[14px] border border-bv-line bg-bv-surface/60 px-5 py-4">
            <Info className="mt-0.5 h-4 w-4 flex-none text-bv-accent" strokeWidth={1.8} />
            <p className="max-w-2xl text-[14px] leading-[1.65] text-bv-muted">{t("classificationNote")}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal-left border-l-2 border-bv-accent/30 pl-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent">
                <Package className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="mt-5 font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("productsHeading")}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("productsBody")}</p>
            </div>
            <div
              className="reveal-right border-l-2 border-bv-accent/30 pl-7"
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent">
                <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="mt-5 font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("contactHeading")}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("contactBody")}</p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex h-[52px] items-center gap-2 rounded-full bg-bv-accent px-8 text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-bv-accent-hover active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("cta")}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
