"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    label: "Consultation",
    desc: "We meet, listen to your brief and walk the space to understand scope, budget and timeline.",
  },
  {
    label: "Site Visit",
    desc: "Measurements, condition survey and photo documentation of the existing site.",
  },
  {
    label: "Design",
    desc: "Concept, mood boards, material palette and 3D visuals built around your brief.",
  },
  {
    label: "Approvals",
    desc: "Drawings packaged and submitted for the required authority NOCs and permits.",
  },
  {
    label: "Quotation",
    desc: "Transparent, itemised pricing across design, execution, fit-out and furniture.",
  },
  {
    label: "Execution",
    desc: "Renovation and site works begin, managed daily by our project team.",
  },
  {
    label: "Production",
    desc: "Custom joinery, kitchens and furniture manufactured in our own workshop.",
  },
  {
    label: "Installation",
    desc: "Fit-out, furniture placement and styling completed on site.",
  },
  {
    label: "Handover",
    desc: "Final walkthrough, snag list closed, and the space handed over ready to live in.",
  },
];

function StepIcon({ label }: { label: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (label) {
    case "Consultation":
      return (
        <svg {...common}>
          <path d="M4 5h16v10H9l-4 4V5Z" />
        </svg>
      );
    case "Site Visit":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );
    case "Design":
      return (
        <svg {...common}>
          <path d="M4 20 15 9l-2-2L2 18l-1 3 3-1Z" />
          <path d="M13 7l4 4" />
        </svg>
      );
    case "Approvals":
      return (
        <svg {...common}>
          <path d="m4 12 5 5L20 6" />
        </svg>
      );
    case "Quotation":
      return (
        <svg {...common}>
          <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );
    case "Execution":
      return (
        <svg {...common}>
          <path d="M14.5 5.5 18.5 9.5" />
          <path d="m3 21 6-2 9-9-4-4-9 9-2 6Z" />
        </svg>
      );
    case "Production":
      return (
        <svg {...common}>
          <path d="M3 9 12 4l9 5v9l-9 5-9-5V9Z" />
          <path d="M3 9l9 5 9-5M12 14v7" />
        </svg>
      );
    case "Installation":
      return (
        <svg {...common}>
          <path d="M14 7l3 3-8 8H6v-3l8-8Z" />
          <path d="M14 7a2.5 2.5 0 0 1 3-3l-2 2 1 1 2-2a2.5 2.5 0 0 1-3 3Z" />
        </svg>
      );
    case "Handover":
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="3" />
          <path d="M10.5 12.5 19 4M17 6l2 2M15 8l1.5 1.5" />
        </svg>
      );
    default:
      return null;
  }
}

const CYCLE_MS = 2600;

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  const n = steps.length;
  const radius = 42;
  const ringRadius = 29.5;
  const ringCircumference = 2 * Math.PI * ringRadius;

  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="reveal-left">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
              Process
            </span>
            <h2 className="font-serif text-[28px] leading-tight sm:text-[36px]">
              One coordinated approach, start to handover.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone">
              From the first conversation to the final walkthrough, one team carries your
              project through design, approvals, execution and furniture — no handoffs, no
              guesswork.
            </p>

            <dl className="mt-9 space-y-6 border-t border-ivory/10 pt-8">
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  Listen &amp; Collaborate
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  We build the brief around your vision, with your input welcomed at every stage.
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  Budget &amp; Planning
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  Every schedule, order and delivery is tracked so nothing stalls on site.
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  Design &amp; Installation
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  Balanced, functional interiors delivered and supported beyond handover.
                </dd>
              </div>
            </dl>
          </div>

          <div
            className="reveal-scale process-wheel relative mx-auto aspect-square w-full max-w-[520px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="var(--ivory)"
                strokeOpacity="0.12"
                strokeWidth="0.5"
                strokeDasharray="1.5 2.5"
              />
              {steps.map((step, i) => {
                const angle = (360 / n) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const isActive = i === active;
                return (
                  <line
                    key={step.label}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="var(--champagne)"
                    strokeWidth={isActive ? 0.5 : 0}
                    className="process-spoke transition-all duration-700"
                    style={{ opacity: isActive ? 0.5 : 0 }}
                  />
                );
              })}
              {!reduceMotion && (
                <circle
                  key={active}
                  cx="50"
                  cy="50"
                  r={ringRadius}
                  fill="none"
                  stroke="var(--champagne)"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringCircumference}
                  transform="rotate(-90 50 50)"
                  className="process-ring"
                  style={{
                    animationDuration: `${CYCLE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </svg>

            {steps.map((step, i) => {
              const angle = (360 / n) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              const isActive = i === active;
              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={step.label}
                  aria-current={isActive}
                  className="process-node group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%`, "--node-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  {isActive && <span className="process-node-glow absolute inset-0 -z-10 rounded-full" />}
                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 sm:h-14 sm:w-14 ${
                      isActive
                        ? "scale-110 border-champagne bg-champagne text-charcoal shadow-[0_0_0_6px_rgba(217,199,166,0.15)]"
                        : "border-ivory/15 bg-charcoal text-ivory/70 group-hover:scale-105 group-hover:border-champagne/50 group-hover:text-ivory"
                    }`}
                  >
                    <StepIcon label={step.label} />
                  </span>
                  <span className="process-tooltip pointer-events-none absolute left-1/2 top-[-30px] -translate-x-1/2 whitespace-nowrap rounded-md bg-ivory px-2.5 py-1 text-[11px] font-medium text-charcoal opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                    {step.label}
                  </span>
                </button>
              );
            })}

            <div className="absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-full bg-ivory px-6 text-center text-charcoal shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:px-8">
              <div key={active} className="process-center-fade flex flex-col items-center">
                <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-charcoal/30 font-serif text-[13px]">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.04em] sm:text-[17px]">
                  {steps[active].label}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-warm-grey sm:text-[13px]">
                  {steps[active].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
