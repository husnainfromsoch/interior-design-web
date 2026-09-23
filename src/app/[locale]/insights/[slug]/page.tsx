import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { localeAlternates, localeUrl, SITE_URL } from "@/lib/seo";
import ArticleFaq from "@/components/sections/ArticleFaq";
import ArticleTracker from "@/components/sections/ArticleTracker";
import CopyLinkButton from "@/components/sections/CopyLinkButton";
import EnquiryForm from "@/components/ui/EnquiryForm";
import ArticleBody, { articleHeadings } from "@/components/sections/ArticleBody";
import ArticleTOC, { ArticleTOCMobile } from "@/components/sections/ArticleTOC";
import InsightsAuthorBox from "@/components/sections/InsightsAuthorBox";
import { InsightsCard } from "@/components/sections/InsightsCard";
import {
  ARTICLES,
  AUTHOR,
  formServiceFor,
  getArticle,
  getRelatedArticles,
  getRelatedServices,
  readingTime,
  topicName,
} from "@/data/insights";
import { routing } from "@/i18n/routing";

function formatDate(dateStr: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date(dateStr))
    .replace(/\s?г\.$/, "");
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => ARTICLES.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const content = locale === "ru" ? article.ru : article.en;
  const alternates = localeAlternates(`/insights/${article.slug}`, locale);
  const image = `${SITE_URL}${article.cover}`;
  return {
    title: content.seoTitle,
    description: content.metaDescription,
    alternates,
    robots: { index: true, follow: true },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url: alternates.canonical,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.lastReviewedAt,
      images: [{ url: image, width: 1200, height: 630, alt: locale === "ru" ? article.coverAlt.ru : article.coverAlt.en }],
    },
    twitter: { card: "summary_large_image", title: content.seoTitle, description: content.metaDescription, images: [image] },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations("Insights");
  const content = locale === "ru" ? article.ru : article.en;
  const headings = articleHeadings(content.body);
  const relatedServices = getRelatedServices(article, locale);
  const relatedArticles = getRelatedArticles(article);

  const authorRole = locale === "ru" ? AUTHOR.role.ru : AUTHOR.role.en;
  const coverAlt = locale === "ru" ? article.coverAlt.ru : article.coverAlt.en;
  const pageUrl = localeUrl(`/insights/${article.slug}`, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: content.title,
        description: content.metaDescription,
        image: `${SITE_URL}${article.cover}`,
        datePublished: article.publishedAt,
        dateModified: article.lastReviewedAt,
        inLanguage: locale,
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Person",
          name: AUTHOR.name,
          jobTitle: AUTHOR.role.en,
          worksFor: { "@type": "Organization", name: "Bellvero Group" },
          url: `${localeUrl("/about", locale)}#leadership`,
        },
        publisher: {
          "@type": "Organization",
          name: "Bellvero Group",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-gold.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: localeUrl("/", locale) },
          { "@type": "ListItem", position: 2, name: t("navLabel"), item: localeUrl("/insights", locale) },
          {
            "@type": "ListItem",
            position: 3,
            name: topicName(article.topic, locale),
            item: `${localeUrl("/insights", locale)}?topic=${article.topic}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleTracker articleId={article.id} locale={locale} />
      <div className="bg-bv-background px-4 pt-8 sm:px-10 lg:px-16 lg:pt-10">
        <div className="mx-auto max-w-[1320px]">
          <nav aria-label="Breadcrumb" className="text-[13px] text-bv-muted">
            <Link href="/" className="hover:text-bv-ink">
              {t("breadcrumbHome")}
            </Link>
            {" › "}
            <Link href="/insights" className="hover:text-bv-ink">
              {t("navLabel")}
            </Link>
            {" › "}
            <Link href={{ pathname: "/insights", query: { topic: article.topic } }} className="hover:text-bv-ink">
              {topicName(article.topic, locale)}
            </Link>
          </nav>

          <div className="mt-8 max-w-[880px]">
            <span className="font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-accent">
              {topicName(article.topic, locale)}
            </span>
            <h1
              className={`mt-4 font-bv-heading font-medium leading-[1.1] text-bv-ink ${
                content.title.length > 70
                  ? "text-[34px] sm:text-[44px] lg:text-[52px]"
                  : "text-[38px] sm:text-[52px] lg:text-[64px]"
              }`}
            >
              {content.title}
            </h1>
            <p className="mt-6 text-[18px] leading-[1.6] text-bv-ink sm:text-[19px] lg:text-[20px]">{content.standfirst}</p>

            <div className="mt-6 flex items-center gap-4">
              {AUTHOR.photo && (
                <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full">
                  <Image src={AUTHOR.photo} alt={AUTHOR.name} fill sizes="48px" className="object-cover" />
                </div>
              )}
              <div>
                <Link href="#author" className="font-bv-body text-[15px] font-semibold text-bv-ink hover:text-bv-accent">
                  {AUTHOR.name}
                </Link>
                <p className="text-[14px] text-bv-muted">{authorRole}</p>
                <p className="mt-0.5 text-[13px] text-bv-muted">
                  {t("published", { date: formatDate(article.publishedAt, locale) })} ·{" "}
                  {t("lastReviewed", { date: formatDate(article.lastReviewedAt, locale) })} ·{" "}
                  {t("minRead", { n: readingTime(content.body) })}
                  {" · "}
                  <CopyLinkButton label={t("copyLink")} copiedLabel={t("linkCopied")} title={content.title} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bv-background px-4 py-10 sm:px-10 lg:px-16">
        <figure data-article-cover className="mx-auto max-w-[1320px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <Image src={article.cover} alt={coverAlt} fill priority sizes="(min-width: 1320px) 1320px, 100vw" className="object-cover" fetchPriority="high" />
          </div>
          <figcaption className="mt-2 text-[11px] text-bv-muted sm:text-[12px]">{t("aiDisclosure")}</figcaption>
        </figure>
      </div>

      <div className="bg-bv-background px-4 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ArticleTOC headings={headings} label={t("contents")} />
          </div>

          <div className="lg:col-span-6">
            <div className="max-w-[720px] bg-bv-surface px-6 py-6 sm:p-8">
              <span className="font-bv-body text-[14px] font-semibold uppercase tracking-[0.08em] text-bv-ink">
                {t("inShort")}
              </span>
              <ul className="mt-4 space-y-3">
                {content.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[16px] leading-[1.6] text-bv-ink/85">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-bv-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ArticleTOCMobile headings={headings} label={t("contents")} />
            </div>

            <div data-article-body>
              <ArticleBody markdown={content.body} labels={{ important: t("important"), aiDisclosure: t("aiDisclosure") }} />
            </div>

            {content.faq && content.faq.length > 0 && <ArticleFaq items={content.faq} label={t("faqHeading")} />}

            <div className="max-w-[720px] mt-10 border-t border-bv-line pt-6">
              <p className="text-[13px] text-bv-muted">
                {t("reviewedBy", { author: AUTHOR.name, date: formatDate(article.lastReviewedAt, locale) })}
              </p>
              {article.regulatory && (
                <p className="mt-3 text-[13px] leading-[1.6] text-bv-muted">{t("regulatoryDisclaimer")}</p>
              )}
            </div>

            <div className="mt-12">
              <InsightsAuthorBox locale={locale} linkLabel={t("authorBoxLink")} srLabel={t("authorBoxSr")} />
            </div>

            {relatedServices.length > 0 && (
              <div className="max-w-[720px] mt-12">
                <h2 className="font-bv-heading text-[28px] font-medium leading-[1.2] text-bv-ink sm:text-[32px] lg:text-[36px] mb-5">{t("relatedServices")}</h2>
                <ul className="space-y-4">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link href={service.href} data-track-service={service.slug} className="text-[17px] font-semibold text-bv-ink underline underline-offset-4 decoration-bv-accent hover:text-bv-accent">
                        {service.title}
                      </Link>
                      <p className="mt-1 text-[15px] text-bv-muted">{service.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mx-auto mt-20 max-w-[1320px]">
            <h2 className="font-bv-heading text-[28px] font-medium leading-[1.2] text-bv-ink sm:text-[32px] lg:text-[36px] mb-8">{t("moreInsights")}</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => {
                const relatedContent = locale === "ru" ? related.ru : related.en;
                return (
                  <InsightsCard
                    key={related.id}
                    dataAttrs={{ "data-track-related": related.id }}
                    data={{
                      href: `/insights/${related.slug}`,
                      cover: related.cover,
                      coverAlt: locale === "ru" ? related.coverAlt.ru : related.coverAlt.en,
                      topicLabel: topicName(related.topic, locale),
                      title: relatedContent.title,
                      excerpt: relatedContent.excerpt,
                      dateLabel: formatDate(related.publishedAt, locale),
                      readingLabel: t("minRead", { n: readingTime(relatedContent.body) }),
                      aiLabel: t("aiDisclosure"),
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      <EnquiryForm defaultService={formServiceFor(article)} leadSource={article.id} />
    </>
  );
}
