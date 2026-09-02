import { getTranslations } from "next-intl/server";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default async function SignatureProjectShowcase() {
  const t = await getTranslations("SignatureProjectShowcase");
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80"
      bgImageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80"
      title={t("projectTitle")}
      date={t("projectDate")}
      scrollToExpand={t("scrollToExpand")}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
          {t("badge")}
        </span>
        <h3 className="font-serif text-[28px] sm:text-[34px] text-charcoal">
          {t("title")}
        </h3>
        <p className="mt-5 text-[17px] leading-relaxed text-warm-grey">
          {t("body1")}
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-warm-grey">
          {t("body2")}
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
