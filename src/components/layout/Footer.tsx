import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getNavLinks } from "@/data/nav";

type IconProps = { size?: number; strokeWidth?: number };

const Facebook = ({ size = 16, strokeWidth = 1.75 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 16, strokeWidth = 1.75 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C4 16 2.7 12.9 3 9.8 4.6 11.4 7 12 9 12 6.8 9.8 6.3 6.7 8 4c2.4 2.8 5.8 4.5 9.4 4.7-.7-3 3-5.7 5.6-3.3 1.1 0 2-.7 2-.7-.2 1.1-.9 2-1.8 2.6.9-.1 1.7-.3 2.4-.7-.5.9-1.2 1.6-2.2 2.4z" />
  </svg>
);

const Youtube = ({ size = 16, strokeWidth = 1.75 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
    <path d="M10 9l5 3-5 3z" />
  </svg>
);

const Instagram = ({ size = 16, strokeWidth = 1.75 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", accent: true },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  const navLinks = getNavLinks(locale, {
    home: tNav("home"),
    projects: tNav("projects"),
    services: tNav("services"),
    why: tNav("why"),
    about: tNav("about"),
    contact: tNav("contact"),
  });

  return (
    <footer className="relative overflow-hidden border-t border-wood/30 bg-soft-black text-stone">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-6 hidden select-none font-serif text-[9rem] font-medium leading-none tracking-tight text-ivory/[0.025] lg:block xl:text-[11rem]"
      >
        G.A.G
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-wide text-ivory">
              G.A.G <span className="text-wood">Interiors</span>
            </Link>
            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-stone/80">
              {t("tagline")}
            </p>
            <div className="mt-6 h-px w-12 bg-wood" />
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-ivory">
              {t("quickLinks").toUpperCase()}
              <span className="mt-3 block h-px w-6 bg-wood" />
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-0 opacity-75 transition-all hover:gap-2 hover:text-wood hover:opacity-100"
                  >
                    <span aria-hidden className="w-0 overflow-hidden text-wood transition-all duration-200 group-hover:w-3">
                      &rarr;
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-ivory">
              {t("location").toUpperCase()}
              <span className="mt-3 block h-px w-6 bg-wood" />
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-stone/80">
              {t("locationAddress")}
              <br />
              {t("locationCity")}
            </p>

            <h3 className="mt-7 text-xs font-semibold tracking-[0.2em] text-ivory">{t("phoneLabel").toUpperCase()}</h3>
            <a
              href="tel:+971588099223"
              className="mt-3 block text-sm opacity-75 transition-opacity hover:text-wood hover:opacity-100"
            >
              +971 58 809 9223
            </a>

            <h3 className="mt-7 text-xs font-semibold tracking-[0.2em] text-ivory">{t("emailLabel").toUpperCase()}</h3>
            <a
              href="mailto:info@gaginteriors.com"
              className="mt-3 block text-sm opacity-75 transition-opacity hover:text-wood hover:opacity-100"
            >
              info@gaginteriors.com
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-ivory">
              {t("followUs").toUpperCase()}
              <span className="mt-3 block h-px w-6 bg-wood" />
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label, accent }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:-translate-y-1 hover:border-wood hover:bg-wood hover:text-ivory ${
                    accent
                      ? "border-wood bg-wood text-ivory"
                      : "border-white/15 bg-transparent text-stone"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>

            <p className="mt-7 max-w-[220px] text-xs leading-relaxed text-stone/60">
              {t("followText")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
