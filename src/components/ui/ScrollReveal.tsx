"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Changes Sheet D8: one fade-in per section, once. Marks each .bv-fade section as it
// enters the viewport; the CSS (globals.css) only hides sections when scripting is on.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".bv-fade:not(.is-visible)").forEach((el) => io.observe(el));
    };
    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
