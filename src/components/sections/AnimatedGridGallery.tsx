"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const GRID_IMAGES = [
  "/images/imgi_6_6286442fe5576a329c6a2f55_05_LANDING PAGE.jpg",
  "/images/imgi_3_628644282ae3431022abbc74_01_LANDING PAGE.jpg",
  "/projects/marina-penthouse-terrace.avif",
  "/projects/al-barari-kitchen.avif",
  "/images/imgi_4_5ec2cad6308d2152492c7406_Hathaway_003.jpg",
  "/projects/jbr-apartment-bathroom.avif",
  "/projects/villa-exterior.avif",
  "/images/imgi_5_5ec2cc246e545fb9e2700871_NoHo Loft_006.jpg",
  "/projects/downtown-villa-living.avif",
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
