"use client";

import { useEffect, useRef } from "react";

export default function PortfolioParallax() {
  const slowRef = useRef<HTMLDivElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (slowRef.current) {
          slowRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
        }
        if (fastRef.current) {
          fastRef.current.style.transform = `translate3d(0, ${y * -0.09}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={slowRef}
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-wood/10 blur-[110px] will-change-transform"
      />
      <div
        ref={fastRef}
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-champagne/30 blur-[130px] will-change-transform"
      />
    </>
  );
}
