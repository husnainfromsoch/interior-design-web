"use client";

import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let ctx: gsap.Context | undefined;

    document.fonts.ready.then(() => {
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        const titleSplit = SplitText.create(titleRef.current, {
          type: "lines",
          linesClass: "phline",
          autoSplit: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          defaults: { ease: "power3.out" },
        });

        tl.from(eyebrowRef.current, { y: 14, opacity: 0, duration: 0.5 })
          .from(
            titleSplit.lines,
            { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.1 },
            "-=0.25"
          )
          .from(descRef.current, { y: 16, opacity: 0, duration: 0.6 }, "-=0.35");
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, [title]);

  return (
    <section ref={sectionRef} className="bg-beige px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p
          ref={eyebrowRef}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-wood"
        >
          {eyebrow}
        </p>
        <h1
          ref={titleRef}
          className="mt-4 overflow-hidden font-serif text-[40px] text-charcoal sm:text-5xl"
        >
          {title}
        </h1>
        {description && (
          <p ref={descRef} className="mt-6 text-base leading-relaxed text-warm-grey">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
