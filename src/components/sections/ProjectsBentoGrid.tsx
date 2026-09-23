"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export type BentoProject = {
  id: string;
  href: string;
  image: string;
  title: string;
  tags: string[];
  num: string;
  badge?: string;
};

/** Single-row editorial grid — image card + caption below, sized to stay within one viewport. */
export default function ProjectsBentoGrid({ items }: { items: BentoProject[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".bento-card", grid);

      // Whole grid rides in on the page scroll — scales up and settles as the section arrives.
      gsap.fromTo(
        grid,
        { autoAlpha: 0, y: 90, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 92%",
            end: "top 55%",
            scrub: 0.6,
          },
        }
      );

      // Cards stagger in with a slight tilt for a hand-set, editorial feel.
      cards.forEach((card, i) => {
        const img = card.querySelector<HTMLElement>(".bento-img");

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
      className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6"
    >
      {items.map((item, i) => (
        <Link
          key={item.id}
          href={item.href}
          className="bento-card group relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-bv-surface">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
              priority={i === 0}
              className="bento-img object-cover scale-[1.15] grayscale-[45%] transition-[transform,filter] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:grayscale-0"
            />

            {/* corner frame draws in on hover */}
            <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-bv-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-4 group-hover:top-4 group-hover:opacity-100" />
            <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-bv-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:right-4 group-hover:top-4 group-hover:opacity-100" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-bv-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bottom-4 group-hover:left-4 group-hover:opacity-100" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-bv-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bottom-4 group-hover:right-4 group-hover:opacity-100" />

            <span className="absolute left-4 top-4 font-[var(--font-bv-body)] text-[11px] font-semibold tracking-[0.12em] text-bv-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
              {item.num}
            </span>

            {item.badge && (
              <span className="absolute right-4 top-4 rounded-full border border-bv-white/40 bg-bv-white/10 px-3 py-1 font-[var(--font-bv-body)] text-[10px] font-semibold uppercase tracking-[0.1em] text-bv-white backdrop-blur-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                {item.badge}
              </span>
            )}

            {/* caption panel slides up over the image on hover */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-10 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <span className="flex items-center justify-between gap-2 text-bv-white">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em]">View project</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bv-white/70 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-start justify-between gap-3 border-t border-bv-field-border pt-4">
            <div className="min-w-0">
              <h3 className="inline truncate bg-[linear-gradient(var(--bv-accent),var(--bv-accent))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 font-[var(--font-bv-heading)] text-[19px] font-medium leading-[1.15] text-bv-ink transition-[background-size,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[length:100%_1px] group-hover:text-bv-accent lg:text-[21px]">
                {item.title}
              </h3>
              <p className="mt-1 truncate text-[12px] text-bv-ink/55 transition-colors duration-300 group-hover:text-bv-ink/75">
                {item.tags.slice(0, 2).join(" · ")}
              </p>
            </div>
            <span className="mt-1 h-[6px] w-[6px] shrink-0 rounded-full bg-bv-accent transition-transform duration-300 group-hover:scale-[1.6]" />
          </div>
        </Link>
      ))}
    </div>
  );
}
