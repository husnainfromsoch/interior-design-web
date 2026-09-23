"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

type Highlight = { title: string; body: string };

const EASE = [0.22, 1, 0.36, 1] as const;

function HighlightRow({ item, index, reduce }: { item: Highlight; index: number; reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 35%"] });
  const focus = useTransform(scrollYProgress, [0, 0.35, 1], [0.35, 1, 1]);
  const numX = useTransform(scrollYProgress, [0, 0.5], [-16, 0]);
  const numColor = useTransform(
    scrollYProgress,
    [0.15, 0.5, 1],
    ["rgba(247,243,236,0.2)", "rgba(152,88,63,1)", "rgba(152,88,63,1)"]
  );

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { opacity: focus }}
      initial={reduce ? false : { y: 40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
      className="group relative grid cursor-default grid-cols-1 gap-3 py-8 sm:grid-cols-[100px_1fr_1.4fr] sm:items-start sm:gap-8 sm:px-6"
    >
      <motion.span
        aria-hidden
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-x-0 top-0 h-px origin-left bg-bv-background/15"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-bv-background/[0.035] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      <motion.span
        style={reduce ? undefined : { x: numX, color: numColor }}
        className="relative font-bv-heading text-4xl text-bv-background/25 sm:text-5xl"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
      <div className="relative">
        <h3 className="font-bv-heading text-[20px] text-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:text-[22px]">
          {item.title}
        </h3>
        <span className="mt-3 block h-px w-10 origin-left scale-x-0 bg-bv-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
      </div>
      <p className="relative text-[15px] leading-relaxed text-bv-line transition-colors duration-500 group-hover:text-bv-background sm:mt-1">
        {item.body}
      </p>
    </motion.div>
  );
}

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
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
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
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] leading-snug sm:text-[36px]">{heading}</h2>
          </TextBlockAnimation>
        </div>

        <div ref={listRef} className="relative">
          <span aria-hidden className="absolute -left-4 top-0 hidden h-full w-px bg-bv-background/10 lg:block" />
          <motion.span
            aria-hidden
            style={reduce ? { scaleY: 1 } : { scaleY: progress }}
            className="absolute -left-4 top-0 hidden h-full w-px origin-top bg-bv-accent lg:block"
          />
          {highlights.map((item, i) => (
            <HighlightRow key={item.title} item={item} index={i} reduce={reduce} />
          ))}
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
            className="block h-px origin-left bg-bv-background/15"
          />
        </div>
      </div>
    </section>
  );
}
