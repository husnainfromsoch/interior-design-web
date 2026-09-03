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
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 text-left lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            <span className="h-px w-8 bg-wood/50" aria-hidden />
            {t("badge")}
          </span>
          <h3 className="font-serif text-[30px] leading-tight text-charcoal sm:text-[38px]">
            {t("title")}
          </h3>
        </div>

        <div className="lg:pt-1">
          <p className="text-[17px] leading-relaxed text-warm-grey">
            {t("body1")}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-warm-grey">
            {t("body2")}
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-stone/60 pt-6">
            <div className="border-l border-stone/60 pl-4 first:border-l-0 first:pl-0">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-warm-grey/70">
                {t("stat1Label")}
              </dt>
              <dd className="mt-1 font-serif text-[20px] text-charcoal sm:text-[24px]">
                {t("stat1Value")}
              </dd>
            </div>
            <div className="border-l border-stone/60 pl-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-warm-grey/70">
                {t("stat2Label")}
              </dt>
              <dd className="mt-1 font-serif text-[20px] text-charcoal sm:text-[24px]">
                {t("stat2Value")}
              </dd>
            </div>
            <div className="border-l border-stone/60 pl-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-warm-grey/70">
                {t("stat3Label")}
              </dt>
              <dd className="mt-1 font-serif text-[20px] text-charcoal sm:text-[24px]">
                {t("stat3Value")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
