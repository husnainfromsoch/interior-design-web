"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ServiceFAQ as FAQItem } from "@/data/services";

export default function ServiceFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  const t = useTranslations("ServiceDetail");

  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-[820px] px-6 lg:px-8">
        <div className="reveal mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("frequentlyAsked")}
          </span>
          <h2 className="font-serif text-[28px] leading-snug sm:text-[34px]">
            {t("faqHeading")}
          </h2>
        </div>

        <div className="reveal divide-y divide-stone/70 border-y border-stone/70">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[15px] font-medium sm:text-base">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-wood/40 text-wood transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3.5 w-3.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-warm-grey">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
