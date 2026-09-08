"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const MEDIA_SRC = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80";

export default function SignatureProjectShowcase() {
  const t = useTranslations("SignatureProjectShowcase");
  const sectionRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<HTMLDivElement>(null);
  const titleTopRef = useRef<HTMLHeadingElement>(null);
  const titleBottomRef = useRef<HTMLHeadingElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  const projectTitle = t("projectTitle");
  const firstWord = projectTitle.split(" ")[0];
  const restOfTitle = projectTitle.split(" ").slice(1).join(" ");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.set(irisRef.current, { clipPath: "circle(150% at 50% 50%)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(irisRef.current, { clipPath: "circle(0% at 50% 50%)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      tl.to(irisRef.current, { clipPath: "circle(150% at 50% 50%)", ease: "none", duration: 1 }, 0)
        .to(titleTopRef.current, { yPercent: -140, scale: 0.55, autoAlpha: 0, ease: "none", duration: 0.65 }, 0)
        .to(titleBottomRef.current, { yPercent: 140, scale: 0.55, autoAlpha: 0, ease: "none", duration: 0.65 }, 0)
        .to(hintRef.current, { autoAlpha: 0, ease: "none", duration: 0.2 }, 0);
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill();
      });
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative bg-charcoal" style={{ height: "230vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 scale-110">
            <Image
              src={MEDIA_SRC}
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25 blur-sm"
            />
            <div className="absolute inset-0 bg-charcoal/70" />
          </div>

          <div ref={irisRef} className="absolute inset-0" style={{ clipPath: "circle(0% at 50% 50%)" }}>
            <Image
              src={MEDIA_SRC}
              alt={projectTitle}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/35" />
          </div>

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              {t("projectDate")}
            </p>
            <h2
              ref={titleTopRef}
              className="font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
            >
              {firstWord}
            </h2>
            <h2
              ref={titleBottomRef}
              className="mt-1 font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
            >
              {restOfTitle}
            </h2>
            <p ref={hintRef} className="mt-9 text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">
              {t("scrollToExpand")}
            </p>
          </div>
        </div>
      </div>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="reveal grid grid-cols-1 gap-10 text-left lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
                {t("badge")}
              </span>
              <h3 className="font-serif text-[30px] leading-tight text-charcoal sm:text-[38px]">
                {t("title")}
              </h3>
            </div>

            <div className="lg:pt-1">
              <p className="text-[17px] leading-relaxed text-warm-grey">{t("body1")}</p>
              <p className="mt-4 text-[17px] leading-relaxed text-warm-grey">{t("body2")}</p>

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
        </div>
      </section>
    </>
  );
}
