"use client";

import { useState } from "react";

/** Q1 accordion (same pattern as service FAQ). Max five questions; no FAQPage markup (spec A4/A7). */
export default function ArticleFaq({ items, label }: { items: { q: string; a: string }[]; label: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section aria-label={label} className="mt-12 max-w-[720px] divide-y divide-bv-line border-y border-bv-line">
      {items.slice(0, 5).map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-[17px] font-medium text-bv-ink">{item.q}</span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-bv-accent/40 text-bv-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3.5 w-3.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className="overflow-hidden">
                <p className="pb-5 pr-12 text-[16px] leading-[1.65] text-bv-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
