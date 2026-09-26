"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { OPEN_CONSENT_EVENT, consentSnapshot, readConsent, subscribeConsent, writeConsent } from "@/lib/consent";

// Spec §15.21 consent dialog: "Your Privacy Choices" with Accept All, Reject Optional
// and Settings at equal visual weight; stacked on mobile; always dismissible; never
// covers the enquiry form permanently. Categories: Necessary (always on), Analytics,
// Marketing (both off until chosen). Not a modal: the page stays usable behind it.

const button =
  "inline-flex h-[52px] items-center sm:flex-1 justify-center rounded-sm border border-bv-ink bg-bv-ink px-5 text-[14px] font-semibold text-bv-white transition-colors hover:bg-bv-accent hover:border-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink";

export default function ConsentBanner() {
  const t = useTranslations("CookiesPage");
  const titleId = useId();
  const snapshot = useSyncExternalStore(subscribeConsent, consentSnapshot, () => "server");
  const [reopened, setReopened] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const open = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setSettings(true);
      setReopened(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  // Hidden on the server and once a choice exists, unless reopened.
  const visible = snapshot !== "server" && (snapshot === "" || reopened);
  if (!visible) return null;

  const save = (choice: { analytics: boolean; marketing: boolean }) => {
    writeConsent(choice);
    setReopened(false);
    setSettings(false);
  };

  return (
    <section
      role="region"
      aria-labelledby={titleId}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-bv-line bg-bv-background px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-5 sm:px-8"
    >
      <div className="mx-auto max-h-[70svh] w-full max-w-[1320px] overflow-y-auto lg:px-[28px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-[640px]">
            <h2 id={titleId} className="font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink">
              {t("choicesHeading")}
            </h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-bv-ink">{t("choicesBody")}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[560px]">
            <button type="button" className={button} onClick={() => save({ analytics: true, marketing: true })}>
              {t("acceptAll")}
            </button>
            <button type="button" className={button} onClick={() => save({ analytics: false, marketing: false })}>
              {t("rejectOptional")}
            </button>
            <button type="button" className={button} aria-expanded={settings} onClick={() => setSettings((s) => !s)}>
              {t("settings")}
            </button>
          </div>
        </div>

        {settings && (
          <div className="mt-5 border-t border-bv-line pt-4">
            <ul className="divide-y divide-bv-line">
              {[
                { id: "necessary", checked: true, disabled: true, set: () => {} },
                { id: "analytics", checked: analytics, disabled: false, set: () => setAnalytics((v) => !v) },
                { id: "marketing", checked: marketing, disabled: false, set: () => setMarketing((v) => !v) },
              ].map((r) => (
                <li key={r.id} className="flex min-h-[52px] items-center justify-between gap-6">
                  <label htmlFor={`cb-${r.id}`} className="text-[15px] font-medium text-bv-ink">
                    {t(`${r.id}Title`)}
                    {r.disabled && <span className="ml-2 text-[13px] font-normal text-bv-muted">{t("alwaysActive")}</span>}
                  </label>
                  <input
                    id={`cb-${r.id}`}
                    type="checkbox"
                    role="switch"
                    checked={r.checked}
                    disabled={r.disabled}
                    onChange={r.set}
                    className="h-6 w-11 cursor-pointer appearance-none rounded-full bg-bv-field-border/50 transition-colors checked:bg-bv-accent disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink"
                  />
                </li>
              ))}
            </ul>
            <button type="button" className={`${button} mt-4 w-full sm:w-auto sm:flex-none`} onClick={() => save({ analytics, marketing })}>
              {t("saveSettings")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
