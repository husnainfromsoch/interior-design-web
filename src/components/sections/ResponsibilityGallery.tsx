"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function ResponsibilityGallery({
  slides,
  note,
  interval = 5000,
}: {
  slides: Slide[];
  note: string;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, slides.length, interval]);

  return (
    <div
      className="flex h-full flex-col gap-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-[24px] bg-bv-line shadow-[0_24px_48px_-28px_rgba(51,46,43,0.4)] lg:aspect-auto lg:min-h-[420px]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              i === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/40 via-bv-ink/0 to-bv-ink/0" />

        <div className="absolute bottom-4 left-4 right-4 inline-flex w-fit max-w-[calc(100%-2rem)] items-center gap-3 rounded-full bg-bv-white/95 px-4 py-2.5 backdrop-blur">
          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-bv-accent text-[12px] font-semibold text-bv-white">
            PM
          </span>
          <span className="text-[13px] font-medium leading-[1.35] text-bv-ink">{note}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={slide.alt}
            aria-current={i === active}
            className={`group relative aspect-[4/3] overflow-hidden rounded-[14px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-accent motion-reduce:transition-none ${
              i === active ? "opacity-100 ring-2 ring-bv-accent ring-offset-2 ring-offset-bv-surface" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="120px"
              className="object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none"
            />
            {i === active && !paused && !reduced && (
              <span
                key={active}
                className="absolute bottom-0 left-0 h-[3px] bg-bv-white/90"
                style={{ animation: `gallery-progress ${interval}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`@keyframes gallery-progress{from{width:0}to{width:100%}}`}</style>
    </div>
  );
}
