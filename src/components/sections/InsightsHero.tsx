"use client";

import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export default function InsightsHero({
  eyebrow,
  heading,
  intro,
  count,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  count?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      const heading = root.querySelector<HTMLElement>("[data-hero-heading]");
      const eyebrowEl = root.querySelector("[data-hero-eyebrow]");
      const introEl = root.querySelector("[data-hero-intro]");
      const lineEl = root.querySelector("[data-hero-line]");
      const countEl = root.querySelector("[data-hero-count]");

      if (prefersReduced || !heading) {
        gsap.set([eyebrowEl, introEl, lineEl, countEl], { opacity: 1, x: 0, y: 0, scaleX: 1 });
        return;
      }

      document.fonts.ready.then(() => {
        split = SplitText.create(heading, { type: "lines", linesClass: "hero-line-mask" });
        gsap.set(split.lines, { yPercent: 110 });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.fromTo(eyebrowEl, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 })
          .fromTo(lineEl, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power3.inOut" }, "<0.05")
          .to(split.lines, { yPercent: 0, duration: 0.9, stagger: 0.09 }, "-=0.5")
          .fromTo(introEl, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
          .fromTo(countEl, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4");
      });
    }, root);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-bv-background px-4 pb-14 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.35] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--bv-accent) 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-[1320px]">
        <div data-hero-eyebrow className="flex items-center gap-3 opacity-0">
          <span className="font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.14em] text-bv-accent">
            {eyebrow}
          </span>
        </div>

        <span
          data-hero-line
          className="mt-6 block h-px w-full origin-left scale-x-0 bg-bv-line"
          aria-hidden="true"
        />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1
            data-hero-heading
            className="max-w-[820px] overflow-hidden font-[var(--font-bv-heading)] text-[46px] font-medium leading-[1.02] tracking-[-0.01em] text-bv-ink sm:text-[68px] lg:text-[92px]"
          >
            {heading}
          </h1>

          {count && (
            <span data-hero-count className="whitespace-nowrap pb-2 text-[14px] font-medium text-bv-muted opacity-0 lg:pb-4">
              {count}
            </span>
          )}
        </div>

        <p data-hero-intro className="mt-8 max-w-[640px] text-[18px] leading-[1.65] text-bv-muted opacity-0 sm:text-[20px]">
          {intro}
        </p>
      </div>
    </section>
  );
}
