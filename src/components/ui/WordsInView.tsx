"use client";

import { Fragment, useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";

/** A statement whose words rise out of a mask one after another once it is on screen (same movement as the H1s). */
export default function WordsInView({ text, className = "", step = 32 }: { text: string; className?: string; step?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -18% 0px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={`words-in-view ${inView ? "is-visible" : ""} ${className}`}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word-mask">
            <span className="word-rise" style={{ ["--d" as string]: `${i * step}ms` } as CSSProperties}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </p>
  );
}
