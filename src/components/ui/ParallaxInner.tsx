"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Slow vertical drift for an image inside a rounded, overflow-hidden frame.
 * The layer is 14 % taller than the frame so the drift never shows an edge.
 */
export default function ParallaxInner({ children, strength = 6 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className="absolute inset-x-0 -inset-y-[7%]">
      {children}
    </motion.div>
  );
}
