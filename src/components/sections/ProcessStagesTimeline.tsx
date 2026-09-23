import TextBlockAnimation from "@/components/ui/TextBlockAnimation";
import {
  MessageCircle,
  ClipboardList,
  PenTool,
  Ruler,
  FileCheck2,
  ShieldCheck,
  HardHat,
  Package,
  Boxes,
  KeyRound,
} from "lucide-react";

const ICONS = [
  MessageCircle,
  ClipboardList,
  PenTool,
  Ruler,
  FileCheck2,
  ShieldCheck,
  HardHat,
  Package,
  Boxes,
  KeyRound,
];

type Stage = { title: string; body: string };

export default function ProcessStagesTimeline({
  heading,
  stages,
}: {
  heading: string;
  stages: Stage[];
}) {
  return (
    <section className="relative overflow-hidden bg-bv-ink py-14 md:py-[72px] lg:py-[104px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-bv-accent/[0.08] blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-white sm:text-[40px] lg:text-[48px]">
              {heading}
            </h2>
          </TextBlockAnimation>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 lg:mt-16 lg:grid-cols-2">
          {[stages.slice(0, 5), stages.slice(5)].map((column, colIndex) => (
            <ol key={colIndex} className="relative">
              <span
                aria-hidden="true"
                className="absolute left-6 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-bv-accent/60 via-bv-white/10 to-transparent"
              />

              {column.map((stage, i) => {
                const globalIndex = colIndex * 5 + i;
                const Icon = ICONS[globalIndex % ICONS.length];
                return (
                  <li
                    key={stage.title}
                    className="reveal-scale group relative flex gap-4 py-4"
                    style={{ "--reveal-delay": `${(globalIndex % 5) * 80}ms` } as React.CSSProperties}
                  >
                    <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-none border border-bv-white/10 bg-gradient-to-b from-bv-white/[0.06] to-bv-white/[0.02] text-bv-accent  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-accent/50 ">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                      <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-bv-ink font-bv-body text-[9px] font-semibold text-bv-white/60 ring-1 ring-bv-white/15">
                        {String(globalIndex + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <div className="min-w-0 flex-1 border-b border-bv-white/[0.08] pb-4 transition-colors duration-500 group-hover:border-bv-accent/30">
                      <h3 className="font-bv-heading text-[17px] font-medium leading-[1.25] text-bv-white transition-colors duration-300 group-hover:text-bv-accent">
                        {stage.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-[1.55] text-bv-white/50">
                        {stage.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          ))}
        </div>
      </div>
    </section>
  );
}
