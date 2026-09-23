import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import EnquiryForm from "@/components/ui/EnquiryForm";
import InsightsHero from "@/components/sections/InsightsHero";
import InsightsTopicFilter from "@/components/sections/InsightsTopicFilter";
import { InsightsCard, InsightsFeaturedCard } from "@/components/sections/InsightsCard";
import {
  ARTICLES,
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
  }).format(new Date(dateStr));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Insights" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: locale === "ru" ? "/ru/insights" : "/insights" },
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

  const featured = !activeTopic ? getFeaturedArticle() : undefined;
  const pool = getArticlesByTopic(activeTopic).filter((a) => a.id !== featured?.id);

  const totalPages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const pageItems = pool.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toCardData(article: (typeof ARTICLES)[number]) {
    const content = locale === "ru" ? article.ru : article.en;
    return {
      href: `/insights/${article.slug}`,
      cover: article.cover,
      topicLabel: topicName(article.topic, locale),
      title: content.title,
      excerpt: content.excerpt,
      dateLabel: formatDate(article.publishedAt, locale),
      readingLabel: t("minRead", { n: readingTime(content.body) }),
      aiLabel: t("aiDisclosure"),
    };
  }

  const totalCount = ARTICLES.length;
  const countLabel = `${String(totalCount).padStart(2, "0")} ${t("navLabel")}`;

  return (
    <>
      <InsightsHero eyebrow={t("eyebrow")} heading={t("h1")} intro={t("intro")} count={countLabel} />

      {featured && (
        <section className="bg-bv-background px-4 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <InsightsFeaturedCard data={toCardData(featured)} label={t("featuredSr")} readMoreLabel={t("readArticle")} />
          </div>
        </section>
      )}

      <section className="bg-bv-background px-4 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px] border-t border-bv-line pt-8">
          <InsightsTopicFilter active={activeTopic} locale={locale} allLabel={t("all")} />
        </div>
      </section>

      <section className="bg-bv-background px-4 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          {pageItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((article, i) => (
                <InsightsCard key={article.id} data={toCardData(article)} index={(page - 1) * PAGE_SIZE + i + 1} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-[17px] text-bv-muted">{t("emptyState")}</p>
              <Link href="/insights" className="mt-4 inline-block text-[15px] font-semibold text-bv-accent underline underline-offset-4">
                {t("viewAll")} →
              </Link>
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-16 flex items-center justify-center gap-6">
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
                    <span key={n} aria-current="page" className="text-[15px] font-semibold text-bv-ink">
                      {n}
                    </span>
                  ) : (
                    <Link key={n} href={{ pathname: "/insights", query: { ...(activeTopic ? { topic: activeTopic } : {}), page: n } }} className="text-[15px] text-bv-muted hover:text-bv-ink">
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

      <EnquiryForm />
    </>
  );
}
