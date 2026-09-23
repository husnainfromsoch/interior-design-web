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
        const glow = card.querySelector<HTMLElement>(".dir-glow");

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

        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, {
            rotateY: px * 8,
            rotateX: py * -8,
            y: -8,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 800,
          });
          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              duration: 0.3,
              ease: "power1.out",
              css: { left: `${(px + 0.5) * 100}%`, top: `${(py + 0.5) * 100}%` },
            });
          }
        };
        const onEnter = () => gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power2.out" });
        const onLeave = () => {
          gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, scale: 1, duration: 0.6, ease: "power3.out" });
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.4, ease: "power1.out" });
        };
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
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
        <article key={d.id} className="dir-card group relative flex flex-col will-change-transform">
          <Link
            href={d.hrefs[0].href}
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-bv-surface shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_24px_48px_-12px_rgba(20,16,12,0.35),0_0_0_1px_var(--bv-accent)]"
          >
            <span
              aria-hidden="true"
              className="dir-glow pointer-events-none absolute left-1/2 top-1/2 z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 mix-blend-soft-light"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)" }}
            />
            <Image
              src={d.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
              priority={i === 0}
              className="dir-img scale-[1.15] object-cover brightness-100 saturate-100 transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.24] group-hover:brightness-[1.05] group-hover:saturate-[1.1]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bv-white/95 font-[var(--font-bv-body)] text-[12px] font-semibold tracking-[0.02em] text-bv-ink shadow-md backdrop-blur">
              {d.num}
            </span>

            <span
              aria-hidden="true"
              className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-bv-white/70 bg-bv-white/0 text-bv-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:bg-bv-white group-hover:text-bv-ink group-hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <div className="absolute inset-x-4 bottom-4">
              <h3 className="font-[var(--font-bv-heading)] text-[19px] font-medium leading-[1.15] text-bv-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] lg:text-[21px]">
                {d.title}
              </h3>
            </div>
          </Link>

          <div className="mt-4 border-t border-bv-field-border pt-4">
            <p className="line-clamp-2 text-[13px] leading-[1.55] text-bv-ink/60">{d.body}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {d.hrefs.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group/link inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-bv-ink transition-colors duration-200 hover:text-bv-accent"
                >
                  {l.label}
                  <span className="h-px w-3 bg-current transition-[width] duration-300 group-hover/link:w-5" />
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
