import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSiteSettings } from "@/cms/data";
import CookieSettingsLink from "@/components/ui/CookieSettingsLink";
import SocialIcons from "@/components/ui/SocialIcons";
import { footerLinks } from "@/components/final/navCopy";
import { whatsappHref } from "@/lib/contact";
import { dots, g } from "@/lib/final";
import { sc } from "@/lib/spec";

// Footer (Final Changes Sheet G3; texts: copy file, Global › Footer). All text in Manrope,
// Small style; the logo is the only brand element. Tagline, Explore / Contact / Visits
// columns, the social row (G4), the bottom row, and the legal row, which stays hidden
// until the licence number is set in the CMS.

const heading = "t-eyebrow text-bv-muted";
const link = "t-small inline-flex min-h-11 items-center text-bv-ink transition-colors duration-200 hover:text-bv-accent lg:min-h-9";

export default async function Footer() {
  const locale = await getLocale();
  const f = (item: string) => g("footer", item, locale);
  const { contact, legal } = await getSiteSettings(locale);
  // Column 2: phone · WhatsApp · e-mail · working hours
  const hours = dots(f("Column 2")).at(-1);
  // Bottom row: © · Warranty · Privacy Notice · Cookie Settings
  const [rights, warranty, privacy, cookies] = dots(f("Bottom row"));
  const legalRow =
    legal.licenceNumber && legal.issuingAuthority
      ? f("Legal row *(hidden until licence number is set)*").replace("{licence_number}", legal.licenceNumber).replace("{issuing_authority}", legal.issuingAuthority)
      : null;

  return (
    <footer className="border-t border-bv-line bg-bv-background pb-28 pt-12 lg:pb-8 lg:pt-16">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label={sc("UI", "a11y.logo", locale)} className="inline-flex items-center gap-3 text-bv-ink">
              <Image src="/logos/mark-dark.png" alt="" width={205} height={205} className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="t-small uppercase tracking-[0.14em]">Bellvero</span>
                <span className="t-eyebrow mt-1 text-bv-muted">Group</span>
              </span>
            </Link>
            <p className="t-small mt-5 max-w-[360px] text-bv-muted">{f("Tagline")}</p>
          </div>

          <nav aria-label={f("Column 1 title")} className="lg:col-span-2">
            <p className={heading}>{f("Column 1 title")}</p>
            <ul className="mt-2">
              {footerLinks(locale).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className={heading}>{f("Column 2 title")}</p>
            <ul className="mt-2">
              <li>
                <a href={`tel:${contact.phoneE164}`} className={link}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappHref(contact.whatsappNumber, g("f1", "WhatsApp prefilled text", locale))} target="_blank" rel="noopener noreferrer" className={link}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </li>
              <li className="t-small mt-2 text-bv-muted">{hours}</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className={heading}>{f("Column 3 title")}</p>
            <p className="t-small mt-4 text-bv-muted">{f("Column 3")}</p>
            <SocialIcons className="-ml-3 mt-4" />
          </div>
        </div>

        <div className="t-small mt-10 flex flex-wrap items-center gap-x-6 border-t border-bv-line pt-4 text-bv-muted">
          <span>{rights}</span>
          <Link href="/warranty" className={`${link} text-bv-muted`}>
            {warranty}
          </Link>
          <Link href="/privacy" className={`${link} text-bv-muted`}>
            {privacy}
          </Link>
          <CookieSettingsLink href={locale === "ru" ? "/ru/cookies" : "/cookies"} className={`${link} text-bv-muted`}>
            {cookies}
          </CookieSettingsLink>
        </div>
        {legalRow && <p className="t-small mt-2 text-bv-muted">{legalRow}</p>}
      </div>
    </footer>
  );
}
