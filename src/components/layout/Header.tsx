"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, getPathname, usePathname, useRouter } from "@/i18n/navigation";
import type { HeaderNav } from "@/components/final/navCopy";
import SocialIcons from "@/components/ui/SocialIcons";
import { trackEvent } from "@/lib/analytics";

// Header (Final Changes Sheet G1, G2). Desktop ≥ 1024 px: logo left · navigation centred
// on the page · "Discuss Your Project" right · EN / RU at the far right edge; sticky, and
// the sticky header keeps the button and EN / RU. The Services dropdown opens on hover
// and on click / Enter, closes on Esc. Below 1024 px: logo · EN / RU · Menu, with a
// full-screen menu (focus trap, scroll lock); the mobile bottom bar provides the button.

function Wordmark({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <Link href="/" aria-label={label} className="flex h-11 flex-none items-center gap-3">
      <Image src="/logos/mark-dark.png" alt="" width={205} height={205} priority className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="flex flex-col leading-none text-bv-ink">
        <span className="t-small uppercase tracking-[0.14em]">Bellvero</span>
        <span className="t-eyebrow mt-1 text-bv-muted">Group</span>
      </span>
    </Link>
  );
}

/** Scrolls to F1 on the current page when present; otherwise goes to the contact form. */
function useCta() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, after?: () => void) => {
    const form = document.getElementById("project-enquiry");
    if (!form) return; // follow the link to /contact#project-enquiry
    e.preventDefault();
    after?.();
    form.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#project-enquiry");
    form.querySelector<HTMLElement>("input, select, textarea")?.focus({ preventScroll: true });
  }, []);
}

function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const router = useRouter();
  const other = locale === "en" ? "ru" : "en";
  const href = getPathname({ href: pathname, locale: other });
  return (
    <div className="t-small flex items-center">
      <span aria-current="true" className="flex h-11 min-w-9 items-center justify-center text-bv-ink">
        {locale.toUpperCase()}
      </span>
      <span aria-hidden="true" className="text-bv-line">
        /
      </span>
      <a
        href={href}
        hrefLang={other}
        lang={other}
        aria-label={t("langSwitch").split(" / ")[0]}
        onClick={(e) => {
          // Keep the current page and its #anchor; never send the visitor home.
          e.preventDefault();
          trackEvent("language_switch", { to: other });
          router.replace(`${pathname}${window.location.search}${window.location.hash}`, { locale: other });
        }}
        className="flex h-11 min-w-9 items-center justify-center text-bv-muted transition-colors duration-200 hover:text-bv-ink"
      >
        {other.toUpperCase()}
      </a>
    </div>
  );
}

export default function Header({ nav }: { nav: HeaderNav }) {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const onCta = useCta();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesBtn = useRef<HTMLButtonElement>(null);
  const servicesItem = useRef<HTMLLIElement>(null);
  const servicesPanel = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();
  const menuId = useId();

  // Close both panels on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setServicesOpen(false);
    setMenuOpen(false);
  }

  // Hover: open at once, close after a short delay so the pointer can cross to the panel.
  const hoverOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Services dropdown: Escape and outside click close it.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        servicesBtn.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!servicesPanel.current?.contains(target) && !servicesItem.current?.contains(target)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [servicesOpen]);

  // Mobile panel: focus trap, scroll lock, Escape, focus returns to the trigger.
  useEffect(() => {
    if (!menuOpen) return;
    const trigger = menuBtn.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    menuPanel.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuPanel.current) return;
      const f = [...menuPanel.current.querySelectorAll<HTMLElement>("a[href], button, summary")].filter((el) => el.offsetParent !== null);
      if (f.length === 0) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const navLink = (active: boolean) =>
    `t-small flex h-11 items-center whitespace-nowrap transition-colors duration-200 ${active ? "text-bv-accent" : "text-bv-ink hover:text-bv-accent"}`;
  const ctaClass = "t-button inline-flex h-[48px] items-center justify-center whitespace-nowrap rounded-sm bg-bv-accent px-5 text-bv-white transition-colors duration-200 hover:bg-bv-accent-hover";

  return (
    <header className="sticky top-0 z-40 border-b border-bv-line bg-bv-background">
      <a href="#main-content" className="t-button sr-only z-50 rounded-sm bg-bv-ink px-4 py-3 text-bv-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        {t("skip")}
      </a>

      {/* Desktop: the 1fr / auto / 1fr grid keeps the navigation centred on the page */}
      <div className="mx-auto hidden h-[88px] w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-8 lg:grid xl:px-[60px]">
        <Wordmark label={t("logo")} />
        <nav aria-label={nav.mainLabel}>
          <ul className="flex items-center gap-5 xl:gap-8">
            <li ref={servicesItem} className="flex items-center" onMouseEnter={hoverOpen} onMouseLeave={hoverClose}>
              <Link href="/services" className={navLink(isActive("/services") || servicesOpen)}>
                {nav.servicesLabel}
              </Link>
              <button
                ref={servicesBtn}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={panelId}
                aria-label={`${nav.servicesLabel}: ${nav.allServices.label}`}
                onClick={() => setServicesOpen((o) => !o)}
                className="flex h-11 w-7 items-center justify-center text-bv-ink hover:text-bv-accent"
              >
                <svg viewBox="0 0 12 12" className={`h-3 w-3 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </li>
            {nav.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLink(isActive(item.href))} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <Link href="/contact#project-enquiry" onClick={(e) => onCta(e)} className={ctaClass}>
            {nav.ctaLabel}
          </Link>
          <LanguageSwitch />
        </div>
      </div>

      {/* Services dropdown: 4 groups + "All Services" */}
      <div
        ref={servicesPanel}
        id={panelId}
        data-open={servicesOpen}
        onMouseEnter={hoverOpen}
        onMouseLeave={hoverClose}
        className="dropdown-panel absolute inset-x-0 top-full hidden border-b border-bv-line bg-bv-background lg:block"
      >
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-4 gap-8 px-8 py-10 xl:px-[60px]">
          {nav.serviceGroups.map((g) => (
            <div key={g.label}>
              <p className="t-eyebrow text-bv-muted">{g.label}</p>
              <ul className="mt-3">
                {g.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="t-small flex min-h-11 items-center text-bv-ink transition-colors duration-200 hover:text-bv-accent">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full max-w-[1320px] border-t border-bv-line px-8 py-4 xl:px-[60px]">
          <Link href={nav.allServices.href} className="t-small inline-flex min-h-11 items-center gap-2 text-bv-accent transition-colors duration-200 hover:text-bv-accent-hover">
            {nav.allServices.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Tablet and mobile */}
      <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-8 lg:hidden">
        <Wordmark label={t("logo")} compact />
        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <button
            ref={menuBtn}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen(true)}
            className="t-button flex h-11 items-center justify-center rounded-sm border border-bv-line px-4 text-bv-ink transition-colors duration-200 hover:border-bv-ink"
          >
            {t("menuOpen")}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div ref={menuPanel} id={menuId} role="dialog" aria-modal="true" aria-label={t("menuOpen")} className="fixed inset-0 z-50 flex flex-col bg-bv-background lg:hidden">
          <div className="flex h-[72px] flex-none items-center justify-between border-b border-bv-line px-4 sm:px-8">
            <Wordmark label={t("logo")} compact />
            <button
              type="button"
              data-autofocus
              onClick={() => setMenuOpen(false)}
              className="t-button flex h-11 items-center justify-center rounded-sm border border-bv-line px-4 text-bv-ink"
            >
              {t("menuClose")}
            </button>
          </div>
          <nav aria-label={nav.mainLabel} className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-8">
            <details className="group border-b border-bv-line">
              <summary className="t-h3 flex min-h-[56px] cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                {nav.servicesLabel}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-bv-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" className="group-open:hidden" />
                </svg>
              </summary>
              <div className="pb-4">
                {nav.serviceGroups.map((g) => (
                  <div key={g.label} className="mt-3">
                    <p className="t-eyebrow text-bv-muted">{g.label}</p>
                    <ul className="mt-1">
                      {g.services.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} className="t-body flex min-h-11 items-center text-bv-ink">
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href={nav.allServices.href} className="t-small mt-3 flex min-h-11 items-center gap-2 text-bv-accent">
                  {nav.allServices.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </details>
            <ul>
              {nav.links.map((item) => (
                <li key={item.href} className="border-b border-bv-line">
                  <Link href={item.href} className="t-h3 flex min-h-[56px] items-center">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialIcons className="-ml-3 mt-4" />
          </nav>
          <div className="flex-none border-t border-bv-line px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4 sm:px-8">
            <Link href="/contact#project-enquiry" onClick={(e) => onCta(e, () => setMenuOpen(false))} className={`${ctaClass} w-full`}>
              {nav.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
