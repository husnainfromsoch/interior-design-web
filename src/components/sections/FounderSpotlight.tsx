"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

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
    <section className="bg-bv-surface py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            ref={ref}
            className="reveal-left group relative min-h-[520px] w-full overflow-hidden rounded-2xl border border-bv-line/70 shadow-[0_30px_60px_-24px_rgba(46,42,37,0.45)] lg:min-h-[640px]"
          >
            <motion.div
              style={{ y, scale }}
              className="absolute inset-0 bg-gradient-to-b from-[#3a332c] via-[#232019] to-bv-ink"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/90 via-bv-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="font-bv-heading text-[34px] leading-tight text-bv-background sm:text-[42px]">
                {t("brandName")}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-bv-accent">
                {t("role")}
              </p>
            </div>
          </div>

          <div className="reveal-right flex flex-col justify-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("badge")}
            </span>
            <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
              <h2 className="font-bv-heading text-[28px] leading-snug sm:text-[32px]">
                {t("title")}
              </h2>
            </TextBlockAnimation>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-bv-muted">
              {t("body1")}
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-bv-muted">
              {t("body2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
