"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import CountUp from "@/components/ui/CountUp";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { ServiceStat } from "@/data/services";

export default function ServiceVideoShowcase({
  video,
  caption,
  stats,
}: {
  video: string;
  caption: string;
  stats: ServiceStat[];
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("ServiceDetail");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !frameRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { clipPath: "inset(6% round 24px)" },
        {
          clipPath: "inset(0% round 24px)",
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 0.5,
          },
        }
      );
    }, frameRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
            {t("onSite")}
          </span>
          <h2 className="font-serif text-[28px] leading-snug sm:text-[34px]">
            {t("videoHeading")}
          </h2>
        </div>

        <div
          ref={frameRef}
          className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-ivory/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.65)]"
        >
          <video
            className="h-full w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 max-w-md text-[13px] leading-relaxed text-ivory/90 sm:bottom-6 sm:left-6">
            {caption}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-ivory/10 border-t border-ivory/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-scale group relative flex flex-col items-center px-6 py-10 text-center transition-colors duration-300 hover:bg-ivory/[0.03]"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <span className="mb-3 h-px w-8 origin-center scale-x-0 bg-champagne transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <p className="font-serif text-[40px] leading-none text-champagne transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-[46px]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 max-w-[220px] text-[12px] uppercase tracking-[0.1em] text-stone sm:text-[13px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
