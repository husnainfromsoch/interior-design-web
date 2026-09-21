"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "bv-consent";

const buttonClass =
  "inline-flex h-[52px] flex-1 items-center justify-center rounded-full bg-bv-ink px-6 text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-bv-accent active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function CookieChoices() {
  const t = useTranslations("CookiesPage");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  function save(next: { analytics: boolean; marketing: boolean }) {
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, ...next }));
    } catch {
      // Storage unavailable: the choice applies to this visit only.
    }
    setSaved(true);
  }

  const rows = [
    { id: "necessary", checked: true, disabled: true, onChange: () => {} },
    { id: "analytics", checked: analytics, disabled: false, onChange: () => setAnalytics((v) => !v) },
    { id: "marketing", checked: marketing, disabled: false, onChange: () => setMarketing((v) => !v) },
  ];

  return (
    <div className="rounded-[20px] border border-bv-line bg-bv-surface p-7 sm:p-9">
      <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
        {t("choicesHeading")}
      </h2>
      <p className="mt-3 text-[16px] leading-[1.65] text-bv-muted">{t("choicesBody")}</p>

      <ul className="mt-6 divide-y divide-bv-line border-y border-bv-line">
        {rows.map((r) => (
          <li key={r.id} className="flex items-center justify-between gap-6 py-4">
            <label htmlFor={`consent-${r.id}`} className="text-[16px] font-medium text-bv-ink">
              {t(`${r.id}Title`)}
            </label>
            <input
              id={`consent-${r.id}`}
              type="checkbox"
              role="switch"
              checked={r.checked}
              disabled={r.disabled}
              onChange={r.onChange}
              className="h-6 w-11 cursor-pointer appearance-none rounded-full bg-bv-field-border/50 transition-colors duration-200 checked:bg-bv-accent disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none"
            />
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="button" className={buttonClass} onClick={() => save({ analytics: true, marketing: true })}>
          {t("acceptAll")}
        </button>
        <button type="button" className={buttonClass} onClick={() => save({ analytics: false, marketing: false })}>
          {t("rejectOptional")}
        </button>
        <button type="button" className={buttonClass} onClick={() => save({ analytics, marketing })}>
          {t("saveSettings")}
        </button>
      </div>

      <p role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] text-[14px] text-bv-accent">
        {saved ? t("saved") : ""}
      </p>
    </div>
  );
}
