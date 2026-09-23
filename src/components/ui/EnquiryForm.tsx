"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "971588099223";

const SERVICE_VALUES = [
  "design",
  "landscape",
  "villa",
  "apartment",
  "commercial",
  "kitchens",
  "wardrobes",
  "joinery",
  "approvals",
  "mep",
  "procurement",
  "notSure",
] as const;

type Status = "idle" | "validating" | "sending" | "success" | "error" | "rateLimited";

const fieldClass =
  "mt-2 h-[56px] w-full rounded-[2px] border border-bv-field-border/50 bg-bv-surface/60 px-4 text-[16px] text-bv-ink outline-none transition-all duration-200 placeholder:text-bv-muted/60 hover:border-bv-field-border focus-visible:border-bv-accent focus-visible:bg-bv-white focus-visible:ring-4 focus-visible:ring-bv-accent/10 aria-[invalid=true]:border-bv-error";
const textareaClass =
  "mt-2 w-full resize-none rounded-[2px] border border-bv-field-border/50 bg-bv-surface/60 px-4 py-4 text-[16px] text-bv-ink outline-none transition-all duration-200 placeholder:text-bv-muted/60 hover:border-bv-field-border focus-visible:border-bv-accent focus-visible:bg-bv-white focus-visible:ring-4 focus-visible:ring-bv-accent/10";

function makeIdempotencyKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function EnquiryForm({
  id = "project-enquiry",
  defaultService,
  leadSource,
}: {
  id?: string;
  defaultService?: string;
  leadSource?: string;
}) {
  const t = useTranslations("EnquiryForm");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [idempotencyKey, setIdempotencyKey] = useState(() => makeIdempotencyKey());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = t("errorName");
    if (!phone || phone.replace(/[^\d]/g, "").length < 7) nextErrors.phone = t("errorPhone");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t("errorEmail");

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("validating");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          service: data.get("service") || undefined,
          location: data.get("location") || undefined,
          message: String(data.get("message") || "").trim() || undefined,
          locale,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });

      if (res.status === 429) {
        setStatus("rateLimited");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      if (leadSource) trackEvent("generate_lead", { source_page: leadSource });
      setIdempotencyKey(makeIdempotencyKey());
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-bv-surface px-4 py-16 sm:px-10 md:py-[96px] lg:px-16 lg:py-[128px]" style={{ scrollMarginTop: "104px" }}>
        <div
          id={id}
          className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5 rounded-none border border-bv-line bg-bv-background px-8 py-14 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bv-accent text-bv-white">
            <CheckCircle2 className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <p className="max-w-md text-[18px] leading-[1.65] text-bv-ink">{t("success")}</p>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="bg-bv-surface px-4 py-16 sm:px-10 md:py-[96px] lg:px-16 lg:py-[128px]" style={{ scrollMarginTop: "104px" }}>
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-none bg-bv-ink p-8 text-bv-white sm:p-10 lg:sticky lg:top-28 lg:p-12">
            <Image
              src="/visuals/PHOTO-2025-04-15-12-21-17(1).jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/95 via-bv-ink/75 to-bv-ink/55" />
            <div className="relative flex min-h-[420px] flex-col justify-end lg:min-h-[560px]">
              <span className="font-bv-body text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-white/80">
                {t("eyebrow")}
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-4 font-bv-heading text-[34px] font-medium leading-[1.1] sm:text-[40px] lg:text-[44px]">
                {t("heading")}
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-[1.65] text-bv-white/90">{t("body")}</p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-[52px] w-fit items-center gap-2 rounded-[2px] border border-bv-white/50 bg-bv-white/10 px-7 backdrop-blur-sm text-sm font-semibold tracking-[0.02em] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bv-white hover:text-bv-ink active:scale-[0.98] motion-reduce:transition-none"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
                </svg>
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-none border border-bv-line bg-bv-background p-6  sm:p-10 lg:col-span-7 lg:p-12"
          noValidate
          aria-busy={status === "sending"}
        >
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="ef-name" className="block text-[14px] font-medium text-bv-ink">
                {t("nameLabel")}
              </label>
              <input
                id="ef-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "ef-name-error" : undefined}
                className={fieldClass}
              />
              {errors.name && (
                <p id="ef-name-error" className="mt-1 text-[13px] text-bv-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="ef-phone" className="block text-[14px] font-medium text-bv-ink">
                {t("phoneLabel")}
              </label>
              <input
                id="ef-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "ef-phone-error" : undefined}
                placeholder="+971 5X XXX XXXX"
                className={fieldClass}
              />
              {errors.phone && (
                <p id="ef-phone-error" className="mt-1 text-[13px] text-bv-error">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="ef-email" className="block text-[14px] font-medium text-bv-ink">
                {t("emailLabel")}{" "}
                <span className="font-normal text-[13px] text-bv-muted">({t("optional")})</span>
              </label>
              <input
                id="ef-email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "ef-email-error" : undefined}
                className={fieldClass}
              />
              {errors.email && (
                <p id="ef-email-error" className="mt-1 text-[13px] text-bv-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ef-service" className="block text-[14px] font-medium text-bv-ink">
                  {t("serviceLabel")}{" "}
                  <span className="font-normal text-[13px] text-bv-muted">({t("optional")})</span>
                </label>
                <select id="ef-service" name="service" defaultValue={defaultService ?? ""} className={fieldClass}>
                  <option value="" disabled>
                    {t("servicePlaceholder")}
                  </option>
                  {SERVICE_VALUES.map((v) => (
                    <option key={v} value={v}>
                      {t(`service_${v}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ef-location" className="block text-[14px] font-medium text-bv-ink">
                  {t("locationLabel")}{" "}
                  <span className="font-normal text-[13px] text-bv-muted">({t("optional")})</span>
                </label>
                <select id="ef-location" name="location" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    {t("locationPlaceholder")}
                  </option>
                  <option value="dubai">{t("locationDubai")}</option>
                  <option value="abuDhabi">{t("locationAbuDhabi")}</option>
                  <option value="other">{t("locationOther")}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="ef-message" className="block text-[14px] font-medium text-bv-ink">
                {t("messageLabel")}{" "}
                <span className="font-normal text-[13px] text-bv-muted">({t("optional")})</span>
              </label>
              <textarea
                id="ef-message"
                name="message"
                maxLength={2000}
                rows={4}
                placeholder={t("messagePlaceholder")}
                className={textareaClass}
              />
            </div>

            {status === "error" && <p className="text-[14px] text-bv-error">{t("error")}</p>}
            {status === "rateLimited" && <p className="text-[14px] text-bv-error">{t("rateLimit")}</p>}

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-[56px] w-full items-center justify-center rounded-[2px] bg-bv-accent px-8 sm:w-auto sm:min-w-[220px] text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bv-accent-hover active:translate-y-0 active:duration-100 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {status === "sending" ? t("sending") : t("submit")}
              </button>
            </div>

            <p className="text-[13px] leading-[1.6] text-bv-muted">
              {t("privacyNote")}{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-bv-ink">
                {t("privacyLink")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
