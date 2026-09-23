"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

export default function ProcessHero({
  eyebrow,
  title,
  intro,
  stats,
  images,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  images: string[];
  imageAlt: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        }
      );

      const split = titleRef.current ? new SplitText(titleRef.current, { type: "lines", linesClass: "hero-line" }) : null;
      const statRows = statsRef.current ? gsap.utils.toArray<HTMLElement>(".hero-stat", statsRef.current) : [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(eyebrowRef.current, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(
          split ? split.lines : titleRef.current,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(introRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(statRows, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

      return () => {
        split?.revert();
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.trigger === sectionRef.current && st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-bv-background pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <span
              ref={eyebrowRef}
              className="inline-block font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent"
            >
              {eyebrow}
            </span>
            <h1
              ref={titleRef}
              className="mt-3 font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.1] text-bv-ink sm:text-[42px] lg:text-[46px]"
            >
              {title}
            </h1>
            <p ref={introRef} className="mt-4 max-w-xl text-[16px] leading-[1.6] text-bv-muted">
              {intro}
            </p>

            <div
              ref={statsRef}
              className="hero-stats-marquee group relative mt-7 overflow-hidden border-t border-bv-line pt-6"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="marquee-track flex w-max items-center gap-x-14 group-hover:[animation-play-state:paused]">
                {[...stats, ...stats].map((s, i) => (
                  <div key={`${s.label}-${i}`} className="hero-stat flex shrink-0 items-baseline gap-2.5">
                    <div className="font-[var(--font-bv-heading)] text-[24px] font-medium leading-none text-bv-ink sm:text-[28px]">
                      {s.value}
                    </div>
                    <div className="text-[12.5px] leading-[1.4] text-bv-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative mx-auto grid w-full max-w-[300px] grid-cols-2 gap-3 lg:col-span-4 lg:max-w-none lg:gap-4"
          >
            <div className="relative col-span-2 aspect-[16/10] w-full overflow-hidden rounded-[20px] shadow-[0_20px_40px_-22px_rgba(20,16,12,0.4)]">
              <Image
                src={images[0]}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 22vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/25 via-transparent to-transparent" />
            </div>
            {images.slice(1, 3).map((src, i) => (
              <div
                key={src}
                className={`relative aspect-square w-full overflow-hidden rounded-[16px] shadow-[0_16px_32px_-18px_rgba(20,16,12,0.4)] ${
                  i === 1 ? "translate-y-4" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 11vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
