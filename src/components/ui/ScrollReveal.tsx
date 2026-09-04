"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

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
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains("is-visible")) io.observe(el);
      });
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
