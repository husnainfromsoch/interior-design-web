"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { getNavLinks } from "@/data/nav";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { PillDropdownNav } from "@/components/ui/pill-dropdown-nav";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navLinks = getNavLinks(locale, {
    home: t("home"),
    projects: t("projects"),
    services: t("services"),
    why: t("why"),
    about: t("about"),
    contact: t("contact"),
  });

  function switchLocale(next: "en" | "ru") {
    router.replace(pathname, { locale: next });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-stone/60 bg-ivory/90 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <Link
          href="/"
          className={`font-serif text-2xl tracking-wide transition-colors lg:text-3xl ${
            transparent ? "text-ivory" : "text-charcoal"
          }`}
        >
          G.A.G <span className={transparent ? "text-champagne" : "text-wood"}>Interiors</span>
        </Link>

        <div className="hidden md:block">
          <SlideTabs tabs={navLinks} />
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <span
            className={`flex gap-1.5 text-sm tracking-wider transition-colors ${
              transparent ? "text-ivory/70" : "text-warm-grey"
            }`}
          >
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={
                locale === "en"
                  ? `font-semibold ${transparent ? "text-ivory" : "text-charcoal"}`
                  : `transition-colors ${transparent ? "hover:text-ivory" : "hover:text-charcoal"}`
              }
            >
              EN
            </button>
            <span>&middot;</span>
            <button
              type="button"
              onClick={() => switchLocale("ru")}
              className={
                locale === "ru"
                  ? `font-semibold ${transparent ? "text-ivory" : "text-charcoal"}`
                  : `transition-colors ${transparent ? "hover:text-ivory" : "hover:text-charcoal"}`
              }
            >
              RU
            </button>
          </span>
          <Link
            href="/contact"
            className="rounded-full bg-wood px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-wood-dark"
          >
            {t("requestQuote")}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-full bg-wood px-5 py-2.5 text-sm font-semibold text-ivory"
          >
            {tCommon("getQuote")}
          </Link>
          <PillDropdownNav tabs={navLinks} locale={locale} onSwitchLocale={switchLocale} />
        </div>
      </nav>
    </header>
  );
}
