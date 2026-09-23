import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import StagesTimeline from "./StagesTimeline";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const ids = ["brief", "design", "scope", "works", "handover"] as const;

const images: Record<(typeof ids)[number], string> = {
  brief: "/visuals/PHOTO-2025-04-15-09-20-47(1).jpg",
  design: "/visuals/PHOTO-2025-04-15-09-20-47(10).jpg",
  scope: "/visuals/PHOTO-2025-04-15-11-30-59(1).jpg",
  works: "/visuals/PHOTO-2025-04-15-12-00-05.jpg",
  handover: "/visuals/PHOTO-2025-04-15-12-14-49.jpg",
};

export default async function HomeStages() {
  const t = await getTranslations("HomeStages");
  const steps = ids.map((id) => ({ title: t(`${id}Title`), body: t(`${id}Body`), image: images[id] }));

  return (
    <section className="bg-bv-ink pb-14 pt-10 md:pb-[72px] md:pt-12 lg:pb-[104px] lg:pt-16">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-bv-body text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("eyebrow")}
            </span>
            <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-3 max-w-2xl font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-white sm:text-[40px] lg:text-[48px]">
                {t("heading")}
              </h2>
            </TextBlockAnimation>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-bv-white/60">{t("intro")}</p>
          </div>
          <Link
            href="/process"
            className="btn-shine inline-flex h-[48px] shrink-0 items-center gap-2 self-start rounded-[2px] border border-bv-white/25 px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-white hover:bg-bv-white hover:text-bv-ink active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:self-auto"
          >
            {t("processLink")}
          </Link>
        </div>

        <div className="mt-10 lg:mt-12">
          <StagesTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
