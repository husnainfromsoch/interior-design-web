import type { CSSProperties } from "react";

/**
 * Decorative architectural line drawing (walls, door swing, island, dimension line) that
 * draws itself when revealed. Pure decoration: aria-hidden, no text, no image asset.
 */
const d = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

export default function PlanDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className={`plan-draw ${className}`}>
      {/* dimension line with end ticks */}
      <path d="M20 14 H380 M20 8 V20 M380 8 V20 M200 10 V18" pathLength="1" stroke="var(--bv-muted)" strokeOpacity="0.45" strokeWidth="1" style={d(0)} />
      {/* outer walls, with a door opening on the bottom wall */}
      <path d="M20 36 H380 V244 H150 M104 244 H20 V36" pathLength="1" stroke="var(--bv-accent)" strokeWidth="2.25" style={d(150)} />
      {/* interior partition with an opening */}
      <path d="M240 36 V120 M240 164 V244" pathLength="1" stroke="var(--bv-accent)" strokeWidth="1.75" style={d(700)} />
      {/* door leaf and swing */}
      <path d="M104 244 V198 M104 198 A46 46 0 0 1 150 244" pathLength="1" stroke="var(--bv-ink)" strokeOpacity="0.55" strokeWidth="1" style={d(1000)} />
      {/* windows on the top wall */}
      <path d="M60 32 H130 M60 40 H130 M280 32 H350 M280 40 H350" pathLength="1" stroke="var(--bv-ink)" strokeOpacity="0.45" strokeWidth="1" style={d(1150)} />
      {/* kitchen island and a run of joinery */}
      <path d="M86 118 H182 V152 H86 Z M258 56 H362 V78 H258 Z M258 56 V78 M284 56 V78 M310 56 V78 M336 56 V78" pathLength="1" stroke="var(--bv-ink)" strokeOpacity="0.5" strokeWidth="1" style={d(1300)} />
      {/* dashed sight line through the space */}
      <path d="M40 200 C120 170 220 212 360 180" pathLength="1" stroke="var(--bv-accent)" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="0.012 0.012" className="plan-dash" style={d(1600)} />
    </svg>
  );
}
