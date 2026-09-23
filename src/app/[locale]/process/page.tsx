import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PenTool, Hammer, Boxes, Users, Wallet } from "lucide-react";
import EnquiryForm from "@/components/ui/EnquiryForm";
import ProcessHero from "@/components/sections/ProcessHero";
import ProcessStagesTimeline from "@/components/sections/ProcessStagesTimeline";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProcessPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const routes = [
  { id: "design-only", key: "designOnly", Icon: PenTool },
  { id: "build-from-your-design", key: "build", Icon: Hammer },
  { id: "bespoke-joinery", key: "joinery", Icon: Boxes },
] as const;

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProcessPage");
  const stages = t.raw("stages") as { title: string; body: string }[];

  const heroStats = [
    { value: t("heroStat1Value"), label: t("heroStat1Label") },
    { value: t("heroStat2Value"), label: t("heroStat2Label") },
    { value: t("heroStat3Value"), label: t("heroStat3Label") },
  ];

  return (
    <>
      <ProcessHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        stats={heroStats}
        images={[
          "/visuals/PHOTO-2025-04-15-11-32-01.jpg",
          "/visuals/PHOTO-2025-04-15-12-00-05.jpg",
          "/visuals/PHOTO-2025-04-15-12-08-11.jpg",
        ]}
        imageAlt={t("heroImageAlt")}
      />

      <ProcessStagesTimeline heading={t("stagesHeading")} stages={stages} />

      <section className="bg-bv-ink pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-[14px] leading-[1.65] text-bv-white/50">{t("overlapNote")}</p>
        </div>
      </section>

      <section className="bg-bv-surface py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {t("routesHeading")}
            </h2>
          </div>

          <div className="mt-10 border-t border-bv-line lg:mt-14">
            {routes.map((r, i) => (
              <div
                key={r.id}
                id={r.id}
                style={{ scrollMarginTop: "104px", ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="reveal group relative flex flex-col gap-4 border-b border-bv-line py-8 transition-colors duration-500 sm:flex-row sm:items-start sm:gap-10 sm:py-10"
              >
                <div className="flex flex-none items-center gap-5 sm:w-[220px]">
                  <span className="font-bv-heading text-[15px] leading-none text-bv-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bv-field-border/60 text-bv-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-accent group-hover:bg-bv-accent group-hover:text-bv-white">
                    <r.Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-bv-heading text-[22px] font-medium leading-[1.2] text-bv-ink transition-colors duration-300 group-hover:text-bv-accent sm:hidden">
                    {t(`${r.key}Title`)}
                  </h3>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="hidden font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink transition-colors duration-300 group-hover:text-bv-accent sm:block sm:text-[26px]">
                    {t(`${r.key}Title`)}
                  </h3>
                  <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-bv-muted sm:mt-3">
                    {t(`${r.key}Body`)}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden flex-none translate-x-1 self-center text-bv-line transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:text-bv-accent sm:block"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="reveal-left lg:col-span-6">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[44px]">
                {t("decisionsHeading")}
              </h2>
              <div
                className="reveal-line mt-6 h-px w-16 bg-bv-accent"
                style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
              />
              <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-bv-muted">{t("decisionsBody")}</p>
            </div>

            <div className="reveal-right lg:col-span-6" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
              <div className="flex flex-col gap-6 border-l-2 border-bv-accent/30 pl-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent">
                    <Users className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-bv-heading text-[19px] font-medium leading-[1.25] text-bv-ink">
                      {t("decisionsRoleHeading")}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[15px] leading-[1.6] text-bv-muted">
                      {t("decisionsRoleBody")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent">
                    <Wallet className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-bv-heading text-[19px] font-medium leading-[1.25] text-bv-ink">
                      {t("paymentHeading")}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[15px] leading-[1.6] text-bv-muted">{t("paymentBody")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
