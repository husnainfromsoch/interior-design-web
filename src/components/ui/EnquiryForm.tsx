"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";
import { company, whatsappHref } from "@/data/company";
import { PACKAGE_EVENT } from "@/components/spec/PackageCta";

// Enquiry form F1 (spec §14.1, §8.4, §17.3). Six fields, two required. Success is shown
// only after the server returns a durable acceptance id. Submit and WhatsApp carry equal
// visual weight. A honeypot field and the time since the form rendered are sent for the
// server's spam checks (spec §20.1).

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

type Status = "idle" | "validating" | "submitting" | "success" | "error" | "rateLimited";

const fieldClass =
  "mt-2 h-[52px] w-full rounded-sm border border-bv-field-border bg-bv-white px-4 text-[16px] text-bv-ink outline-none transition-colors duration-200 placeholder:text-bv-muted/70 focus-visible:border-bv-ink focus-visible:ring-2 focus-visible:ring-bv-ink/20 aria-[invalid=true]:border-bv-error";
const textareaClass =
  "mt-2 w-full resize-y rounded-sm border border-bv-field-border bg-bv-white px-4 py-3 text-[16px] text-bv-ink outline-none transition-colors duration-200 placeholder:text-bv-muted/70 focus-visible:border-bv-ink focus-visible:ring-2 focus-visible:ring-bv-ink/20";
const buttonBase =
  "press btn-shine inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-sm px-6 text-[14px] font-semibold tracking-[0.02em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink sm:w-auto sm:min-w-[200px]";

function makeIdempotencyKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: string }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-wrap items-baseline justify-between gap-x-3 text-[16px] font-medium text-bv-ink lg:text-[15px]">
      <span>{children}</span>
      {optional && <span className="text-[13px] font-normal leading-5 text-[#6B625B]">{optional}</span>}
    </label>
  );
}

export default function EnquiryForm({
  id = "project-enquiry",
  defaultService,
  leadSource,
  heading,
  intro,
  topic,
  project,
  bare,
  framed,
}: {
  id?: string;
  /** F1 service value preselected for this page (e.g. "villa") */
  defaultService?: string;
  leadSource?: string;
  /** Page-specific heading (e.g. "Let's Discuss Your Villa", "Discuss a Similar Project") */
  heading?: string;
  intro?: string;
  /** Service or project name used in the WhatsApp prefill */
  topic?: string;
  /** Concept project context passed with the enquiry (spec CS09) */
  project?: string;
  /** Render only the form, for layouts that place their own heading (P21 Contact) */
  bare?: boolean;
  /**
   * Service-page layout: the form sits in its own panel across seven columns.
   * (Every variant shares its top gap with a preceding same-background section via bv-flow.)
   */
  framed?: boolean;
}) {
  const t = useTranslations("EnquiryForm");
  const tContact = useTranslations("ContactPage");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [idempotencyKey, setIdempotencyKey] = useState(() => makeIdempotencyKey());
  const startedAt = useRef<number>(0);
  const started = useRef(false);
  const rootRef = useRef<HTMLElement>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  // "?reason=aftercare" from the Warranty page CTA (spec WA04) preselects the aftercare context.
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => ""
  );
  const reasonContext = new URLSearchParams(search).get("reason") === "aftercare" ? t("reasonAftercare") : null;
  const context = selectedPackage ?? reasonContext;

  useEffect(() => {
    const onPackage = (e: Event) => setSelectedPackage((e as CustomEvent<string>).detail);
    window.addEventListener(PACKAGE_EVENT, onPackage);
    return () => window.removeEventListener(PACKAGE_EVENT, onPackage);
  }, []);

  useEffect(() => {
    startedAt.current = Date.now();
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("enquiry_view", {});
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const prefill = t("whatsappPrefill", { topic: topic ?? t("whatsappTopicDefault") });

  function onFirstFocus() {
    if (started.current) return;
    started.current = true;
    trackEvent("enquiry_start", {});
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

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
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    trackEvent("enquiry_submit", {});

    try {
      const params = new URLSearchParams(window.location.search);
      const utm = Object.fromEntries(
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
          .map((k) => [k, params.get(k)])
          .filter(([, v]) => v)
      );
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
          project: [project, context].filter(Boolean).join(" · ") || undefined,
          locale,
          sourcePage: window.location.pathname,
          referrer: document.referrer || undefined,
          utm: Object.keys(utm).length ? utm : undefined,
          website: String(data.get("website") || ""),
          elapsedMs: Date.now() - startedAt.current,
        }),
      });

      if (res.status === 429) {
        setStatus("rateLimited");
        trackEvent("enquiry_error", { reason: "rate_limited" });
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { enquiryId?: string };
      if (!res.ok || !body.enquiryId) {
        setStatus("error");
        trackEvent("enquiry_error", { reason: String(res.status) });
        return;
      }

      setStatus("success");
      trackEvent("enquiry_success", {});
      if (leadSource) trackEvent("generate_lead", { source_page: leadSource });
      setIdempotencyKey(makeIdempotencyKey());
      form.reset();
    } catch {
      // Network loss: keep the values, return to a state that allows retry, never claim receipt.
      setStatus("error");
      trackEvent("enquiry_error", { reason: "network" });
    }
  }

  const content = (
        status === "success" ? (
          <div role="status" className={
              framed
                ? "success-in flex items-start gap-4 self-start rounded-lg bg-bv-background p-6 sm:p-8 lg:col-span-7 lg:col-start-6 lg:p-10"
                : "success-in flex items-start gap-4 lg:col-span-6 lg:col-start-7"
            }>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="check-draw mt-0.5 h-7 w-7 flex-none text-bv-success">
              <path d="M4 12.5l5 5L20 6.5" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="max-w-[560px] text-[18px] leading-[1.65] text-bv-success">{t("success")}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            onFocus={onFirstFocus}
            className={
              framed
                ? "reveal sm:rounded-lg sm:bg-bv-background sm:p-8 lg:col-span-7 lg:col-start-6 lg:p-10"
                : "reveal max-w-[560px] lg:col-span-6 lg:col-start-7"
            }
            style={{ ["--reveal-delay" as string]: "120ms" } as React.CSSProperties}
            noValidate
            aria-busy={status === "submitting"}
          >
            <div className="flex flex-col gap-5">
              {context && (
                <p className="rounded-sm border border-bv-line bg-bv-background px-4 py-3 text-[15px] text-bv-ink">{context}</p>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`${id}-name`}>{t("nameLabel")}</Label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${id}-name-error` : undefined}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p id={`${id}-name-error`} className="mt-1.5 text-[14px] text-bv-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor={`${id}-phone`}>{t("phoneLabel")}</Label>
                  <input
                    id={`${id}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
                    placeholder="+971"
                    className={fieldClass}
                  />
                  {errors.phone && (
                    <p id={`${id}-phone-error`} className="mt-1.5 text-[14px] text-bv-error">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor={`${id}-email`} optional={t("optional")}>
                  {t("emailLabel")}
                </Label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${id}-email-error` : undefined}
                  className={fieldClass}
                />
                {errors.email && (
                  <p id={`${id}-email-error`} className="mt-1.5 text-[14px] text-bv-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`${id}-service`} optional={t("optional")}>
                    {t("serviceLabel")}
                  </Label>
                  <select id={`${id}-service`} name="service" defaultValue={defaultService ?? ""} className={fieldClass}>
                    <option value="">{t("servicePlaceholder")}</option>
                    {SERVICE_VALUES.map((v) => (
                      <option key={v} value={v}>
                        {t(`service_${v}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor={`${id}-location`} optional={t("optional")}>
                    {t("locationLabel")}
                  </Label>
                  <select id={`${id}-location`} name="location" defaultValue="" className={fieldClass}>
                    <option value="">{t("locationPlaceholder")}</option>
                    <option value="dubai">{t("locationDubai")}</option>
                    <option value="abuDhabi">{t("locationAbuDhabi")}</option>
                    <option value="other">{t("locationOther")}</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor={`${id}-message`} optional={t("optional")}>
                  {t("messageLabel")}
                </Label>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  maxLength={2000}
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className={textareaClass}
                />
              </div>

              {/* Honeypot: invisible to people, tempting to bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor={`${id}-website`}>Website</label>
                <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div aria-live="polite" className="empty:-mt-5">
                {status === "error" && <p className="text-[15px] text-bv-error">{t("error")}</p>}
                {status === "rateLimited" && <p className="text-[15px] text-bv-error">{t("rateLimit")}</p>}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-magnetic
                  className={`${buttonBase} bg-bv-accent text-bv-white hover:bg-bv-accent-hover disabled:opacity-60`}
                >
                  {status === "submitting" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="spin h-4 w-4">
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {status === "submitting" ? t("sending") : t("submit")}
                </button>
                <a
                  href={whatsappHref(prefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { placement: "form" })}
                  className={`${buttonBase} border border-bv-ink bg-transparent text-bv-ink hover:bg-bv-ink hover:text-bv-white`}
                >
                  {t("whatsapp")}
                </a>
              </div>

              <p className="text-[14px] leading-[1.6] text-bv-muted">
                {t("privacyNote")}{" "}
                <Link href="/privacy" className="underline underline-offset-2 transition-colors duration-200 hover:text-bv-ink">
                  {t("privacyLink")}
                </Link>
              </p>
            </div>
          </form>
        )
  );

  if (bare) {
    return (
      <div ref={rootRef as React.RefObject<HTMLDivElement>} id={id} className="scroll-mt-[88px] lg:scroll-mt-[104px]">
        {content}
      </div>
    );
  }

  return (
    <section
      ref={rootRef}
      id={id}
      className="bv-flow scroll-mt-[88px] bg-bv-background py-14 md:py-[72px] lg:scroll-mt-[104px] lg:py-[104px]"
    >
      {/* Same container as every Section, so the panel edges line up with the content above. */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
      <div
        className={`grid w-full gap-10 rounded-lg bg-bv-surface px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-12 lg:gap-0 ${framed ? "lg:p-12 xl:p-14" : "lg:p-16"}`}
      >
        <div className={`reveal flex flex-col lg:col-span-5 ${framed ? "lg:pr-12" : "lg:pr-4"}`}>
          <h2 className="font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink md:text-[40px] lg:text-[48px]">
            {heading ?? t("heading")}
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]">{intro ?? t("body")}</p>

          {/* What happens next (C-P21-K03) and direct contact lines, so the column carries
              the answer to "what do I get by sending this?" next to the form. */}
          <div className="mt-10 lg:mt-auto lg:pt-12">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{tContact("nextHeading")}</h3>
            <ol className="mt-5 grid gap-0 border-l border-bv-line">
              {(["nextStep1", "nextStep2", "nextStep3"] as const).map((k, i) => (
                <li
                  key={k}
                  className="reveal relative grid grid-cols-[40px_1fr] items-baseline py-2.5 pl-5"
                  style={{ ["--reveal-delay" as string]: `${200 + i * 110}ms` } as React.CSSProperties}
                >
                  <span aria-hidden="true" className="absolute -left-px top-3 h-5 w-px bg-bv-accent" />
                  <span className="font-bv-heading text-[20px] leading-none text-bv-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.55] text-bv-ink">{tContact(k)}</span>
                </li>
              ))}
            </ol>

            <dl className="mt-8 grid grid-cols-1 gap-x-6 border-t border-bv-line sm:grid-cols-2">
              <div className="border-b border-bv-line py-4">
                <dt className="text-[13px] text-bv-muted">{t("phoneLabel")}</dt>
                <dd className="m-0 mt-1">
                  <a
                    href={`tel:${company.phoneE164}`}
                    className="inline-flex min-h-11 items-center text-[16px] font-semibold text-bv-ink transition-colors duration-200 hover:text-bv-accent"
                  >
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="border-b border-bv-line py-4">
                <dt className="text-[13px] text-bv-muted">{t("emailLabel")}</dt>
                <dd className="m-0 mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex min-h-11 items-center break-all text-[16px] font-semibold text-bv-ink transition-colors duration-200 hover:text-bv-accent"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-bv-line py-4 sm:col-span-2">
                <dt className="text-[13px] text-bv-muted">{tContact("hoursLabel")}</dt>
                <dd className="m-0 mt-1 text-[15px] leading-[1.55] text-bv-ink">{tContact("hoursValue")}</dd>
              </div>
            </dl>
          </div>
        </div>

        {content}
      </div>
      </div>
    </section>
  );
}
