import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PenTool, ShieldCheck, HardHat, Hammer } from "lucide-react";
import Button from "@/components/ui/Button";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const MEDIA_SRC = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop";

export default async function AboutTeaser() {
  const t = await getTranslations("AboutTeaser");

  const pillars = [
    { icon: PenTool, label: t("pillar1") },
    { icon: ShieldCheck, label: t("pillar2") },
    { icon: HardHat, label: t("pillar3") },
    { icon: Hammer, label: t("pillar4") },
  ];

  return (
    <div>
      <div className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={MEDIA_SRC}
          alt={t("title")}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 text-center">
          <p className="text-2xl text-bv-background">{t("date")}</p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-bv-background ">
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col px-8 py-10 md:px-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-bv-accent">
          {t("badge")}
        </span>

        <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-5 font-bv-heading text-[30px] leading-[1.2] text-bv-ink sm:text-[38px] lg:text-[44px]">
            {t("heading")}
          </h2>
        </TextBlockAnimation>

        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-bv-muted">
          {t("body")}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {pillars.map(({ icon: Icon, label }, i) => (
            <div key={label} className="relative flex flex-col items-center gap-3">
              {i > 0 && (
                <span className="absolute -left-3 top-4 hidden h-8 w-px bg-bv-ink/10 sm:block" />
              )}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bv-accent/25 bg-bv-accent/5 text-bv-accent">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-bv-ink/80">
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
      </div>
    </div>
  );
}
