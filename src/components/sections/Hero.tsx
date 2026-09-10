import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";

export default async function Hero() {
  const t = await getTranslations("Hero");
  const tCommon = await getTranslations("Common");

  const stats = [
    { value: 47, suffix: "+", label: t("stat1") },
    { value: 98, suffix: "%", label: t("stat2") },
    { value: 6, suffix: "+", label: t("stat3") },
  ];

  return (
    <section data-hero className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden text-ivory">
      <video
        className="kenburns absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1920&auto=format&fit=crop"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black/85 via-soft-black/35 to-soft-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black/50 via-soft-black/10 to-transparent" />

      <div className="relative flex w-full flex-col">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-40 sm:pb-20 sm:pt-48 lg:px-8">
          <div className="hero-in max-w-2xl">
            <h1 className="font-serif text-[32px] leading-[1.15] tracking-tight sm:text-[46px] lg:text-[52px]">
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
                <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0" fill="#25D366" aria-hidden="true">
                  <path d="M16.004 3C9.14 3 3.57 8.57 3.57 15.43c0 2.31.63 4.55 1.83 6.51L3 29l7.22-2.36a12.44 12.44 0 0 0 5.78 1.43h.01c6.86 0 12.43-5.57 12.43-12.43S22.86 3 16.004 3Zm0 22.43h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-4.29 1.4 1.41-4.18-.25-.43a10.36 10.36 0 0 1-1.6-5.5c0-5.75 4.68-10.43 10.44-10.43 2.79 0 5.41 1.09 7.38 3.06a10.36 10.36 0 0 1 3.05 7.38c0 5.75-4.68 10.4-10.4 10.4Zm5.73-7.8c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z" />
                </svg>
                {tCommon("whatsappUs")}
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-ivory/15 bg-charcoal">
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
