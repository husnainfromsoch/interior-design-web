import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ServiceHero from "@/components/sections/ServiceHero";
import PageHeader from "@/components/ui/PageHeader";
import ServiceOverview from "@/components/sections/ServiceOverview";
import ServiceSpotlight from "@/components/sections/ServiceSpotlight";
import ServiceProcessTimeline from "@/components/sections/ServiceProcessTimeline";
import ServiceAccordionGallery from "@/components/sections/ServiceAccordionGallery";
import ServiceVideoShowcase from "@/components/sections/ServiceVideoShowcase";
import ServiceFocusAreas from "@/components/sections/ServiceFocusAreas";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import MidCta from "@/components/sections/MidCta";
import { getServices } from "@/data/services";
import { routing } from "@/i18n/routing";

const DEFAULT_VIDEO = "/videos/hero.mp4";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServices(locale).map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServices(locale).find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | G.A.G Interiors Dubai`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const services = getServices(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = await getTranslations("ServiceDetail");

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const heroSlides = Array.from(
    new Set([service.heroImage ?? service.image, ...(service.gallery ?? [])])
  ).slice(0, 4);

  const spotlightImage = service.gallery?.[2] ?? service.gallery?.[0] ?? service.heroImage ?? service.image;
  const secondaryImage = service.gallery?.find((src) => src !== service.image);

  return (
    <>
      <ServiceHero title={service.title} images={heroSlides} />

      <PageHeader eyebrow={t("ourServices")} title={service.title} description={service.intro} />

      <ServiceOverview
        image={service.image}
        secondaryImage={secondaryImage}
        title={service.title}
        highlights={service.highlights}
        stats={service.stats}
      />

      {service.process && <ServiceProcessTimeline steps={service.process} />}

      <ServiceSpotlight
        image={spotlightImage}
        eyebrow={t("spotlightEyebrow")}
        heading={t("spotlightHeading", { title: service.title.toLowerCase() })}
        caption={t("spotlightCaption")}
      />

      {service.gallery && (
        <ServiceAccordionGallery
          images={service.gallery}
          captions={service.galleryCaptions}
          title={service.title}
          featureCaption={service.intro}
        />
      )}

      <ServiceVideoShowcase
        video={service.video ?? DEFAULT_VIDEO}
        caption={service.videoCaption ?? t("defaultVideoCaption")}
        stats={service.stats ?? []}
      />

      {service.focusAreas && (
        <ServiceFocusAreas
          eyebrow={t("whatsIncluded")}
          heading={t("focusHeading", { title: service.title.toLowerCase() })}
          areas={service.focusAreas}
          problems={service.problems}
        />
      )}

      {service.faqs && <ServiceFAQ faqs={service.faqs} />}

      {otherServices.length > 0 && (
        <section className="bg-beige py-24">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
            <div className="reveal mb-12">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
                {t("explore")}
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px]">{t("otherServices")}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s, i) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="reveal-scale group flex flex-col overflow-hidden rounded-xl border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-2.5 text-[19px] font-medium">{s.title}</h3>
                    <p className="text-sm text-warm-grey">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MidCta />
    </>
  );
}
