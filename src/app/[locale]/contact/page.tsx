import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import ContactFormPanel from "@/components/sections/ContactFormPanel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <section className="relative overflow-hidden py-24">
        <Image
          src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bv-ink/55" />
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <ContactFormPanel />
        </div>
      </section>

      <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {(
              [
                ["hoursLabel", "hoursValue"],
                ["locationsLabel", "locationsValue"],
                ["meetingsLabel", "meetingsValue"],
              ] as const
            ).map(([labelKey, valueKey]) => (
              <div key={labelKey} className="reveal rounded-[20px] border border-bv-line bg-bv-surface p-7">
                <h3 className="font-[var(--font-bv-heading)] text-[18px] font-medium text-bv-ink">{t(labelKey)}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-bv-muted">{t(valueKey)}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("nextHeading")}
              </h2>
              <ol className="mt-6 space-y-4">
                {(["nextStep1", "nextStep2", "nextStep3"] as const).map((key, i) => (
                  <li key={key} className="flex gap-4">
                    <span className="font-[var(--font-bv-heading)] text-[15px] text-bv-accent">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[16px] leading-[1.65] text-bv-muted">{t(key)}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[14px] leading-[1.65] text-bv-muted/80">{t("nextNote")}</p>
            </div>

            <div className="reveal">
              <h2 className="font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink sm:text-[32px]">
                {t("faqHeading")}
              </h2>
              <div className="mt-6 divide-y divide-bv-line border-y border-bv-line">
                {(
                  [
                    ["faq1Q", "faq1A"],
                    ["faq2Q", "faq2A"],
                    ["faq3Q", "faq3A"],
                  ] as const
                ).map(([qKey, aKey]) => (
                  <div key={qKey} className="py-5">
                    <p className="font-[var(--font-bv-heading)] text-[17px] font-medium text-bv-ink">{t(qKey)}</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-bv-muted">{t(aKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
