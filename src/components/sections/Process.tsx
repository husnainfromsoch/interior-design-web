"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Handshake,
  MapPin,
  PenTool,
  BadgeCheck,
  FileText,
  HardHat,
  Factory,
  Wrench,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

const STEP_IDS = [
  "consultation",
  "siteVisit",
  "design",
  "approvals",
  "quotation",
  "execution",
  "production",
  "installation",
  "handover",
] as const;

const STEP_ICONS: Record<(typeof STEP_IDS)[number], LucideIcon> = {
  consultation: Handshake,
  siteVisit: MapPin,
  design: PenTool,
  approvals: BadgeCheck,
  quotation: FileText,
  execution: HardHat,
  production: Factory,
  installation: Wrench,
  handover: KeyRound,
};

function StepIcon({ id }: { id: (typeof STEP_IDS)[number] }) {
  const Icon = STEP_ICONS[id];
  return <Icon size={18} strokeWidth={1.6} />;
}

export default function Process() {
  const t = useTranslations("Process");
  const steps = STEP_IDS.map((id) => ({
    id,
    label: t(`steps.${id}.label`),
    desc: t(`steps.${id}.desc`),
  }));
  const [active, setActive] = useState(0);

  const n = steps.length;
  const radius = 42;

  return (
    <section className="bg-charcoal py-24 text-ivory">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="reveal-left">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[28px] leading-tight sm:text-[36px]">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone">
              {t("body")}
            </p>

            <dl className="mt-9 space-y-6 border-t border-ivory/10 pt-8">
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  {t("listen")}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  {t("listenBody")}
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  {t("budget")}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  {t("budgetBody")}
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-champagne">
                  {t("design")}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-stone">
                  {t("designBody")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal-scale process-wheel relative mx-auto aspect-square w-full max-w-[520px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="var(--ivory)"
                strokeOpacity="0.16"
                strokeWidth="0.5"
              />
              {steps.map((step, i) => {
                const angle = (360 / n) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const isActive = i === active;
                return (
                  <line
                    key={step.id}
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
            </svg>

            {steps.map((step, i) => {
              const angle = (360 / n) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              const isActive = i === active;
              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
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
                        : "border-ivory/15 bg-charcoal text-ivory/70"
                    }`}
                  >
                    <StepIcon id={step.id} />
                  </span>
                </button>
              );
            })}

            <div className="absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-full bg-ivory px-8 text-center text-charcoal shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:px-10">
              <div key={active} className="process-center-fade flex flex-col items-center">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/60 font-serif text-[15px] text-wood">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[20px] font-semibold uppercase tracking-[0.04em] sm:text-[24px]">
                  {steps[active].label}
                </h3>
                <p className="mt-3 max-w-[26ch] text-[14px] leading-relaxed text-warm-grey sm:text-[15.5px]">
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
