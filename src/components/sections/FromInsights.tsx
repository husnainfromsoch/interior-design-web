import { getLocale, getTranslations } from "next-intl/server";
import { TextLink } from "@/components/spec/blocks";
import { getArticleForService } from "@/data/insights";

/**
 * Insights spec A1: one "From Insights" text link after the FAQ and before the form; not
 * rendered without a relevant article. Sits inside the page column, so no container here.
 */
export default async function FromInsights({ serviceSlug }: { serviceSlug: string }) {
  const article = getArticleForService(serviceSlug);
  if (!article) return null;

  const t = await getTranslations("FromInsights");
  const locale = await getLocale();
  const title = locale === "ru" ? article.ru.title : article.en.title;

  return (
    <div className="border-t border-bv-line py-6">
      <p className="t-eyebrow text-bv-muted">{t("label")}</p>
      <TextLink href={`/insights/${article.slug}`}>{title}</TextLink>
    </div>
  );
}
