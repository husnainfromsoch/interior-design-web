import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HeroMedia from "./HeroMedia";

export default async function Hero() {
  const t = await getTranslations("Hero");
  const locale = await getLocale();
  const isRu = locale === "ru";

  return (
    <section
      data-hero
      className="relative flex w-full items-end overflow-hidden bg-bv-ink font-[var(--font-bv-body)] text-bv-white"
      style={{
        minHeight: "clamp(620px, calc(100svh - 88px), 880px)",
      }}
    >
      <HeroMedia
        poster="/visuals/PHOTO-2025-04-15-09-20-47(1).jpg"
        posterAlt={t("posterAlt")}
        videoSrc="/videos/hero.mp4"
        labels={{ pause: t("pauseVideo"), play: t("playVideo") }}
      />

      {/* Scrim: darker over the text zone (left), lighter on the right — spec §2.4 */}
      <div className="absolute inset-0 bg-gradient-to-r from-bv-ink/65 via-bv-ink/35 to-bv-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/70 via-transparent to-transparent" />

      <div className="relative w-full">
        <div className="mx-auto w-full max-w-[1320px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
          <div className="max-w-[780px] lg:w-7/12">
            <p style={{ animationDelay: "0.1s" }} className="hero-in flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-white/90">
              {t("eyebrow")}
            </p>
            <h1
              className="hero-in mt-5 font-[var(--font-bv-heading)] font-medium tracking-tight"
              style={{
                animationDelay: "0.25s",
                fontSize: isRu ? "clamp(34px, 6vw, 72px)" : "clamp(34px, 6.5vw, 80px)",
                lineHeight: isRu ? 1.06 : 1.03,
              }}
            >
              {t("title")}
            </h1>
            <p style={{ animationDelay: "0.45s" }} className="hero-in mt-6 max-w-lg text-[18px] leading-[1.55] text-bv-white sm:text-[20px]">
              {t("subtitle")}
            </p>
            <div style={{ animationDelay: "0.6s" }} className="hero-in mt-9">
              <Link
                href="/contact"
                className="btn-shine inline-flex h-[52px] items-center rounded-[2px] bg-bv-accent px-8 text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-bv-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-white"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
