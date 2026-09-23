"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

type Highlight = { title: string; body: string };

export default function ProjectHighlights({
  eyebrow,
  heading,
  highlights,
  backgroundImage,
}: {
  eyebrow: string;
  heading: string;
  highlights: Highlight[];
  backgroundImage: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const rows = section.querySelectorAll(".highlight-row");

      gsap.fromTo(
        rows,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: "top 75%" },
        }
      );

      gsap.fromTo(
        bg,
        { scale: 1.18, yPercent: -6 },
        {
          scale: 1,
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
        }
      );

      rows.forEach((row) => {
        const num = row.querySelector(".highlight-num");
        const line = row.querySelector(".highlight-line");
        const enter = () => {
          gsap.to(num, { color: "var(--bv-accent)", x: 4, duration: 0.35, ease: "power2.out" });
          gsap.to(line, { scaleX: 1, duration: 0.5, ease: "power2.out" });
        };
        const leave = () => {
          gsap.to(num, { color: "rgba(247,243,236,0.25)", x: 0, duration: 0.35, ease: "power2.out" });
          gsap.to(line, { scaleX: 0, duration: 0.3, ease: "power2.in" });
        };
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.trigger === section && st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-bv-ink py-28 text-bv-background">
      <div ref={bgRef} className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-bv-ink/85" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-bv-ink via-bv-ink/70 to-bv-ink"
        aria-hidden
      />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {eyebrow}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="font-bv-heading text-[28px] leading-snug sm:text-[36px]">{heading}</h2>
          </TextBlockAnimation>
        </div>

        <div className="border-t border-bv-background/10">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="highlight-row invisible group grid cursor-default grid-cols-1 gap-3 border-b border-bv-background/10 py-8 transition-colors duration-300 hover:bg-bv-background/[0.02] sm:grid-cols-[100px_1fr_1.4fr] sm:items-start sm:gap-8 sm:px-4"
            >
              <span className="highlight-num font-bv-heading text-4xl text-bv-background/25 transition-colors duration-300 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bv-heading text-[20px] text-bv-accent sm:text-[22px]">{item.title}</h3>
                <span className="highlight-line mt-3 block h-px w-10 origin-left scale-x-0 bg-bv-accent" />
              </div>
              <p className="text-[15px] leading-relaxed text-bv-line sm:mt-1">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
