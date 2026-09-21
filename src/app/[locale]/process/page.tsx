import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import EnquiryForm from "@/components/ui/EnquiryForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProcessPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const routes = [
  { id: "design-only", key: "designOnly" },
  { id: "build-from-your-design", key: "build" },
  { id: "bespoke-joinery", key: "joinery" },
] as const;

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProcessPage");
  const stages = t.raw("stages") as { title: string; body: string }[];

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <section className="bg-bv-background pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
            {t("stagesHeading")}
          </h2>
          <ol className="mt-10 divide-y divide-bv-line border-y border-bv-line">
            {stages.map((stage, i) => (
              <li
                key={stage.title}
                className="reveal grid grid-cols-[56px_1fr] gap-4 py-7 sm:grid-cols-[96px_1fr] sm:gap-8 lg:py-9"
              >
                <span className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-none text-bv-accent sm:text-[44px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:grid lg:grid-cols-10 lg:gap-8">
                  <h3 className="font-[var(--font-bv-heading)] text-[22px] font-medium leading-[1.2] text-bv-ink sm:text-[26px] lg:col-span-4">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-bv-muted lg:col-span-6 lg:mt-0">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bv-surface py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
            {t("routesHeading")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {routes.map((r, i) => (
              <div
                key={r.id}
                id={r.id}
                style={{ scrollMarginTop: "104px", ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="reveal rounded-[20px] border border-bv-line bg-bv-background p-7 sm:p-8"
              >
                <span className="font-[var(--font-bv-body)] text-[13px] font-semibold tracking-[0.14em] text-bv-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.15] text-bv-ink">
                  {t(`${r.key}Title`)}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-bv-muted">{t(`${r.key}Body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="reveal">
            <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {t("decisionsHeading")}
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-bv-muted">{t("decisionsBody")}</p>
          </div>
          <div className="reveal rounded-[20px] border border-bv-line bg-bv-surface p-7 sm:p-9">
            <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
              {t("paymentHeading")}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-bv-muted">{t("paymentBody")}</p>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
