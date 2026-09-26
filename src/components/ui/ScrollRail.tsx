"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** A 1 px rail whose accent fill follows the reader down (vertical) or across (horizontal) a list. */
export default function ScrollRail({ horizontal, className = "" }: { horizontal?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: horizontal ? ["start 90%", "start 40%"] : ["start 70%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none bg-bv-line ${className}`}>
      <motion.div
        style={reduce ? undefined : horizontal ? { scaleX: progress } : { scaleY: progress }}
        className={`h-full w-full bg-bv-accent ${horizontal ? "origin-left" : "origin-top"}`}
      />
    </div>
  );
}
