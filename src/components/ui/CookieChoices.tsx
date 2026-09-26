"use client";

import { useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { consentSnapshot, readConsent, subscribeConsent, writeConsent } from "@/lib/consent";

// Cookie Settings page controls (spec §15.21). Same first-party consent record as the
// dialog; changing it takes effect immediately.

const buttonClass =
  "inline-flex h-[52px] items-center sm:flex-1 justify-center rounded-sm border border-bv-ink bg-bv-ink px-6 text-[14px] font-semibold tracking-[0.02em] text-bv-white transition-colors hover:border-bv-accent hover:bg-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink";

export default function CookieChoices() {
  const t = useTranslations("CookiesPage");
  const snapshot = useSyncExternalStore(subscribeConsent, consentSnapshot, () => "");
  const stored = snapshot ? readConsent() : null;
  const [draft, setDraft] = useState<{ analytics: boolean; marketing: boolean } | null>(null);
  const [saved, setSaved] = useState(false);
  const analytics = draft?.analytics ?? stored?.analytics ?? false;
  const marketing = draft?.marketing ?? stored?.marketing ?? false;

  function save(next: { analytics: boolean; marketing: boolean }) {
    writeConsent(next);
    setDraft(null);
    setSaved(true);
  }

  const rows = [
    { id: "necessary", checked: true, disabled: true, onChange: () => {} },
    { id: "analytics", checked: analytics, disabled: false, onChange: () => setDraft({ analytics: !analytics, marketing }) },
    { id: "marketing", checked: marketing, disabled: false, onChange: () => setDraft({ analytics, marketing: !marketing }) },
  ];

  return (
    <div className="rounded-lg bg-bv-surface p-6 sm:p-9">
      <h2 className="font-bv-heading text-[26px] font-medium leading-[1.18] text-bv-ink lg:text-[30px]">{t("choicesHeading")}</h2>
      <p className="mt-3 text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]">{t("choicesBody")}</p>

      <ul className="mt-6 divide-y divide-bv-line border-y border-bv-line">
        {rows.map((r) => (
          <li key={r.id} className="flex min-h-[56px] items-center justify-between gap-6 py-2">
            <label htmlFor={`consent-${r.id}`} className="text-[16px] font-medium text-bv-ink">
              {t(`${r.id}Title`)}
              {r.disabled && <span className="ml-2 text-[14px] font-normal text-bv-muted">{t("alwaysActive")}</span>}
            </label>
            <input
              id={`consent-${r.id}`}
              type="checkbox"
              role="switch"
              checked={r.checked}
              disabled={r.disabled}
              onChange={r.onChange}
              className="h-6 w-11 cursor-pointer appearance-none rounded-full bg-bv-field-border/50 transition-colors checked:bg-bv-accent disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink"
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

      <p role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] text-[14px] text-bv-success">
        {saved ? t("saved") : ""}
      </p>
    </div>
  );
}
