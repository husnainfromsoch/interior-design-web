"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle, PenTool, FileCheck2, HardHat, KeyRound } from "lucide-react";

const ICONS = [MessageCircle, PenTool, FileCheck2, HardHat, KeyRound];
const EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_MS = 3200;

type Step = { title: string; body: string };

const slide = {
  enter: (d: number) => ({ opacity: 0, x: d * 48, filter: "blur(6px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (d: number) => ({ opacity: 0, x: d * -32, filter: "blur(4px)" }),
};

export default function StagesTimeline({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.5 });
  const last = steps.length - 1;
  const Icon = ICONS[active];

  const go = (i: number, manual = true) => {
    const next = Math.min(last, Math.max(0, i));
    setDir(next >= active ? 1 : -1);
    setActive(next);
    if (manual) setAuto(false);
  };

  // one-time walk through the steps; stops on any user interaction or at the end
  useEffect(() => {
    if (reduce || !auto || paused || !inView || active >= last) return;
    const id = setTimeout(() => {
      setDir(1);
      setActive((a) => a + 1);
    }, AUTO_MS);
    return () => clearTimeout(id);
  }, [active, auto, paused, inView, reduce, last]);

  // spotlight follows the cursor
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(255,255,255,0.07), transparent 60%)`;

  return (
    <div
      ref={rootRef}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(active + 1);
        if (e.key === "ArrowLeft") go(active - 1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* stepper */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative"
      >
        <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[22px] h-px bg-bv-white/15 sm:top-[26px]">
          <span
            className="absolute inset-0 origin-left bg-bv-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `scaleX(${active / last})` }}
          />
          {/* glowing head travels with the fill */}
          <span
            className="absolute top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bv-accent shadow-[0_0_14px_3px_var(--color-bv-accent,#b0583a)] transition-[left] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ left: `${(active / last) * 100}%` }}
          />
        </div>

        <ol className="relative grid grid-cols-5">
          {steps.map((step, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <li key={step.title} className="flex justify-center">
                <button type="button" onClick={() => go(i)} aria-current={current ? "step" : undefined} className="group flex flex-col items-center gap-3 px-1">
                  <span className="relative">
                    {current && !reduce && (
                      <motion.span
                        key={`ring-${active}`}
                        aria-hidden="true"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.9, opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-bv-accent"
                      />
                    )}
                    <span
                      className={`relative flex h-11 w-11 items-center justify-center rounded-full border text-[14px] font-semibold transition-[background-color,border-color,color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:h-[52px] sm:w-[52px] ${
                        current
                          ? "scale-110 border-bv-accent bg-bv-accent text-bv-white"
                          : done
                            ? "border-bv-accent bg-bv-ink text-bv-accent"
                            : "border-bv-white/20 bg-bv-ink text-bv-white/50 group-hover:-translate-y-0.5 group-hover:border-bv-white/50"
                      }`}
                    >
                      {done ? (
                        <motion.span initial={reduce ? false : { scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                          <Check className="h-4 w-4" strokeWidth={2.2} />
                        </motion.span>
                      ) : (
                        i + 1
                      )}
                    </span>
                  </span>
                  <span className={`hidden max-w-[140px] text-center text-[13px] leading-[1.3] transition-[color,transform] duration-500 motion-reduce:transition-none lg:block ${current ? "-translate-y-0.5 text-bv-white" : "text-bv-white/45"}`}>
                    {step.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </motion.div>

      {/* detail panel */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width) * 100);
          my.set(((e.clientY - r.top) / r.height) * 100);
        }}
        className="relative mt-10 overflow-hidden rounded-[24px] border border-bv-white/12 bg-bv-white/[0.04] lg:mt-14"
      >
        {!reduce && <motion.div aria-hidden="true" style={{ background: spotlight }} className="pointer-events-none absolute inset-0" />}

        {/* step progress bar */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-bv-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `scaleX(${(active + 1) / steps.length})` }}
        />

        <div className="relative grid min-h-[280px] gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12 lg:p-14">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={active}
              custom={dir}
              variants={reduce ? undefined : slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
              className="contents"
            >
              <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
                <motion.span
                  initial={reduce ? false : { scale: 0.6, rotate: -25 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-bv-accent text-bv-white"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </motion.span>
                <span className="font-[var(--font-bv-heading)] text-[56px] leading-none text-bv-white/15 lg:text-[88px]">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-white sm:text-[36px]">
                  {steps[active].title.split(" ").map((w, i) => (
                    <span key={i} className="inline-block overflow-hidden align-bottom">
                      <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.08 + i * 0.06 }}
                      >
                        {w}&nbsp;
                      </motion.span>
                    </span>
                  ))}
                </h3>
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
                  className="mt-4 max-w-xl text-[17px] leading-[1.6] text-bv-white/65"
                >
                  {steps[active].body}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 lg:self-end">
            {[
              { label: "Previous step", Ico: ArrowLeft, to: active - 1, off: active === 0, nudge: "group-hover/btn:-translate-x-0.5" },
              { label: "Next step", Ico: ArrowRight, to: active + 1, off: active === last, nudge: "group-hover/btn:translate-x-0.5" },
            ].map(({ label, Ico, to, off, nudge }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                disabled={off}
                onClick={() => go(to)}
                className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-bv-white/25 text-bv-white transition-[background-color,color,opacity,transform] duration-200 hover:bg-bv-white hover:text-bv-ink active:scale-90 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-bv-white motion-reduce:transition-none"
              >
                <Ico className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${nudge}`} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
