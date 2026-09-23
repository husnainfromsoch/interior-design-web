import Image from "next/image";
import { getTranslations } from "next-intl/server";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const MEDIA_SRC = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80";

export default async function SignatureProjectShowcase() {
  const t = await getTranslations("SignatureProjectShowcase");
  const projectTitle = t("projectTitle");

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-bv-ink">
        <Image
          src={MEDIA_SRC}
          alt={projectTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bv-ink/35" />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-bv-accent">
            {t("projectDate")}
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading font-medium leading-[1.05] text-bv-background ">
            {projectTitle}
          </h2>
        </div>
      </div>

      <section className="bg-bv-background py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="reveal grid grid-cols-1 gap-10 text-left lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("badge")}
              </span>
              <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
                <h3 className="font-bv-heading text-[30px] leading-tight text-bv-ink sm:text-[38px]">
                  {t("title")}
                </h3>
              </TextBlockAnimation>
            </div>

            <div className="lg:pt-1">
              <p className="text-[17px] leading-relaxed text-bv-muted">{t("body1")}</p>
              <p className="mt-4 text-[17px] leading-relaxed text-bv-muted">{t("body2")}</p>

              <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-bv-line/60 pt-6">
                <div className="border-l border-bv-line/60 pl-4 first:border-l-0 first:pl-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-bv-muted/70">
                    {t("stat1Label")}
                  </dt>
                  <dd className="mt-1 font-bv-heading text-[20px] text-bv-ink sm:text-[24px]">
                    {t("stat1Value")}
                  </dd>
                </div>
                <div className="border-l border-bv-line/60 pl-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-bv-muted/70">
                    {t("stat2Label")}
                  </dt>
                  <dd className="mt-1 font-bv-heading text-[20px] text-bv-ink sm:text-[24px]">
                    {t("stat2Value")}
                  </dd>
                </div>
                <div className="border-l border-bv-line/60 pl-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-bv-muted/70">
                    {t("stat3Label")}
                  </dt>
                  <dd className="mt-1 font-bv-heading text-[20px] text-bv-ink sm:text-[24px]">
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
