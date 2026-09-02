"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getServices } from "@/data/services";

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const services = getServices(locale);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-stone/70 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wood";
  const labelClass = "text-xs font-semibold uppercase tracking-wide text-charcoal";

  if (submitted) {
    return (
      <p className="rounded-lg border border-stone/70 bg-white p-8 text-center text-warm-grey">
        {t("thankYou")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {t("fullName")} <span className="text-wood">*</span>
          </label>
          <input id="name" name="name" required placeholder={t("namePlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            {t("phone")} <span className="text-wood">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service">
            {t("service")} <span className="text-wood">*</span>
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t("selectService")}
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            {t("location")} <span className="text-wood">*</span>
          </label>
          <input id="location" name="location" required placeholder={t("locationPlaceholder")} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            {t("email")} <span className="normal-case text-warm-grey">{t("optional")}</span>
          </label>
          <input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="timeline">
            {t("timeline")} <span className="normal-case text-warm-grey">{t("optional")}</span>
          </label>
          <input id="timeline" name="timeline" placeholder={t("timelinePlaceholder")} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          {t("message")} <span className="normal-case text-warm-grey">{t("optional")}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex h-[52px] items-center gap-3 justify-self-start rounded-lg bg-charcoal pl-1.5 pr-6 text-xs font-semibold uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-wood"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ivory/10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 13L13 3M13 3H5M13 3V11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {t("submit")}
      </button>
    </form>
  );
}
