import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/insights";
import { services } from "@/data/services";
import { localeAlternates, localeUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/portfolio", "/process", "/about", "/contact", "/warranty", "/privacy", "/cookies", "/insights"];
  const servicePaths = [...new Set(services.map((s) => s.href))];

  const entry = (path: string, lastModified?: string) =>
    (["en", "ru"] as const).map((locale) => ({
      url: localeUrl(path, locale),
      ...(lastModified ? { lastModified } : {}),
      alternates: { languages: localeAlternates(path, locale).languages },
    }));

  return [
    ...[...staticPaths, ...servicePaths].flatMap((p) => entry(p)),
    // Every published article, both locales, lastmod = last_reviewed_at (spec A7).
    ...ARTICLES.flatMap((a) => entry(`/insights/${a.slug}`, a.lastReviewedAt)),
  ];
}
