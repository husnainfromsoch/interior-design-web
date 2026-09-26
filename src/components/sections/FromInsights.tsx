import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getArticleForService } from "@/data/insights";

/** Spec A1: one "From Insights" text link after the FAQ and before the form; not rendered without a relevant article. */
export default async function FromInsights({ serviceSlug }: { serviceSlug: string }) {
  const article = getArticleForService(serviceSlug);
  if (!article) return null;

  const t = await getTranslations("FromInsights");
  const locale = await getLocale();
  const title = locale === "ru" ? article.ru.title : article.en.title;

  return (
    <section className="bv-flow bg-bv-background pb-14 lg:pb-16">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <p className="border-t border-bv-line pt-6 text-[14px] text-bv-muted">{t("label")}</p>
        <Link
          href={`/insights/${article.slug}`}
          className="mt-2 inline-block text-[17px] font-semibold text-bv-ink underline decoration-bv-accent underline-offset-4 transition-colors duration-200 hover:text-bv-accent"
        >
          {title} →
        </Link>
      </div>
    </section>
  );
}
