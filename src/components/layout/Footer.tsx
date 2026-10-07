import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getSiteSettings } from "@/cms/data";
import CookieSettingsLink from "@/components/ui/CookieSettingsLink";
import SocialIcons from "@/components/ui/SocialIcons";
import { footerLinks } from "@/components/final/navCopy";
import { whatsappHref } from "@/lib/contact";
import { dots, g } from "@/lib/final";
import { sc } from "@/lib/spec";

// Footer: one footer on every page. Owner request 2026-10-08: it is a dark ink block
// (`.site-footer` in globals.css) so it closes the page instead of reading as one more
// cream section. Texts come from the final copy (Global › Footer): brand, tagline in
// display type and Explore on the left; a hairline divider; Contact as an index of
// full-width hairline rows (phone, WhatsApp, email) with hours, Visits and the social row
// (shown per filled link) beneath; then the oversized wordmark and the bottom row. The
// legal row stays hidden until the licence number is set in the CMS. Decoration: an accent
// rule drawn along the top edge, a line ornament turning slowly behind the left column
// and the header button repeated under the tagline (same label and target).

const headingClass = "text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-background/55";
const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-background rounded-sm";
const smallLink = `group inline-flex min-h-11 items-center lg:min-h-9 text-[13px] text-bv-background/60 transition-colors hover:text-bv-background ${focusClass}`;
const rowClass = `row-hover footer-row group flex min-h-[56px] items-center justify-between gap-6 border-b border-bv-background/15 py-2 text-bv-background transition-colors hover:text-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-background lg:min-h-[58px]`;
const rowText = "font-bv-heading text-[clamp(21px,1.8vw,26px)] leading-none";
// Motion: blocks reveal in sequence, link underlines draw in from the left on hover.
const col = (i: number) => ({ ["--reveal-delay" as string]: `${i * 90}ms` }) as CSSProperties;
const u = (text: ReactNode) => <span className="link-draw">{text}</span>;
const arrow = (
  <ArrowUpRight
    aria-hidden="true"
    className="arrow-lift h-5 w-5 flex-none text-bv-background/45 transition-colors group-hover:text-bv-accent"
    strokeWidth={1.4}
  />
);

export default async function Footer() {
  const locale = await getLocale();
  const f = (item: string) => g("footer", item, locale);
  const { contact, legal: legalEntity } = await getSiteSettings(locale);
  // Column 2: phone · WhatsApp · e-mail · working hours
  const hours = dots(f("Column 2")).at(-1);
  // Bottom row: © · Warranty · Privacy Notice · Cookie Settings
  const [rights, warranty, privacy, cookies] = dots(f("Bottom row"));
  const legal =
    legalEntity.licenceNumber && legalEntity.issuingAuthority
      ? f("Legal row *(hidden until licence number is set)*").replace("{licence_number}", legalEntity.licenceNumber).replace("{issuing_authority}", legalEntity.issuingAuthority)
      : null;
  const explore = footerLinks(locale);

  return (
    <footer className="site-footer relative overflow-hidden bg-bv-ink pb-24 pt-12 text-bv-background lg:pb-3 lg:pt-14">
      <span aria-hidden="true" className="footer-topline reveal-line absolute inset-x-0 top-0 h-[2px]" />
      <svg aria-hidden="true" viewBox="0 0 200 200" fill="none" className="footer-ornament">
        <circle cx="100" cy="100" r="98" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="40" />
        <rect x="30.7" y="30.7" width="138.6" height="138.6" />
        <rect x="30.7" y="30.7" width="138.6" height="138.6" transform="rotate(45 100 100)" />
        <rect x="50.5" y="50.5" width="99" height="99" transform="rotate(22.5 100 100)" />
        <rect x="50.5" y="50.5" width="99" height="99" transform="rotate(67.5 100 100)" />
        <path d="M100 2 V198 M2 100 H198" />
      </svg>
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <div className="grid gap-y-10 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6 lg:pr-14">
            <div className="reveal" style={col(0)}>
              <Link
                href="/"
                aria-label={sc("UI", "a11y.logo", locale)}
                className={`group inline-flex items-center gap-3 text-bv-background ${focusClass}`}
              >
                <Image src="/logos/mark-gold.png" alt="" width={205} height={205} className="h-12 w-12 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 motion-reduce:transform-none" />
                <span className="flex flex-col leading-none">
                  <span className="tracking-settle font-bv-body text-[17px] font-medium uppercase tracking-[0.14em]">
                    Bellvero
                  </span>
                  <span className="mt-1 font-bv-body text-[10px] font-medium uppercase tracking-[0.22em] text-bv-background/55">
                    Group
                  </span>
                </span>
              </Link>
              <p className="mt-6 max-w-[520px] text-balance font-bv-heading text-[clamp(24px,2.2vw,31px)] leading-[1.14] text-bv-background">
                {f("Tagline")}
              </p>
              <Link
                href="/contact#project-enquiry"
                data-magnetic
                className="press btn-shine group mt-7 hidden h-[52px] items-center gap-3 rounded-sm bg-[#98583F] px-7 text-[14px] font-semibold tracking-[0.02em] text-bv-white duration-200 hover:bg-bv-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-background sm:inline-flex"
              >
                {g("header", "Button", locale)}
                <ArrowRight aria-hidden="true" strokeWidth={2} className="arrow-nudge h-4 w-4 flex-none" />
              </Link>
            </div>

            <nav aria-label={f("Column 1 title")} className="reveal mt-8 lg:mt-auto lg:pt-9" style={col(1)}>
              <p className={headingClass}>{f("Column 1 title")}</p>
              <ul className="mt-2 grid grid-cols-2 gap-x-8 sm:flex sm:flex-wrap sm:gap-x-7">
                {explore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group inline-flex min-h-11 items-center text-[15px] text-bv-background/85 transition-colors hover:text-bv-accent lg:min-h-9 ${focusClass}`}
                    >
                      {u(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="reveal lg:col-span-6 lg:border-l lg:border-bv-background/15 lg:pl-14" style={col(2)}>
            <p className={headingClass}>{f("Column 2 title")}</p>
            <ul className="footer-rows mt-3 border-t border-bv-background/15">
              <li>
                <a href={`tel:${contact.phoneE164}`} className={rowClass}>
                  <span className={rowText}>{contact.phoneDisplay}</span>
                  {arrow}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(contact.whatsappNumber, g("f1", "WhatsApp prefilled text", locale))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <span className={rowText}>WhatsApp</span>
                  {arrow}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={rowClass}>
                  <span className={`break-all ${rowText}`}>{contact.email}</span>
                  {arrow}
                </a>
              </li>
            </ul>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-10">
              <p className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-bv-background/65">
                <Clock aria-hidden="true" className="mt-[3px] h-4 w-4 flex-none text-bv-accent" strokeWidth={1.5} />
                {hours}
              </p>
              <div>
                <p className={headingClass}>{f("Column 3 title")}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-bv-background/65">{f("Column 3")}</p>
                <SocialIcons light className="-ml-3 mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark: the brand name as the closing signature, decorative only.
            On hover a gradient runs through the letters (globals.css). */}
        <p aria-hidden="true" data-text="Bellvero" className="footer-wordmark reveal mt-8 select-none lg:mt-9">
          Bellvero
        </p>

        <div className="reveal flex flex-col gap-2 border-t border-bv-background/15 pt-3 text-[13px] text-bv-background/60 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>{rights}</span>
            <Link href="/warranty" className={smallLink}>
              {u(warranty)}
            </Link>
            <Link href="/privacy" className={smallLink}>
              {u(privacy)}
            </Link>
            <CookieSettingsLink href={locale === "ru" ? "/ru/cookies" : "/cookies"} className={smallLink}>
              {u(cookies)}
            </CookieSettingsLink>
          </div>
          {legal && <p>{legal}</p>}
        </div>
      </div>
    </footer>
  );
}
