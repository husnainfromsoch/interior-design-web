"use client";

import { useTranslations } from "next-intl";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactFormPanel({
  eyebrow,
  heading,
  className = "",
}: {
  eyebrow?: string;
  heading?: string;
  className?: string;
}) {
  const t = useTranslations("ContactFormPanel");
  const resolvedEyebrow = eyebrow ?? t("eyebrow");
  const resolvedHeading = heading ?? t("heading");

  return (
    <div id="contact-form" className={className}>
      <div className="reveal-scale w-full max-w-[720px] mx-auto rounded-2xl bg-ivory p-8 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)] sm:p-12">
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
  );
}
