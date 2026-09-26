import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { company, legalLine, whatsappHref } from "@/data/company";
import { sc } from "@/lib/spec";

// Spec §7.2 footer: one footer on every page, #F7F4EE with a 1 px top line, 72/56 px
// vertical padding. Wordmark and positioning line; Explore, Contact and Visits columns;
// bottom row © year · Warranty · Privacy Notice · Cookie Settings · legal entity line.
// No social icons (the company has none), no address or map (there is no office).
// Layout (2026-09-27 redesign, editorial minimal): brand, positioning line in display type
// and Explore on the left; a hairline divider; Contact as an index of full-width hairline
// rows (phone, WhatsApp, email) with hours and Visits beneath. Same copy, no new strings.

const headingClass = "text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-muted";
const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink rounded-sm";
const smallLink = `group inline-flex min-h-11 items-center lg:min-h-9 text-[13px] text-bv-muted transition-colors hover:text-bv-ink ${focusClass}`;
const rowClass = `row-hover group flex min-h-[46px] items-center justify-between gap-6 border-b border-bv-line py-1.5 text-bv-ink transition-colors hover:text-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink`;
// Motion: blocks reveal in sequence, link underlines draw in from the left on hover.
const col = (i: number) => ({ ["--reveal-delay" as string]: `${i * 90}ms` }) as CSSProperties;
const u = (text: ReactNode) => <span className="link-draw">{text}</span>;
const arrow = (
  <ArrowUpRight
    aria-hidden="true"
    className="arrow-lift h-5 w-5 flex-none text-bv-muted transition-colors group-hover:text-bv-accent"
    strokeWidth={1.4}
  />
);

export default async function Footer() {
  const locale = await getLocale();
  const ru = locale === "ru";
  const tNav = await getTranslations("Nav");
  const tInsights = await getTranslations("Insights");
  const tForm = await getTranslations("EnquiryForm");
  const f = (label: string) => sc("C-FOOTER", label, locale);
  const legal = legalLine(locale);

  // Spec §7.2 Explore column; Insights sits directly after Our Story (Insights spec A1).
  const explore = [
    { label: tNav("services"), href: "/services" },
    { label: tNav("projects"), href: "/projects" },
    { label: tNav("process"), href: "/process" },
    { label: ru ? "О компании" : "Our Story", href: "/about" },
    { label: tInsights("navLabel"), href: "/insights" },
    { label: tNav("contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t border-bv-line bg-bv-background pb-24 pt-10 lg:pb-4 lg:pt-10">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <div className="grid gap-y-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6 lg:pr-10">
            <div className="reveal" style={col(0)}>
              <Link
                href="/"
                aria-label={sc("UI", "a11y.logo", locale)}
                className={`inline-flex items-center gap-3 text-bv-ink ${focusClass}`}
              >
                <Image src="/logos/mark-dark.png" alt="" width={205} height={205} className="h-11 w-11" />
                <span className="flex flex-col leading-none">
                  <span className="tracking-settle font-bv-body text-[17px] font-medium uppercase tracking-[0.14em]">
                    Bellvero
                  </span>
                  <span className="mt-1 font-bv-body text-[10px] font-medium uppercase tracking-[0.22em] text-bv-muted">
                    Group
                  </span>
                </span>
              </Link>
              <p className="mt-4 max-w-[500px] text-balance font-bv-heading text-[clamp(20px,1.8vw,25px)] leading-[1.15] text-bv-ink">
                {f("Footer line")}
              </p>
            </div>

            <nav aria-label={ru ? "Разделы сайта" : "Explore"} className="reveal mt-6 lg:mt-auto lg:pt-6" style={col(1)}>
              <p className={headingClass}>{ru ? "Разделы" : "Explore"}</p>
              <ul className="mt-1 grid grid-cols-2 gap-x-8 sm:flex sm:flex-wrap sm:gap-x-6">
                {explore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group inline-flex min-h-11 items-center text-[15px] text-bv-ink transition-colors hover:text-bv-accent lg:min-h-9 ${focusClass}`}
                    >
                      {u(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="reveal lg:col-span-6 lg:border-l lg:border-bv-line lg:pl-12" style={col(2)}>
            <p className={headingClass}>{f("Contact heading")}</p>
            <ul className="mt-3 border-t border-bv-line">
              <li>
                <a href={`tel:${company.phoneE164}`} className={rowClass}>
                  <span className="font-bv-heading text-[clamp(20px,1.6vw,23px)] leading-none">{company.phoneDisplay}</span>
                  {arrow}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(tForm("whatsappPrefill", { topic: tForm("whatsappTopicDefault") }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <span className="font-bv-heading text-[clamp(20px,1.6vw,23px)] leading-none">WhatsApp</span>
                  {arrow}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className={rowClass}>
                  <span className="break-all font-bv-heading text-[clamp(19px,1.6vw,23px)] leading-none">{company.email}</span>
                  {arrow}
                </a>
              </li>
            </ul>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-10">
              <p className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-bv-muted">
                <Clock aria-hidden="true" className="mt-[3px] h-4 w-4 flex-none text-bv-accent" strokeWidth={1.5} />
                {f("Working hours")}
              </p>
              <div>
                <p className={headingClass}>{f("Visits heading")}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-bv-muted">{f("Visits line")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 flex flex-col gap-2 border-t border-bv-line pt-2 text-[13px] text-bv-muted lg:mt-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>{sc("UI", "footer.rights", locale).replace("{year}", String(new Date().getFullYear()))}</span>
            <Link href="/warranty" className={smallLink}>
              {u(sc("UI", "footer.warranty", locale))}
            </Link>
            <Link href="/privacy" className={smallLink}>
              {u(sc("UI", "footer.privacy", locale))}
            </Link>
            <Link href="/cookies" className={smallLink}>
              {u(sc("UI", "footer.cookie_settings", locale))}
            </Link>
          </div>
          {legal && <p>{legal}</p>}
        </div>
      </div>
    </footer>
  );
}
