"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FounderSpotlight() {
  const t = useTranslations("FounderSpotlight");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            ref={ref}
            className="reveal-left group relative min-h-[520px] w-full overflow-hidden rounded-2xl border border-stone/70 shadow-[0_30px_60px_-24px_rgba(46,42,37,0.45)] lg:min-h-[640px]"
          >
            <motion.div
              style={{ y, scale }}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#3a332c] via-[#232019] to-soft-black"
            >
              <span className="select-none font-serif text-[280px] leading-none tracking-tighter text-ivory/10 sm:text-[340px]">
                GA
              </span>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/90 via-soft-black/10 to-transparent" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                {t("est")}
              </span>
              <span className="h-px w-16 bg-ivory/30" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="font-serif text-[34px] leading-tight text-ivory sm:text-[42px]">
                {t("brandName")}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                {t("role")}
              </p>
            </div>
          </div>

          <div className="reveal-right flex flex-col justify-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[28px] leading-snug sm:text-[32px]">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-warm-grey">
              {t("body1")}
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-warm-grey">
              {t("body2")}
            </p>
            <div className="mt-8 flex gap-10 border-t border-stone pt-6">
              <div>
                <p className="font-serif text-[28px] text-wood">10+</p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-warm-grey">{t("stat1Label")}</p>
              </div>
              <div>
                <p className="font-serif text-[28px] text-wood">150+</p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-warm-grey">{t("stat2Label")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
