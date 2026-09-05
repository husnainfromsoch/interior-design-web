"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const GRID_IMAGES = [
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593136596203-7212b076f4d2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631193645836-7c0a50257618?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1704040686370-52238a5dab05?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1597088136953-db42ae225804?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1721743162928-10502681850b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1705862851897-fa60b41617c2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
];

const FEATURED_INDEX = 4;
const VIDEO_SRC = "/videos/hero.mp4";

export default function AnimatedGridGallery() {
  const t = useTranslations("AnimatedGridGallery");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const featured = cellRefs.current[FEATURED_INDEX];
    if (!section || !featured) return;

    const ctx = gsap.context(() => {
      const others = cellRefs.current.filter((_, i) => i !== FEATURED_INDEX);
      const rect = featured.getBoundingClientRect();

      gsap.set(featured, {
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        margin: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(videoWrapRef.current, { opacity: 1, duration: 0.3 }, 0)
        .to(
          others,
          {
            opacity: 0,
            scale: 0.85,
            duration: 0.6,
            stagger: 0.02,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          featured,
          {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0.05
        )
        .to(
          labelRef.current,
          { opacity: 0, duration: 0.3 },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-charcoal"
    >
      <div ref={videoWrapRef} className="absolute inset-0 z-0 opacity-0">
        <video
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div
        ref={labelRef}
        className="absolute left-1/2 top-8 z-20 -translate-x-1/2 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/70">
          {t("scrollToExplore")}
        </span>
      </div>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-6xl grid-cols-3 grid-rows-3 gap-3 p-3 md:gap-4 md:p-6">
        {GRID_IMAGES.map((src, i) => (
          <div
            key={src}
            ref={(el) => {
              cellRefs.current[i] = el;
            }}
            className="relative overflow-hidden rounded-2xl"
            style={{ zIndex: i === FEATURED_INDEX ? 30 : 10 }}
          >
            <Image
              src={src}
              alt="Interior design showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 400px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
