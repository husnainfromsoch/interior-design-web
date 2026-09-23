import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getNavLinks } from "@/data/nav";
import BackToTop from "@/components/ui/BackToTop";

const contactPill =
  "btn-shine group inline-flex h-11 items-center gap-2.5 rounded-[2px] border border-bv-white/20 bg-bv-white/5 px-4 text-[13px] font-medium text-bv-white transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-accent hover:bg-bv-accent hover:text-bv-white motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  const tInsights = await getTranslations("Insights");

  const navLinks = getNavLinks(locale, {
    projects: tNav("projects"),
    services: tNav("services"),
    process: tNav("process"),
    about: tNav("about"),
    contact: tNav("contact"),
    insights: tInsights("navLabel"),
  });

  // Spec A1: Explore column, Insights directly after "Our Story" (About).
  const footerLinks = [...navLinks];
  const aboutIdx = footerLinks.findIndex((l) => l.href === "/about");
  footerLinks.splice(aboutIdx + 1, 0, { label: tInsights("navLabel"), href: "/insights" });

  return (
    <footer className="relative mt-16 overflow-hidden rounded-t-none bg-bv-ink text-bv-white/70 lg:mt-24 lg:rounded-t-none">
      <div className="relative mx-auto max-w-[1320px] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-14">
        {/* CTA banner */}
        <div className="reveal group/cta relative flex flex-col items-start gap-6 overflow-hidden rounded-none border border-bv-white/10 bg-bv-white/[0.06] px-7 py-8 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-bv-accent/25 blur-[80px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-125 motion-reduce:transition-none"
          />
          <div className="relative">
            <span className="font-bv-body text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("ctaTag")}
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-2 max-w-xl font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-white sm:text-[30px]">
              {t("ctaHeading")}
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-shine relative inline-flex h-[50px] flex-none items-center gap-2 rounded-[2px] bg-bv-accent px-7 text-sm font-semibold tracking-[0.02em] text-bv-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bv-accent-hover active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {t("ctaButton")}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover/cta:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 lg:grid-cols-[1.3fr_0.8fr_1.6fr] lg:gap-x-14 lg:py-12">
          <div className="reveal col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Bellvero Group" className="inline-block transition-opacity duration-200 hover:opacity-80">
              <Image src="/logos/logo-gold.png" alt="Bellvero Group" width={315} height={319} className="h-[84px] w-auto" />
            </Link>
            <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-bv-white/65">{t("tagline")}</p>
          </div>

          <div className="reveal" style={{ ["--reveal-delay" as string]: "80ms" }}>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-bv-white">{t("explore").toUpperCase()}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-0 text-bv-white/65 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:gap-2 hover:text-bv-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={{ ["--reveal-delay" as string]: "160ms" }}>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-bv-white">{t("contactHeading").toUpperCase()}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href="tel:+971588099223" className={contactPill}>
                <Phone className="h-4 w-4" strokeWidth={1.7} />
                +971 58 809 9223
              </a>
              <a href="https://wa.me/971588099223" target="_blank" rel="noopener noreferrer" className={contactPill}>
                <MessageCircle className="h-4 w-4" strokeWidth={1.7} />
                {t("whatsappLabel")}
              </a>
              <a href="mailto:info@bellverogroup.com" className={contactPill}>
                <Mail className="h-4 w-4" strokeWidth={1.7} />
                info@bellverogroup.com
              </a>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-bv-white/65">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-bv-accent" strokeWidth={1.7} />
                {t("hours")}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-bv-accent" strokeWidth={1.7} />
                <span className="max-w-[360px] leading-relaxed">{t("visitsText")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center gap-3 border-t border-bv-white/15 pb-24 pt-5 text-center min-[1100px]:pb-5 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-bv-white/65">{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-bv-white/65">
            <Link href="/warranty" className="underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-bv-accent hover:decoration-bv-accent">
              {t("warranty")}
            </Link>
            <Link href="/privacy" className="underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-bv-accent hover:decoration-bv-accent">
              {t("privacy")}
            </Link>
            <Link href="/cookies" className="underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-bv-accent hover:decoration-bv-accent">
              {t("cookies")}
            </Link>
            <BackToTop label="Back to top" />
          </div>
        </div>
      </div>
    </footer>
  );
}
