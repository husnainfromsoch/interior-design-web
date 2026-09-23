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
    <section className="bg-bv-surface py-14 md:py-[72px] lg:py-[56px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <HowWeWorkPanel
          header={
        <div className="reveal max-w-3xl">
          <span className="block font-bv-body text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("eyebrow")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-2.5 font-bv-heading text-[30px] font-medium leading-[1.15] text-bv-ink sm:text-[34px] lg:text-[44px]">
              {t("heading")}
            </h2>
          </TextBlockAnimation>
          <p className="mt-3 text-[17px] leading-[1.55] text-bv-muted">{t("body")}</p>
        </div>
          }
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
    </section>
  );
}
