"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Fills its (overflow-hidden, relative) parent; the content drifts slower than the page. */
export default function Parallax({ children, distance = 8 }: { children: ReactNode; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={reduce ? undefined : { y, scale: 1 + (distance * 2.2) / 100 }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}
