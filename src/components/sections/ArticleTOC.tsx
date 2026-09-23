"use client";

import { useEffect, useState } from "react";

export default function ArticleTOC({
  headings,
  label,
}: {
  headings: { id: string; text: string }[];
  label: string;
}) {
  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);

  useEffect(() => {
    if (headings.length < 3) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-120px 0px -70% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label={label} className="hidden lg:sticky lg:top-[120px] lg:block">
      <span className="block font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink">
        {label}
      </span>
      <ul className="mt-4 space-y-3">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block border-l-2 pl-3 text-[14px] leading-[1.4] transition-colors duration-200 ${
                  isActive ? "border-bv-accent text-bv-ink" : "border-transparent text-bv-muted hover:text-bv-ink"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ArticleTOCMobile({
  headings,
  label,
}: {
  headings: { id: string; text: string }[];
  label: string;
}) {
  if (headings.length < 3) return null;

  return (
    <details className="mb-8 border-y border-bv-line py-4 lg:hidden">
      <summary className="cursor-pointer font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink">
        {label}
      </summary>
      <ul className="mt-4 space-y-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="block text-[14px] text-bv-muted hover:text-bv-ink">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
