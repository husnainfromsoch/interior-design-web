"use client";

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
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <Link href="/" className="font-serif text-2xl tracking-wide text-charcoal lg:text-3xl">
          G.A.G <span className="text-wood">Interiors</span>
        </Link>

        <div className="hidden md:block">
          <SlideTabs tabs={navLinks} />
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <span className="flex gap-1.5 text-sm tracking-wider text-warm-grey">
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={locale === "en" ? "font-semibold text-charcoal" : "transition-colors hover:text-charcoal"}
            >
              EN
            </button>
            <span>&middot;</span>
            <button
              type="button"
              onClick={() => switchLocale("ru")}
              className={locale === "ru" ? "font-semibold text-charcoal" : "transition-colors hover:text-charcoal"}
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
