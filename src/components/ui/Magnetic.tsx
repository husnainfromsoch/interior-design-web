"use client";

import { useEffect } from "react";

const MAX = 6; // px: the button leans toward the pointer, never jumps

/**
 * Magnetic CTAs: any element with `data-magnetic` eases a few pixels toward the pointer
 * while hovered and settles back on leave. One delegated listener for the whole site.
 * Only for a fine pointer (mouse/trackpad) and only when motion is allowed.
 */
export default function Magnetic() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;

    const release = () => {
      cancelAnimationFrame(frame);
      if (!active) return;
      active.classList.remove("is-magnetic");
      active.style.removeProperty("--mx");
      active.style.removeProperty("--my");
      active = null;
    };

    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (target !== active) release();
      if (!target) return;
      active = target;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = target.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        target.classList.add("is-magnetic");
        target.style.setProperty("--mx", `${(dx * MAX).toFixed(2)}px`);
        target.style.setProperty("--my", `${(dy * MAX * 0.6).toFixed(2)}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    window.addEventListener("blur", release);
    return () => {
      cancelAnimationFrame(frame);
      release();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
      window.removeEventListener("blur", release);
    };
  }, []);

  return null;
}
