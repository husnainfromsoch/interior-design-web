"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  const pathname = usePathname();
  // Insights spec A3: no full-viewport progress bar on article pages.
  if (reduce || /\/insights\/[^/]+/.test(pathname)) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-bv-accent"
    />
  );
}
