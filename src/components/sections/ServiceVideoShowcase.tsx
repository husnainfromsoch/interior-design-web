"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default function ServiceVideoShowcase({
  video,
  caption,
}: {
  video: string;
  caption: string;
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
    <section className="bg-bv-ink py-24 text-bv-background">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("onSite")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="font-bv-heading text-[28px] leading-snug sm:text-[34px]">
              {t("videoHeading")}
            </h2>
          </TextBlockAnimation>
        </div>

        <div
          ref={frameRef}
          className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-bv-background/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.65)]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 max-w-md text-[13px] leading-relaxed text-bv-background/90 sm:bottom-6 sm:left-6">
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}
