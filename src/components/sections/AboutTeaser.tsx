import { getTranslations } from "next-intl/server";
import { PenTool, ShieldCheck, HardHat, Hammer } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default async function AboutTeaser() {
  const t = await getTranslations("AboutTeaser");

  const pillars = [
    { icon: PenTool, label: t("pillar1") },
    { icon: ShieldCheck, label: t("pillar2") },
    { icon: HardHat, label: t("pillar3") },
    { icon: Hammer, label: t("pillar4") },
  ];

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/projects/marina-penthouse-terrace.avif"
      bgImageSrc="/projects/marina-penthouse-terrace.avif"
      title={t("title")}
      date={t("date")}
      scrollToExpand={t("scrollToExpand")}
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-wood/40" />
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-wood">
            {t("badge")}
          </span>
          <span className="h-px w-10 bg-wood/40" />
        </div>

        <h2 className="mt-5 font-serif text-[30px] leading-[1.2] text-charcoal sm:text-[38px] lg:text-[44px]">
          {t("heading")}
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-warm-grey">
          {t("body")}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {pillars.map(({ icon: Icon, label }, i) => (
            <div key={label} className="relative flex flex-col items-center gap-3">
              {i > 0 && (
                <span className="absolute -left-3 top-4 hidden h-8 w-px bg-charcoal/10 sm:block" />
              )}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-wood/25 bg-wood/5 text-wood">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-charcoal/80">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/about" variant="primary">
            {t("cta")}
          </Button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
