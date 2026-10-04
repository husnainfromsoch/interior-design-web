import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const links = [
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="bg-bv-background py-24 md:py-[120px] lg:py-[160px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <span className="t-eyebrow text-bv-accent">
          404
        </span>
        <h1 className="t-h1 mt-4 text-bv-ink">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl t-body text-bv-muted">{t("body")}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex h-[48px] items-center gap-2 rounded-sm border border-bv-field-border px-6 t-eyebrow text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
