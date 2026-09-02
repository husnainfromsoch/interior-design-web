import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default async function AboutTeaser() {
  const t = await getTranslations("AboutTeaser");
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/projects/marina-penthouse-terrace.avif"
      bgImageSrc="/projects/marina-penthouse-terrace.avif"
      title={t("title")}
      date={t("date")}
      scrollToExpand={t("scrollToExpand")}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
          {t("badge")}
        </span>
        <h2 className="font-serif text-[26px] sm:text-[30px] text-charcoal">
          {t("heading")}
        </h2>
        <p className="mt-4 mx-auto max-w-md text-[17px] leading-relaxed text-warm-grey">
          {t("body")}
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/about" variant="outline">
            {t("cta")}
          </Button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
