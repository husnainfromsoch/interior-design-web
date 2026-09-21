import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import StagesTimeline from "./StagesTimeline";

const ids = ["brief", "design", "scope", "works", "handover"] as const;

export default async function HomeStages() {
  const t = await getTranslations("HomeStages");
  const steps = ids.map((id) => ({ title: t(`${id}Title`), body: t(`${id}Body`) }));

  return (
    <section className="bg-bv-ink py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("eyebrow")}
            </span>
            <h2 className="mt-3 max-w-2xl font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-white sm:text-[40px] lg:text-[48px]">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-bv-white/60">{t("intro")}</p>
          </div>
          <Link
            href="/process"
            className="btn-shine inline-flex h-[48px] shrink-0 items-center gap-2 self-start rounded-full border border-bv-white/25 px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-bv-white hover:bg-bv-white hover:text-bv-ink active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:self-auto"
          >
            {t("processLink")}
          </Link>
        </div>

        <div className="mt-12 lg:mt-16">
          <StagesTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
