"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
};

export default function ParallaxImage({ src, alt, sizes, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const reveal = useTransform(scrollYProgress, [0, 0.35], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { clipPath: reveal }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 -inset-y-[9%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
