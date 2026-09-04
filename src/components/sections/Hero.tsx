import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";

export default async function Hero() {
  const t = await getTranslations("Hero");
  const tCommon = await getTranslations("Common");

  const stats = [
    { value: 150, suffix: "+", label: t("stat1") },
    { value: 98, suffix: "%", label: t("stat2") },
    { value: 12, suffix: "+", label: t("stat3") },
  ];

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden text-ivory">
      <video
        className="kenburns absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/visuals/PHOTO-2025-04-15-11-30-59(1).jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black/85 via-soft-black/35 to-soft-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black/50 via-soft-black/10 to-transparent" />

      <div className="relative flex w-full flex-col">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-8">
          <div className="hero-in max-w-2xl">
            <h1 className="font-serif text-[38px] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[64px]">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
              {t("subtitle")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/contact" variant="primary">
                {tCommon("requestQuote")}
              </Button>
              <Button href="https://wa.me/971588099223" variant="outline-light" external>
                {tCommon("whatsappUs")}
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-ivory/15 bg-soft-black/40 backdrop-blur-md">
          <div className="marquee-track flex w-max items-center">
            {[...stats, ...stats].map((stat, i) => (
              <div key={`${stat.label}-${i}`} className="flex items-center gap-3 whitespace-nowrap px-8 py-6 sm:py-7">
                <p className="font-serif text-[26px] leading-none text-champagne sm:text-[32px]">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-stone sm:text-[12px]">{stat.label}</p>
                <span className="ml-5 h-1 w-1 rounded-full bg-ivory/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
