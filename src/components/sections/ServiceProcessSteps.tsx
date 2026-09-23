"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ServiceProcessStep } from "@/data/services";

const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

function Step({
  step,
  index,
  active,
  onActive,
  reduce,
}: {
  step: ServiceProcessStep;
  index: number;
  active: boolean;
  onActive: (i: number) => void;
  reduce: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 55%"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <motion.li
      ref={ref}
      style={reduce ? undefined : { y, opacity }}
      className="group relative grid grid-cols-[auto_1fr] gap-x-6 border-t border-bv-line py-10 sm:gap-x-10 sm:py-12"
    >
      <span
        aria-hidden
        className={`absolute inset-x-0 -top-px h-px origin-left bg-bv-accent transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <span
        className={`font-bv-heading text-[44px] leading-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[64px] ${
          active ? "translate-x-0 text-bv-accent" : "-translate-x-1 text-bv-line"
        }`}
      >
        {pad(index + 1)}
      </span>
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
        <h3 className="font-bv-heading text-[24px] leading-snug text-bv-ink sm:text-[30px]">{step.title}</h3>
        <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-bv-muted">{step.desc}</p>
      </div>
    </motion.li>
  );
}

export default function ServiceProcessSteps({
  steps,
  eyebrow,
  heading,
}: {
  steps: ServiceProcessStep[];
  eyebrow: string;
  heading: string;
}) {
  const reduce = !!useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.4 });

  return (
    <section className="bg-bv-background py-[56px] md:py-[72px] lg:py-[104px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                  {eyebrow}
                </span>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] leading-[1.15] text-bv-ink sm:text-[40px] lg:text-[48px]">
                  {heading}
                </h2>
              </motion.div>

              <div className="mt-10 hidden items-end gap-4 lg:flex" aria-hidden>
                <div className="relative h-[72px] w-[92px] overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={active}
                      initial={reduce ? false : { y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="absolute inset-0 font-bv-heading text-[72px] leading-none text-bv-accent"
                    >
                      {pad(active + 1)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="pb-2 text-sm tracking-[0.16em] text-bv-muted">/ {pad(steps.length)}</span>
              </div>

              <div className="mt-6 hidden h-px w-full max-w-[280px] bg-bv-line lg:block" aria-hidden>
                <motion.div
                  style={{ scaleX: reduce ? 1 : progress }}
                  className="h-px origin-left bg-bv-accent"
                />
              </div>
            </div>
          </div>

          <ol ref={listRef} className="border-b border-bv-line lg:col-span-7 lg:col-start-6">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} active={active === i} onActive={setActive} reduce={reduce} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
