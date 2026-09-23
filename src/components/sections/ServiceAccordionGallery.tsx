"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default function ServiceAccordionGallery({
  images,
  captions,
  title,
  featureCaption,
  ctaLabel,
}: {
  images: string[];
  captions?: string[];
  title: string;
  featureCaption: string;
  ctaLabel?: string;
}) {
  const t = useTranslations("ServiceDetail");
  const slides = images.slice(0, 5);
  const featureIndex = slides.length - 1;
  const [active, setActive] = useState(featureIndex);

  return (
    <section className="bg-bv-ink py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mb-14 max-w-xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("designGallery")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] leading-snug text-bv-background sm:text-[34px]">
              {title} {t("galleryHeadingSuffix")}
            </h2>
          </TextBlockAnimation>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-bv-background/50">
            {t("galleryDisclaimer")}
          </p>
        </div>

        <div
          className="reveal-scale flex h-[440px] w-full overflow-hidden rounded-none border border-bv-background/10 sm:h-[520px]"
          onMouseLeave={() => setActive(featureIndex)}
        >
          {slides.map((src, i) => {
            const isActive = i === active;
            const isFeature = i === featureIndex;
            const caption = captions?.[i];

            return (
              <div
                key={src + i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative h-full cursor-pointer overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
              >
                <Image
                  src={src}
                  alt={caption ?? `${title} visual ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div
                  className="absolute inset-0 bg-bv-ink transition-opacity duration-500"
                  style={{ opacity: isActive ? 0.15 : 0.55 }}
                />

                <span className="absolute left-4 top-4 text-[11px] font-medium tracking-[0.08em] text-bv-background/80">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {!isFeature && caption && (
                  <>
                    <span
                      className="absolute bottom-5 left-5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-bv-background/85 transition-opacity duration-300"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        opacity: isActive ? 0 : 1,
                      }}
                    >
                      {caption}
                    </span>
                    <div
                      className="absolute inset-x-5 bottom-5 transition-opacity duration-300 sm:inset-x-7 sm:bottom-7"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      <p className="max-w-xs text-[13px] font-medium text-bv-background/90 sm:text-sm">{caption}</p>
                    </div>
                  </>
                )}

                {isFeature && (
                  <div
                    className="absolute inset-x-5 bottom-5 transition-opacity duration-500 sm:inset-x-7 sm:bottom-7"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <h3 className="font-bv-heading text-[22px] text-bv-background sm:text-[28px]">
                      {t("readyToStart")}
                    </h3>
                    <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-bv-background/80 sm:text-sm">
                      {featureCaption}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center rounded-[2px] border border-bv-accent/50 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-bv-accent transition-all duration-200 ease-out hover:border-bv-accent hover:bg-bv-accent hover:text-bv-ink active:translate-y-0"
                    >
                      {ctaLabel ?? t("requestQuote")}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
