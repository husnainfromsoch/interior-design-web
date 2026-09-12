"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const icons = [
  <svg key="i1" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
    <path d="M4 20 20 4M4 20l3-9 6-6 3 3-6 6-9 3Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="i2" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
    <path d="M12 2 3 8l9 6 9-6-9-6Zm0 6v14M3 8v9l9 5M21 8v9l-9 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="i3" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
    <path d="m4 20 5-1 11-11-4-4L5 15l-1 5Zm10-14 4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function WhyUs() {
  const t = useTranslations("WhyUs");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const points = [
    { title: t("point1Title"), body: t("point1Body"), icon: icons[0] },
    { title: t("point2Title"), body: t("point2Body"), icon: icons[1] },
    { title: t("point3Title"), body: t("point3Body"), icon: icons[2] },
  ];
  return (
    <section id="why" className="bg-ivory py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal-left group relative mb-14 aspect-video w-full overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)] lg:mb-16">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft-black/30 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="reveal-left w-full">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[42px]">
              {t("titlePlain")}{" "}
              <span className="italic text-wood">{t("titleItalic")}</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-warm-grey">
              {t("body")}
            </p>

            <div className="mt-10 border-t border-stone">
              {points.map((point, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={point.title}
                    className="reveal border-b border-stone transition-colors duration-500"
                    style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group/row flex w-full items-start justify-between gap-6 px-2 py-7 text-left transition-colors duration-500 hover:bg-wood/5 -mx-2 rounded-sm"
                    >
                      <div className="flex-1">
                        <h3
                          className={`text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors duration-500 ${
                            isOpen ? "text-wood" : "text-soft-black"
                          }`}
                        >
                          {point.title}
                        </h3>
                        <div
                          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <p
                              className={`mt-2 max-w-[42ch] text-sm leading-relaxed text-warm-grey transition-all duration-500 ease-out ${
                                isOpen
                                  ? "translate-y-0 opacity-100 delay-150"
                                  : "-translate-y-1 opacity-0"
                              }`}
                            >
                              {point.body}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "rotate-45 bg-wood text-white"
                            : "bg-wood/90 text-white group-hover/row:bg-wood"
                        }`}
                      >
                        <div className={`transition-transform duration-500 ${isOpen ? "-rotate-45" : ""}`}>
                          {point.icon}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal-right grid grid-cols-2 gap-4 sm:gap-5 lg:sticky lg:top-28">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?q=80&w=800&auto=format&fit=crop"
                alt="Living room with sculptural wall accent"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1758448755856-01d3add0177b?q=80&w=800&auto=format&fit=crop"
                alt="Modern lounge with layered textures and statement lighting"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1611021061285-16c871740efa?q=80&w=800&auto=format&fit=crop"
                alt="Custom joinery and material detailing"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1751283226474-869937c075d6?q=80&w=800&auto=format&fit=crop"
                alt="Dining room with refined finishes"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
