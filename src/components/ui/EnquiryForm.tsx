"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { upload } from "@vercel/blob/client";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";
import { useContactSettings } from "@/components/cms/SiteSettingsProvider";
import { whatsappHref } from "@/lib/contact";

// Enquiry form F1 (Final Changes Sheet G5; texts: copy file, Global › Enquiry form F1).
// Two required fields, the rest optional, including "Plan or photos" (PDF, JPG or PNG,
// up to 5 files, 10 MB each). Files go straight to file storage (Vercel Blob), because a
// request body is limited to 4.5 MB; only their links travel with the enquiry. Success
// is shown only after the server returns a durable acceptance id. A honeypot field and
// the time since the form rendered are sent for the server's spam checks.

export type FormCopy = {
  heading: string;
  intro: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  services: { value: string; label: string }[];
  location: string;
  locations: { value: string; label: string }[];
  message: string;
  messagePlaceholder: string;
  files: string;
  filesHint: string;
  submit: string;
  whatsapp: string;
  note: string;
  noteLink: string;
  success: string;
  successButton: string;
  whatsappPrefill: string;
  errorRequired: string;
  errorPhone: string;
  errorFileType: string;
  errorFileSize: string;
  errorSending: string;
  nextSteps: string[];
  /** Photo beside the form on desktop: temporary, with its visible label, until a final image is supplied */
  image: { src: string; caption: string };
};

type Status = "idle" | "submitting" | "success" | "error" | "rateLimited";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const fieldClass =
  "t-body mt-2 h-[52px] w-full rounded-sm border border-bv-field-border bg-bv-white px-4 text-bv-ink transition-colors duration-200 placeholder:text-bv-muted aria-[invalid=true]:border-bv-error";
const buttonBase =
  "press btn-shine t-button inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-sm px-6 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink sm:w-auto sm:min-w-[200px]";

// Contact index beside the form: the footer's hairline rows, in ink on the surface panel.
const contactRow =
  "group flex min-h-[64px] items-center justify-between gap-6 border-b border-bv-ink/15 py-2 text-bv-ink transition-colors duration-200 hover:text-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink";
const contactRowText = "font-bv-heading text-[clamp(22px,2vw,28px)] leading-none";
const contactArrow = (
  <ArrowUpRight aria-hidden="true" strokeWidth={1.4} className="arrow-lift h-5 w-5 flex-none text-bv-ink/45 transition-colors group-hover:text-bv-accent" />
);

function makeIdempotencyKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: string }) {
  return (
    <label htmlFor={htmlFor} className="t-small flex flex-wrap items-baseline justify-between gap-x-3 text-bv-ink">
      <span>{children}</span>
      {optional && <span className="t-caption">{optional}</span>}
    </label>
  );
}

export default function EnquiryForm({
  id = "project-enquiry",
  copy,
  defaultService,
  leadSource,
  heading,
  intro,
  project,
  noHeading,
  hideNext,
}: {
  id?: string;
  /** F1 texts from the final copy (formCopy(locale) on the server) */
  copy: FormCopy;
  /** F1 service value preselected for this page (e.g. "villa") */
  defaultService?: string;
  leadSource?: string;
  /** Page-specific heading and intro (Insights article form) */
  heading?: string;
  intro?: string;
  /** Concept project context passed with the enquiry */
  project?: string;
  /** The page ends with its own CTA block, so the form follows without its H2 and intro (G13) */
  noHeading?: boolean;
  /** /contact shows its own "What happens next" (K03) instead of the form's */
  hideNext?: boolean;
}) {
  const t = useTranslations("EnquiryForm");
  const contact = useContactSettings();
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; files?: string }>({});
  const [files, setFiles] = useState<File[]>([]);
  const [idempotencyKey, setIdempotencyKey] = useState(() => makeIdempotencyKey());
  const startedAt = useRef<number>(0);
  const started = useRef(false);
  const rootRef = useRef<HTMLElement>(null);

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

  const waHref = whatsappHref(contact.whatsappNumber, copy.whatsappPrefill);

  function onFirstFocus() {
    if (started.current) return;
    started.current = true;
    trackEvent("enquiry_start", {});
  }

  function onFiles(list: FileList | null) {
    const picked = [...(list ?? [])];
    if (picked.some((f) => !FILE_TYPES.includes(f.type))) {
      setErrors((e) => ({ ...e, files: copy.errorFileType }));
      setFiles([]);
    } else if (picked.length > MAX_FILES || picked.some((f) => f.size > MAX_FILE_BYTES)) {
      setErrors((e) => ({ ...e, files: copy.errorFileSize }));
      setFiles([]);
    } else {
      setErrors((e) => ({ ...e, files: undefined }));
      setFiles(picked);
    }
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
    if (!name) nextErrors.name = copy.errorRequired;
    if (!phone) nextErrors.phone = copy.errorRequired;
    else if (!/^(\+|00)/.test(phone) || phone.replace(/[^\d]/g, "").length < 8) nextErrors.phone = copy.errorPhone;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t("errorEmail");
    if (errors.files) nextErrors.files = errors.files;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    trackEvent("enquiry_submit", {});

    try {
      const fileUrls: string[] = [];
      for (const file of files) {
        const blob = await upload(`enquiries/${file.name}`, file, { access: "public", handleUploadUrl: "/api/enquiry/upload" });
        fileUrls.push(blob.url);
      }

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
          files: fileUrls.length ? fileUrls : undefined,
          project,
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
      setFiles([]);
      form.reset();
    } catch {
      // Network loss or a failed upload: keep the values, allow a retry, never claim receipt.
      setStatus("error");
      trackEvent("enquiry_error", { reason: "network" });
    }
  }

  const error = (key: keyof typeof errors) =>
    errors[key] && (
      <p id={`${id}-${key}-error`} className="t-caption mt-1.5 text-bv-error">
        {errors[key]}
      </p>
    );

  const formOrSuccess =
    status === "success" ? (
      <div role="status" className="success-in rounded-lg bg-bv-background p-6 sm:p-8 lg:p-10">
        <div className="flex items-start gap-4">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="check-draw mt-0.5 h-7 w-7 flex-none text-bv-success">
            <path d="M4 12.5l5 5L20 6.5" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="max-w-[560px] text-[18px] leading-[1.65] text-bv-success">{copy.success}</p>
        </div>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { placement: "form_success" })}
          className={`${buttonBase} mt-6 bg-bv-accent text-bv-white hover:bg-bv-accent-hover`}
        >
          {copy.successButton}
        </a>
      </div>
    ) : (
      <form
        onSubmit={handleSubmit}
        onFocus={onFirstFocus}
        className="reveal sm:rounded-lg sm:bg-bv-background sm:p-8 lg:p-10"
        style={{ ["--reveal-delay" as string]: "120ms" } as React.CSSProperties}
        noValidate
        aria-busy={status === "submitting"}
      >
        <div className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor={`${id}-name`}>{copy.name}</Label>
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
              {error("name")}
            </div>
            <div>
              <Label htmlFor={`${id}-phone`}>{copy.phone}</Label>
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
              {error("phone")}
            </div>
          </div>

          <div>
            <Label htmlFor={`${id}-email`} optional={t("optional")}>
              {copy.email}
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
            {error("email")}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor={`${id}-service`} optional={t("optional")}>
                {copy.service}
              </Label>
              <select id={`${id}-service`} name="service" defaultValue={defaultService ?? ""} className={fieldClass}>
                <option value="">{t("servicePlaceholder")}</option>
                {copy.services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor={`${id}-location`} optional={t("optional")}>
                {copy.location}
              </Label>
              <select id={`${id}-location`} name="location" defaultValue="" className={fieldClass}>
                <option value="">{t("locationPlaceholder")}</option>
                {copy.locations.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor={`${id}-message`} optional={t("optional")}>
              {copy.message}
            </Label>
            <textarea
              id={`${id}-message`}
              name="message"
              maxLength={2000}
              rows={4}
              placeholder={copy.messagePlaceholder}
              className={`${fieldClass} h-auto resize-y py-3`}
            />
          </div>

          <div>
            <Label htmlFor={`${id}-files`} optional={t("optional")}>
              {copy.files}
            </Label>
            <input
              id={`${id}-files`}
              name="files"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              onChange={(e) => onFiles(e.target.files)}
              aria-invalid={Boolean(errors.files)}
              aria-describedby={`${id}-files-hint${errors.files ? ` ${id}-files-error` : ""}`}
              className="t-small mt-2 block w-full cursor-pointer rounded-sm border border-bv-field-border bg-bv-white text-bv-ink file:mr-4 file:h-[50px] file:cursor-pointer file:border-0 file:border-r file:border-bv-field-border file:bg-bv-surface file:px-4 file:text-[14px] file:font-semibold file:text-bv-ink aria-[invalid=true]:border-bv-error"
            />
            <p id={`${id}-files-hint`} className="t-caption mt-1.5">
              {copy.filesHint}
            </p>
            {error("files")}
          </div>

          {/* Honeypot: invisible to people, tempting to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={`${id}-website`}>Website</label>
            <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div aria-live="polite" className="empty:-mt-5">
            {status === "error" && <p className="t-small text-bv-error">{copy.errorSending}</p>}
            {status === "rateLimited" && <p className="t-small text-bv-error">{t("rateLimit")}</p>}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" disabled={status === "submitting"} data-magnetic className={`${buttonBase} bg-bv-accent text-bv-white hover:bg-bv-accent-hover disabled:opacity-60`}>
              {status === "submitting" && (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="spin h-4 w-4">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
              {status === "submitting" ? t("sending") : copy.submit}
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { placement: "form" })}
              className={`${buttonBase} border border-bv-ink text-bv-ink hover:bg-bv-ink hover:text-bv-white`}
            >
              {copy.whatsapp}
            </a>
          </div>

          <p className="t-caption">
            {copy.note}{" "}
            <Link href="/privacy" className="underline underline-offset-2 transition-colors duration-200 hover:text-bv-ink">
              {copy.noteLink}
            </Link>
          </p>
        </div>
      </form>
    );

  const next = !hideNext && (
    <ol className="grid gap-0 border-l border-bv-line">
      {copy.nextSteps.map((step, i) => (
        <li
          key={i}
          className="reveal relative grid grid-cols-[40px_1fr] items-baseline py-2.5 pl-5"
          style={{ ["--reveal-delay" as string]: `${200 + i * 110}ms` } as React.CSSProperties}
        >
          <span aria-hidden="true" className="absolute -left-px top-3 h-5 w-px bg-bv-accent" />
          <span className="font-bv-heading text-[20px] leading-none text-bv-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-[15px] leading-[1.55] text-bv-ink">{step}</span>
        </li>
      ))}
    </ol>
  );

  return (
    <section ref={rootRef} id={id} className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]" style={{ scrollMarginTop: "var(--header-h)" }}>
      {/* Same container as every Section, so the panel edges line up with the content above. */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
      <div className="relative grid w-full gap-10 overflow-hidden rounded-lg bg-bv-surface px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-12 lg:gap-12 lg:p-12 xl:p-14">
        {/* The form is far taller than the texts beside it, so on desktop the left column is
            composed top to bottom: texts at the top, a photo taking the height that is left,
            the contact index standing on the bottom edge. */}
        <div className="reveal relative flex flex-col lg:col-span-5">
          {!noHeading && (
            <>
              <h2 className="t-h2">{heading ?? copy.heading}</h2>
              <p className="t-body mt-4 max-w-[480px] text-bv-ink">{intro ?? copy.intro}</p>
            </>
          )}
          {next && <div className={noHeading ? "" : "mt-10"}>{next}</div>}
          <figure className={`m-0 hidden min-h-0 flex-1 flex-col lg:flex ${next || !noHeading ? "mt-10" : ""}`}>
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-lg bg-bv-line/40">
              <Image src={copy.image.src} alt="" fill sizes="(min-width: 1024px) 40vw, 1px" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-[12px] leading-[1.4] tracking-[0.04em] text-bv-muted">{copy.image.caption}</figcaption>
          </figure>
          <ul className={`enquiry-rows border-t border-bv-ink/15 lg:mt-8 ${next || !noHeading ? "mt-10" : ""}`}>
            <li>
              <a href={`tel:${contact.phoneE164}`} className={contactRow}>
                <span className={contactRowText}>{contact.phoneDisplay}</span>
                {contactArrow}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={contactRow}>
                <span className={`break-all ${contactRowText}`}>{contact.email}</span>
                {contactArrow}
              </a>
            </li>
          </ul>
        </div>
        <div className="relative lg:col-span-7">{formOrSuccess}</div>
      </div>
      </div>
    </section>
  );
}
