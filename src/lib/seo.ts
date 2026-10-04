export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bellvero.com").replace(/\/$/, "");

/** Absolute URL for a locale-neutral path ("/insights"); English has no prefix. */
export function localeUrl(path: string, locale: string) {
  const p = path === "/" ? "" : path;
  return `${SITE_URL}${locale === "ru" ? `/ru${p}` : p || "/"}`;
}

/** Self canonical + reciprocal hreflang (en, ru, x-default = en). */
export function localeAlternates(path: string, locale: string) {
  return {
    canonical: localeUrl(path, locale),
    languages: {
      en: localeUrl(path, "en"),
      ru: localeUrl(path, "ru"),
      "x-default": localeUrl(path, "en"),
    },
  };
}

/**
 * Page metadata from the final copy's meta table (Changes Sheet G10): the title is used as
 * written, with no suffix added by a template, plus canonical and hreflang (G9).
 */
export function pageMetadata(meta: { title: string; description: string }, path: string, locale: string) {
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: localeAlternates(path, locale),
  };
}
