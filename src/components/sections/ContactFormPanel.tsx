"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactFormPanel({
  eyebrow,
  heading,
  image = "/visuals/PHOTO-2025-04-15-12-21-30.jpg",
  className = "",
}: {
  eyebrow?: string;
  heading?: string;
  image?: string;
  className?: string;
}) {
  const t = useTranslations("ContactFormPanel");
  const resolvedEyebrow = eyebrow ?? t("eyebrow");
  const resolvedHeading = heading ?? t("heading");
  const bgRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;

    function update() {
      ticking = false;
      const wrap = wrapRef.current;
      const bg = bgRef.current;
      if (!wrap || !bg) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height);
      const offset = (progress - 0.5) * 60;
      bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      id="contact-form"
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <div ref={bgRef} className="absolute inset-0 scale-[1.15] will-change-transform">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 1180px, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-soft-black/25" />

      <div className="relative flex items-center justify-center px-4 py-10 sm:px-10 sm:py-16 lg:py-24">
        <div className="reveal-scale w-full max-w-[720px] rounded-2xl bg-ivory p-8 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)] sm:p-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">{resolvedEyebrow}</p>
            <h2 className="mt-4 font-serif text-[28px] uppercase leading-tight text-charcoal sm:text-[36px]">
              {resolvedHeading}
            </h2>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
