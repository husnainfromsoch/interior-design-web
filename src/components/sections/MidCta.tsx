import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default async function MidCta() {
  const t = await getTranslations("MidCta");
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 text-bv-background">
      <Image
        src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1920&auto=format&fit=crop"
        alt="Completed villa exterior walkway"
        fill
        sizes="100vw"
        className="kenburns object-cover"
      />
      <div className="absolute inset-0 bg-bv-ink/70" />
      <div className="reveal-scale relative mx-auto max-w-[720px] px-6 text-center lg:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
          {t("badge")}
        </span>
        <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
          <h2 className="font-bv-heading text-[30px] leading-snug sm:text-[40px]">
            {t("titlePlain")} <span className="italic text-bv-accent">{t("titleItalic")}</span>{t("titleEnd")}
          </h2>
        </TextBlockAnimation>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="outline-light">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
