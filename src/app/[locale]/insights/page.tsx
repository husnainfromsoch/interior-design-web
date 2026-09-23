import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { localeAlternates, localeUrl, SITE_URL } from "@/lib/seo";
import EnquiryForm from "@/components/ui/EnquiryForm";
import InsightsHero from "@/components/sections/InsightsHero";
import InsightsTopicFilter from "@/components/sections/InsightsTopicFilter";
import { InsightsCard, InsightsFeaturedCard } from "@/components/sections/InsightsCard";
import {
  ARTICLES,
  AUTHOR,
  TOPICS,
  getArticlesByTopic,
  getFeaturedArticle,
  readingTime,
  topicName,
  type TopicSlug,
} from "@/data/insights";

const PAGE_SIZE = 9;

function formatDate(dateStr: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date(dateStr))
    .replace(/\s?г\.$/, "");
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ topic?: string; page?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { topic, page: pageParam } = await searchParams;
  const t = await getTranslations({ locale, namespace: "Insights" });

  const filtered = Boolean(topic && TOPICS.some((x) => x.slug === topic));
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const pageQuery = page > 1 && !filtered ? `?page=${page}` : "";

  // Suffix goes before the brand: "Renovation & Design Insights — Page 2 | Bellvero Group".
  const base = t("metaTitle");
  const title = page > 1 ? base.replace(/ \| /, ` ${t("pageSuffix", { n: page })} | `) : base;

  // Filtered views: canonical to /insights, noindex. Paginated pages: self canonical.
  const alternates = localeAlternates("/insights", locale);
  const canonical = filtered ? alternates.canonical : `${alternates.canonical}${pageQuery}`;
  const ogImage = `${SITE_URL}/visuals/ins-og-listing.jpg`;

  return {
    title,
    description: t("metaDescription"),
    alternates: { canonical, languages: alternates.languages },
    robots: filtered ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title, description: t("metaDescription"), url: canonical, type: "website", images: [{ url: ogImage, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description: t("metaDescription"), images: [ogImage] },
  };
}

export default async function InsightsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ topic?: string; page?: string }>;
}) {
  const { locale } = await params;
  const { topic: topicParam, page: pageParam } = await searchParams;
  setRequestLocale(locale);

  const t = await getTranslations("Insights");

  const activeTopic = TOPICS.find((t2) => t2.slug === topicParam)?.slug as TopicSlug | undefined;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const featured = !activeTopic && page === 1 ? getFeaturedArticle() : undefined;
  const pool = getArticlesByTopic(activeTopic).filter((a) => a.id !== featured?.id);

  const totalPages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const pageItems = pool.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toCardData(article: (typeof ARTICLES)[number]) {
    const content = locale === "ru" ? article.ru : article.en;
    return {
      href: `/insights/${article.slug}`,
      cover: article.cover,
      coverAlt: locale === "ru" ? article.coverAlt.ru : article.coverAlt.en,
      topicLabel: topicName(article.topic, locale),
      title: content.title,
      excerpt: content.excerpt,
      dateLabel: formatDate(article.publishedAt, locale),
      readingLabel: t("minRead", { n: readingTime(content.body) }),
      aiLabel: t("aiDisclosure"),
      authorLabel: AUTHOR.name,
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: t("h1"),
        description: t("metaDescription"),
        inLanguage: locale,
        url: localeUrl("/insights", locale),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: localeUrl("/", locale) },
          { "@type": "ListItem", position: 2, name: t("navLabel"), item: localeUrl("/insights", locale) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InsightsHero eyebrow={t("eyebrow")} heading={t("h1")} intro={t("intro")} />

      {featured && (
        <section className="bg-bv-background px-4 pb-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <InsightsFeaturedCard data={toCardData(featured)} label={t("featuredSr")} readMoreLabel={t("readArticle")} />
          </div>
        </section>
      )}

      <section className="bg-bv-background px-4 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <InsightsTopicFilter active={activeTopic} locale={locale} allLabel={t("all")} navLabel={t("topicsSr")} />
        </div>
      </section>

      <section className="bg-bv-background px-4 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          {pageItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((article) => (
                <InsightsCard key={article.id} data={toCardData(article)} />
              ))}
            </div>
          ) : (
            <div className="py-12">
              <p className="text-[17px] text-bv-ink">{t("emptyState")}</p>
              <Link href="/insights" className="mt-4 inline-block text-[15px] font-semibold text-bv-ink underline underline-offset-4 decoration-bv-accent">
                {t("viewAll")} →
              </Link>
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label={t("navLabel")} className="mt-16 flex items-center justify-center gap-6">
              {page > 1 ? (
                <Link href={{ pathname: "/insights", query: { ...(activeTopic ? { topic: activeTopic } : {}), page: page - 1 } }} className="text-[15px] font-medium text-bv-ink hover:text-bv-accent">
                  {t("prev")}
                </Link>
              ) : (
                <span className="text-[15px] font-medium text-bv-muted/40">{t("prev")}</span>
              )}

              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
                  n === page ? (
                    <span key={n} aria-current="page" aria-label={t("pageSr", { n })} className="text-[15px] font-semibold text-bv-ink">
                      {n}
                    </span>
                  ) : (
                    <Link key={n} href={{ pathname: "/insights", query: { ...(activeTopic ? { topic: activeTopic } : {}), page: n } }} aria-label={t("pageSr", { n })} className="text-[15px] text-bv-muted hover:text-bv-ink">
                      {n}
                    </Link>
                  )
                )}
              </div>

              {page < totalPages ? (
                <Link href={{ pathname: "/insights", query: { ...(activeTopic ? { topic: activeTopic } : {}), page: page + 1 } }} className="text-[15px] font-medium text-bv-ink hover:text-bv-accent">
                  {t("next")}
                </Link>
              ) : (
                <span className="text-[15px] font-medium text-bv-muted/40">{t("next")}</span>
              )}
            </nav>
          )}
        </div>
      </section>

      <EnquiryForm defaultService="notSure" leadSource="insights" />
    </>
  );
}
