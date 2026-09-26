"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Fades the main content in after a client-side route change (not on first load, to protect LCP). */
export default function PageFade() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.getElementById("main-content")?.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], {
      duration: 550,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
  }, [pathname]);

  return null;
}
