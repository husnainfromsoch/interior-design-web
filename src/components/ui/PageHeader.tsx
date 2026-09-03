"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, SplitText } from "@/lib/gsap";

export default function PageHeader({
  eyebrow,
  title,
  description,
  images,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  images?: string[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images]);

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

        tl.from(eyebrowRef.current, { y: 14, opacity: 0, duration: 0.5, clearProps: "opacity,transform" })
          .from(
            titleSplit.lines,
            { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.1, clearProps: "opacity,transform" },
            "-=0.25"
          )
          .from(descRef.current, { y: 16, opacity: 0, duration: 0.6, clearProps: "opacity,transform" }, "-=0.35");
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, [title]);

  const hasImages = !!images && images.length > 0;

  return (
    <section
      ref={sectionRef}
      className={`relative flex overflow-hidden bg-beige px-6 lg:px-8 ${
        hasImages
          ? "min-h-[560px] items-center py-28 sm:min-h-[640px] lg:min-h-[760px] lg:py-36"
          : "items-center py-16 lg:py-20"
      }`}
    >
      {hasImages && (
        <div aria-hidden className="absolute inset-0">
          {images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
              style={{ opacity: i === activeSlide ? 1 : 0 }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-charcoal/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-charcoal/10" />
        </div>
      )}

      {!hasImages && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-wood/10 blur-3xl"
        />
      )}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${hasImages ? "via-ivory/20" : "via-charcoal/10"} to-transparent`}
      />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        {eyebrow && (
          <p
            ref={eyebrowRef}
            className={`flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${hasImages ? "text-ivory/80" : "text-wood"}`}
          >
            <span className={`h-px w-8 ${hasImages ? "bg-ivory/50" : "bg-wood/50"}`} />
            {eyebrow}
            <span className={`h-px w-8 ${hasImages ? "bg-ivory/50" : "bg-wood/50"}`} />
          </p>
        )}
        <h1
          ref={titleRef}
          className={`mt-6 overflow-hidden font-serif text-[42px] leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${hasImages ? "text-ivory" : "text-charcoal"}`}
        >
          {title}
        </h1>
        {description && (
          <p
            ref={descRef}
            className={`mx-auto mt-7 max-w-xl text-base leading-relaxed sm:text-lg ${hasImages ? "text-ivory/80" : "text-warm-grey"}`}
          >
            {description}
          </p>
        )}

        {hasImages && images.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeSlide ? "w-6 bg-ivory" : "w-1.5 bg-ivory/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
