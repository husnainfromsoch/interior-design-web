"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ClipboardList, ShieldCheck, RefreshCcw, Eye, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "clipboard-list": ClipboardList,
  "shield-check": ShieldCheck,
  "refresh-ccw": RefreshCcw,
  eye: Eye,
};

type Step = {
  id: string;
  icon: string;
  title: string;
  body: string;
};

type Slide = { src: string; alt: string };

export default function HowWeWorkPanel({
  steps,
  slides,
  note,
  header,
  interval = 4500,
}: {
  header?: React.ReactNode;
  steps: Step[];
  slides: Slide[];
  note: string;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % steps.length), interval);
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, steps.length, interval]);

  // Draw the connecting line up to the active step's dot.
  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;
    const rows = list.querySelectorAll<HTMLElement>(".step-row");
    const target = rows[active];
    if (!target) return;
    const listTop = list.getBoundingClientRect().top;
    const dotCenter = target.getBoundingClientRect().top - listTop + target.offsetHeight / 2;
    line.style.height = `${dotCenter}px`;
  }, [active, steps.length]);

  return (
    <div
      className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="lg:col-span-7 xl:col-span-7">
        {header && <div className="mb-8">{header}</div>}
        <div ref={listRef} className="relative">
          <span
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-bv-line sm:block"
          />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute left-6 top-0 hidden w-px bg-bv-accent transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:block"
          />

          {steps.map((step, i) => {
            const isActive = i === active;
            const Icon = ICONS[step.icon];
            return (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => {
                  setPaused(true);
                  setActive(i);
                }}
                onFocus={() => {
                  setPaused(true);
                  setActive(i);
                }}
                onClick={() => {
                  setPaused(true);
                  setActive(i);
                }}
                className="step-row reveal group relative flex w-full items-start gap-5 rounded-none py-4 pl-0 pr-3 lg:py-3.5 text-left transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:pl-4"
                style={{ ["--reveal-delay" as string]: `${150 + i * 100}ms` }}
              >
                <span
                  className={`relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "border-bv-accent bg-bv-accent text-bv-white "
                      : "border-bv-field-border/60 bg-bv-surface text-bv-ink group-hover:border-bv-accent/50"
                  }`}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-4">
                    <h3
                      className={`font-bv-heading text-[20px] font-medium leading-[1.2] transition-colors duration-300 sm:text-[25px] ${
                        isActive ? "text-bv-accent" : "text-bv-ink"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`hidden select-none font-bv-heading text-[15px] font-medium leading-none transition-colors duration-300 sm:block ${
                        isActive ? "text-bv-accent/50" : "text-bv-line"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span
                    className={`mt-2 block max-w-lg overflow-hidden text-[15px] leading-[1.55] text-bv-muted transition-[grid-template-rows,opacity] duration-300 ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {step.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="flex h-full flex-col gap-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-bv-line  lg:aspect-auto lg:min-h-0 lg:flex-1">
            {slides.map((slide, i) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={`object-cover transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  i === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
                }`}
                aria-hidden={i !== active}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/45 via-bv-ink/0 to-bv-ink/0" />

            <div className="absolute bottom-4 left-4 right-4 inline-flex w-fit max-w-[calc(100%-2rem)] items-center gap-3 rounded-[2px] bg-bv-white/95 px-4 py-2.5 backdrop-blur">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-bv-accent text-[12px] font-semibold text-bv-white">
                PM
              </span>
              <span className="text-[13px] font-medium leading-[1.35] text-bv-ink">{note}</span>
            </div>
          </div>

          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setActive(i);
                }}
                aria-label={slide.alt}
                aria-current={i === active}
                className={`h-1 flex-1 overflow-hidden rounded-full bg-bv-line transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-accent`}
              >
                <span
                  className="block h-full bg-bv-accent transition-transform duration-300 ease-out"
                  style={{
                    transform: i === active ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
