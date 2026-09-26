"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export type Direction = {
  id: string;
  num: string;
  image: string;
  title: string;
  body: string;
  viewLabel: string;
  hrefs: { href: string; label: string }[];
};

export default function ServicesDirectionGrid({ items }: { items: Direction[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".dir-card", grid);

      gsap.fromTo(
        grid,
        { autoAlpha: 0, y: 90, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: grid, start: "top 92%", end: "top 55%", scrub: 0.6 },
        }
      );

      cards.forEach((card, i) => {
        const img = card.querySelector<HTMLElement>(".dir-img");

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 56, scale: 0.92, rotate: i % 2 === 0 ? -1.5 : 1.5 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: grid, start: "top 85%" },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === grid || (st.trigger && grid.contains(st.trigger as Node))) st.kill();
      });
    };
  }, [items.length]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-x-5 gap-y-10 [transform-style:preserve-3d] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6"
    >
      {items.map((d, i) => (
        <article key={d.id} className="dir-card group relative flex flex-col">
          <Link
            href={d.hrefs[0].href}
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-lg bg-bv-surface  "
          >
            <div className="img-zoom absolute inset-0">
              <Image
              src={d.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
              priority={i === 0}
              className="dir-img scale-[1.15] object-cover"
            />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-90" />

            <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-sm bg-bv-white/95 font-bv-body text-[12px] font-semibold tracking-[0.02em] text-bv-ink  backdrop-blur">
              {d.num}
            </span>

            <div className="absolute inset-x-4 bottom-4">
              <h3 className="font-bv-heading text-[19px] font-medium leading-[1.15] text-bv-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] lg:text-[21px]">
                {d.title}
              </h3>
            </div>
          </Link>

          <div className="mt-4 border-t border-bv-field-border pt-4">
            <p className="text-[13px] leading-[1.55] text-bv-ink/60">{d.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {d.hrefs.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group/link relative inline-flex min-h-11 min-w-0 items-center gap-2.5 overflow-hidden rounded-sm bg-bv-surface py-1.5 pl-4 pr-1.5 text-[11px] font-semibold uppercase tracking-[0.05em] text-bv-ink ring-1 ring-bv-ink/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bv-ink hover:text-bv-white hover:ring-bv-ink motion-reduce:transition-none"
                >
                  <span className="relative leading-[1.3]">{l.label}</span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-bv-accent text-bv-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
