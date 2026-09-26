"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, getPathname, usePathname, useRouter } from "@/i18n/navigation";
import { NAV_GROUPS, SPECIALIST_SLUGS, serviceHref, getServicePage, type ServiceSlug } from "@/data/servicePages";
import { trackEvent } from "@/lib/analytics";

// Spec §7.1 header. Desktop ≥ 1100 px: 88 px, sticky, #F7F4EE with a 1 px bottom line;
// wordmark · Services Projects Our Process About Contact · EN / RU · primary CTA.
// The Services disclosure opens on click and keyboard (never hover alone), Escape
// closes it and returns focus. Mobile < 1100 px: 72 px, language switcher and Menu
// button, full-screen panel with focus trap, scroll lock and a pinned CTA.

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink";

function Wordmark({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className={`flex items-center gap-3 h-11 flex-none ${focusRing} rounded-sm`}
    >
      <Image src="/logos/mark-dark.png" alt="" width={205} height={205} priority className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="flex flex-col leading-none text-bv-ink">
        <span className={`font-bv-body font-medium uppercase tracking-[0.14em] ${compact ? "text-[15px]" : "text-[17px]"}`}>Bellvero</span>
        <span className="mt-1 font-bv-body text-[10px] font-medium uppercase tracking-[0.22em] text-bv-muted">Group</span>
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

function LanguageSwitch({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const router = useRouter();
  const other = locale === "en" ? "ru" : "en";
  const href = getPathname({ href: pathname, locale: other });
  return (
    <div className={`flex items-center gap-1 text-[14px] font-medium ${className ?? ""}`}>
      <span aria-current="true" className="flex h-11 items-center justify-center rounded-sm px-1.5 text-bv-ink min-[360px]:min-w-11 min-[360px]:px-0">
        {locale.toUpperCase()}
      </span>
      <span aria-hidden="true" className="text-bv-line max-[359px]:hidden">/</span>
      <a
        href={href}
        hrefLang={other}
        lang={other}
        aria-label={t("langSwitch").split(" / ")[0]}
        onClick={(e) => {
          // Keep the current page and its #anchor (spec §7.1); never send the visitor home.
          e.preventDefault();
          trackEvent("language_switch", { to: other });
          router.replace(`${pathname}${window.location.search}${window.location.hash}`, { locale: other });
        }}
        className={`flex h-11 min-w-11 items-center justify-center rounded-sm text-bv-muted transition-colors hover:text-bv-ink ${focusRing}`}
      >
        {other.toUpperCase()}
      </a>
    </div>
  );
}

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");
  const onCta = useCta();
  const lang = locale === "ru" ? "ru" : "en";

  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesBtn = useRef<HTMLButtonElement>(null);
  const servicesPanel = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const menuId = useId();

  const title = (slug: ServiceSlug) => getServicePage(slug)!.title[lang];

  // Close both panels on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setServicesOpen(false);
    setMenuOpen(false);
  }

  // Services disclosure: Escape and outside click close it.
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
      if (!servicesPanel.current?.contains(target) && !servicesBtn.current?.contains(target)) setServicesOpen(false);
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

  const primaryItems = [
    { label: t("projects"), href: "/projects" },
    { label: t("process"), href: "/process" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const navLink = (active: boolean) =>
    `nav-underline flex h-11 items-center whitespace-nowrap rounded-sm px-1 text-[14px] font-medium leading-5 transition-colors ${
      active ? "text-bv-accent" : "text-bv-ink hover:text-bv-accent"
    } ${focusRing}`;
  const ctaClass = `press btn-shine inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-sm bg-bv-accent px-5 text-[14px] font-semibold tracking-[0.02em] text-bv-white duration-200 hover:bg-bv-accent-hover ${focusRing}`;

  return (
    <header className="sticky top-0 z-40 border-b border-bv-line bg-bv-background">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-sm bg-bv-ink px-4 py-3 text-[14px] font-semibold text-bv-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {t("skip")}
      </a>

      {/* Desktop */}
      <div className="mx-auto hidden h-[88px] w-full max-w-[1320px] items-center justify-between gap-4 px-[40px] min-[1100px]:flex xl:gap-6 xl:px-[60px]">
        <Wordmark label={t("logo")} />
        <nav aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
          <ul className="flex items-center gap-4 xl:gap-6">
            <li className="flex items-center">
              <Link href="/services" className={navLink(isActive("/services"))} data-active={servicesOpen || undefined}>
                {t("services")}
              </Link>
              <button
                ref={servicesBtn}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={panelId}
                aria-label={`${t("services")}: ${t("allServices")}`}
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex h-11 w-8 items-center justify-center rounded-sm text-bv-ink hover:text-bv-accent ${focusRing}`}
              >
                <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </li>
            {primaryItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLink(isActive(item.href))} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitch />
          <Link href="/contact#project-enquiry" onClick={(e) => onCta(e)} className={ctaClass} data-magnetic>
            {tCommon("requestQuote")}
          </Link>
        </div>
      </div>

      {/* Services panel */}
      <div
        ref={servicesPanel}
        id={panelId}
        data-open={servicesOpen}
        className="dropdown-panel absolute inset-x-0 top-full hidden border-b border-bv-line bg-bv-background min-[1100px]:block"
      >
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-4 gap-8 px-[40px] py-10 xl:px-[60px]">
          {NAV_GROUPS.map((g, gi) => (
            <div key={g.id} className="stagger-item" style={{ ["--i" as string]: gi } as React.CSSProperties}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{g.label[lang]}</p>
              <ul className="mt-3 space-y-1">
                {g.slugs.map((s) => (
                  <li key={s}>
                    <Link href={serviceHref(s)} className={`flex min-h-11 items-center rounded-sm text-[15px] font-medium text-bv-ink transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-bv-accent ${focusRing}`}>
                      {title(s)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="stagger-item mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-6 border-t border-bv-line px-[40px] py-6 xl:px-[60px]"
          style={{ ["--i" as string]: NAV_GROUPS.length } as React.CSSProperties}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{t("specialist")}</span>
            {SPECIALIST_SLUGS.map((s) => (
              <Link key={s} href={serviceHref(s)} className={`flex min-h-11 items-center rounded-sm text-[15px] font-medium text-bv-ink hover:text-bv-accent ${focusRing}`}>
                {title(s)}
              </Link>
            ))}
          </div>
          <Link href="/services" className={`group flex min-h-11 items-center gap-1.5 rounded-sm text-[15px] font-semibold text-bv-accent ${focusRing}`}>
            <span className="link-draw">{t("allServices")}</span> <span aria-hidden="true" className="arrow-nudge">→</span>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-[60px] min-[1100px]:hidden">
        <Wordmark label={t("logo")} compact />
        <div className="flex items-center gap-1">
          <LanguageSwitch />
          <button
            ref={menuBtn}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen(true)}
            className={`press flex h-11 min-w-11 items-center justify-center rounded-sm border border-bv-line px-3 text-[14px] min-[360px]:px-4 font-semibold text-bv-ink duration-200 hover:border-bv-ink ${focusRing}`}
          >
            {t("menuOpen")}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          ref={menuPanel}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label={t("menuOpen")}
          className="menu-enter fixed inset-0 z-50 flex flex-col bg-bv-background min-[1100px]:hidden"
        >
          <div className="flex h-[72px] flex-none items-center justify-between border-b border-bv-line px-4 sm:px-8">
            <Wordmark label={t("logo")} compact />
            <button
              type="button"
              data-autofocus
              onClick={() => setMenuOpen(false)}
              className={`press flex h-11 min-w-11 items-center justify-center rounded-sm border border-bv-line px-4 text-[14px] font-semibold text-bv-ink duration-200 ${focusRing}`}
            >
              {t("menuClose")}
            </button>
          </div>
          <nav aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"} className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-8">
            <details className="menu-item-in group border-b border-bv-line" style={{ ["--i" as string]: 0 } as React.CSSProperties}>
              <summary className={`flex min-h-[56px] cursor-pointer list-none items-center justify-between text-[20px] font-medium text-bv-ink [&::-webkit-details-marker]:hidden ${focusRing}`}>
                {t("services")}
                <span aria-hidden="true" className="text-bv-accent transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="pb-4">
                {[...NAV_GROUPS.map((g) => ({ label: g.label[lang], slugs: g.slugs })), { label: t("specialist"), slugs: SPECIALIST_SLUGS }].map((g) => (
                  <div key={g.label} className="mt-3">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{g.label}</p>
                    <ul className="mt-1">
                      {g.slugs.map((s) => (
                        <li key={s}>
                          <Link href={serviceHref(s)} className={`flex min-h-11 items-center text-[16px] text-bv-ink ${focusRing}`}>
                            {title(s)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/services" className={`mt-3 flex min-h-11 items-center gap-1.5 text-[16px] font-semibold text-bv-accent ${focusRing}`}>
                  {t("allServices")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </details>
            <ul>
              {primaryItems.map((item, i) => (
                <li key={item.href} className="menu-item-in border-b border-bv-line" style={{ ["--i" as string]: i + 1 } as React.CSSProperties}>
                  <Link href={item.href} className={`flex min-h-[56px] items-center text-[20px] font-medium text-bv-ink ${focusRing}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="menu-item-in flex-none border-t border-bv-line px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4 sm:px-8"
            style={{ ["--i" as string]: primaryItems.length + 1 } as React.CSSProperties}
          >
            <Link href="/contact#project-enquiry" onClick={(e) => onCta(e, () => setMenuOpen(false))} className={`${ctaClass} w-full`}>
              {tCommon("requestQuote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
