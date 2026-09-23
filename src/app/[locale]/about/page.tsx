import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sprout, Building2, Link2, HardHat, ClipboardList, Handshake } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import AboutStory from "@/components/sections/AboutStory";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import AboutGallery from "@/components/sections/AboutGallery";
import FinalCta from "@/components/sections/FinalCta";

const PROFILE_IDS = [
  { id: "chiefEngineer", Icon: HardHat },
  { id: "projectManagement", Icon: ClipboardList },
  { id: "clientRelations", Icon: Handshake },
] as const;

const FOUNDER_COLUMNS = [
  { key: "body2", mark: "01", Icon: Building2 },
  { key: "body3", mark: "02", Icon: Link2 },
] as const;

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
  const tFounders = await getTranslations("AboutFounders");
  const tLeadership = await getTranslations("AboutLeadership");
  const tExperience = await getTranslations("AboutExperience");
  const tProduction = await getTranslations("AboutProduction");
  const tLegal = await getTranslations("AboutLegalEntity");
  const tExpect = await getTranslations("AboutExpect");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AboutStory />

      <section className="relative overflow-hidden bg-bv-surface py-14 md:py-[72px] lg:py-[104px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-10 select-none font-[var(--font-bv-heading)] text-[220px] font-medium leading-none text-bv-ink/[0.035] sm:text-[280px]"
        >
          &ldquo;
        </span>
        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {tFounders("heading")}
            </h2>
            <div
              className="reveal-line mt-6 h-px w-16 bg-bv-accent"
              style={{ ["--reveal-delay" as string]: "150ms" }}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12">
            <div className="reveal-left relative overflow-hidden rounded-[24px] bg-bv-ink p-8 text-bv-background sm:p-10 lg:col-span-5 lg:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-6 select-none font-[var(--font-bv-heading)] text-[160px] font-medium leading-none text-bv-background/[0.05]"
              >
                21
              </span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-bv-accent text-bv-white">
                <Sprout className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="relative mt-6 block font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
                2021
              </span>
              <p className="relative mt-4 max-w-sm font-[var(--font-bv-heading)] text-[22px] font-medium leading-[1.35] text-bv-background sm:text-[26px]">
                {tFounders("body1")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {FOUNDER_COLUMNS.map(({ key, mark, Icon }, i) => (
                <div
                  key={key}
                  style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                  className="reveal-scale group relative overflow-hidden rounded-[24px] border border-bv-line bg-bv-background p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-bv-accent/50 hover:shadow-[0_24px_48px_-24px_rgba(46,42,37,0.25)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent transition-colors duration-500 group-hover:bg-bv-accent group-hover:text-bv-white">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-[var(--font-bv-heading)] text-[15px] leading-none text-bv-accent/50">
                      {mark}
                    </span>
                  </div>
                  <p className="mt-6 text-[15px] leading-[1.7] text-bv-muted">{tFounders(key)}</p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {tLeadership("heading")}
            </h2>
            <div
              className="reveal-line mt-6 h-px w-16 bg-bv-accent"
              style={{ ["--reveal-delay" as string]: "150ms" }}
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-3">
            {PROFILE_IDS.map(({ id, Icon }, i) => (
              <div
                key={id}
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                className="reveal-scale group relative overflow-hidden rounded-[24px] border border-bv-line bg-bv-surface p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-bv-accent/50 hover:shadow-[0_28px_56px_-28px_rgba(46,42,37,0.3)] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-[var(--font-bv-heading)] text-[80px] font-medium leading-none text-bv-ink/[0.04]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-bv-accent/10 text-bv-accent transition-colors duration-500 group-hover:bg-bv-accent group-hover:text-bv-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>

                <span className="relative mt-6 inline-block rounded-full bg-bv-ink/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-bv-accent">
                  {tLeadership(`profiles.${id}.role`)}
                </span>

                <p className="relative mt-5 text-[15px] leading-[1.7] text-bv-muted">
                  {tLeadership(`profiles.${id}.bio`)}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderSpotlight />

      <section className="bg-bv-surface py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {tExperience("heading")}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-bv-muted/80">{tExperience("intro")}</p>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{tExperience("body")}</p>
            </div>
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {tProduction("heading")}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{tProduction("body")}</p>
            </div>
          </div>
        </div>
      </section>

      <AboutGallery />

      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal rounded-[20px] border border-bv-line bg-bv-surface p-7 sm:p-9">
              <h2 className="font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.15] text-bv-ink">
                {tLegal("heading")}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-bv-muted">{tLegal("body")}</p>
            </div>
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.15] text-bv-ink">
                {tExpect("heading")}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-bv-muted">{tExpect("body")}</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
