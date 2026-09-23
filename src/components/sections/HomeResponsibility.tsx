import { getTranslations } from "next-intl/server";
import HowWeWorkPanel from "./HowWeWorkPanel";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const stepIds = [
  { id: "scope", icon: "clipboard-list" },
  { id: "changes", icon: "shield-check" },
  { id: "updates", icon: "refresh-ccw" },
  { id: "supervision", icon: "eye" },
] as const;

export default async function HomeResponsibility() {
  const t = await getTranslations("HomeResponsibility");

  const steps = stepIds.map((s) => ({
    id: s.id,
    icon: s.icon,
    title: t(`${s.id}Title`),
    body: t(`${s.id}Body`),
  }));

  return (
    <section className="bg-bv-surface py-16 md:py-[96px] lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <span className="block font-[var(--font-bv-body)] text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("eyebrow")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="mt-2.5 font-[var(--font-bv-heading)] text-[30px] font-medium leading-[1.15] text-bv-ink sm:text-[34px] lg:text-[52px]">
              {t("heading")}
            </h2>
          </TextBlockAnimation>
          <p className="mt-5 text-[18px] leading-[1.6] text-bv-muted">{t("body")}</p>
        </div>

        <div className="mt-12 lg:mt-16">
          <HowWeWorkPanel
            steps={steps}
            note={t("contactNote")}
            slides={[
              { src: "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg", alt: t("imageAlt") },
              { src: "/visuals/PHOTO-2025-04-15-09-20-47(4).jpg", alt: t("imageAlt") },
              { src: "/visuals/PHOTO-2025-04-15-09-20-47(9).jpg", alt: t("imageAlt") },
              { src: "/visuals/PHOTO-2025-04-15-11-32-01.jpg", alt: t("imageAlt") },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
