"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * A number that counts up to `to` when it scrolls into view. The server renders the final
 * value, so it reads correctly without JavaScript and for screen readers.
 */
export default function CountUp({ to, from, duration = 1.8, className }: { to: number; from: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);
  const armed = useRef(false);

  // Arm the counter only while it is still off screen, so a visible number never jumps back.
  useEffect(() => {
    if (reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      setValue(from);
    }
  }, [from, reduce]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
