import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getServices } from "@/data/services";

const icons = [
  // pencil / design
  <path key="design" d="M11 4H4v16h16v-7M17.5 3.5a2.12 2.12 0 0 1 3 3L11 16l-4 1 1-4 9.5-9.5Z" />,
  // building
  <path key="building" d="M4 21h16M6 21V8l6-4 6 4v13M10 21v-5h4v5" />,
  // layers / plan
  <path key="plan" d="M12 3 2 8l10 5 10-5-10-5ZM2 16l10 5 10-5M2 12l10 5 10-5" />,
  // tool / build
  <path key="build" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />,
  // refresh / renovation
  <path key="renovation" d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  // box / 3d
  <path key="cube" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />,
];

const cardImages = [
  "/images/imgi_3_5ec2bdbdede983e2b0bff75f_UWS_001.jpg",
  "/projects/villa-exterior.avif",
  "/projects/downtown-villa-living.avif",
  "/projects/al-barari-kitchen.avif",
  "/images/imgi_24_61f3245393d53d502b2dec6b_Hranowsky_Whitworth-620.jpg",
  "/projects/jbr-apartment-bathroom.avif",
  "/projects/marina-penthouse-terrace.avif",
];

export default async function Services({ limit }: { limit?: number }) {
  const locale = await getLocale();
  const t = await getTranslations("ServicesGrid");
  const services = getServices(locale);
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services-grid" className="scroll-mt-24 bg-beige py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px]">
            {t("titlePlain")} <span className="italic text-wood">{t("titleItalic")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service, i) => (
            <div
              key={service.slug}
              className="reveal-scale group relative flex flex-col rounded-2xl border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_20px_40px_-18px_rgba(46,42,37,0.28)]"
              style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
            >
              <span className="absolute right-5 top-5 z-10 font-serif text-3xl text-ivory/70 mix-blend-luminosity transition-colors duration-300 group-hover:text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={cardImages[i % cardImages.length]}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-7 left-8 z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-wood text-ivory shadow-[0_10px_24px_-8px_rgba(124,90,58,0.65)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    {icons[i % icons.length]}
                  </svg>
                </div>
              </div>

              <div className="flex flex-col p-8 pt-12">
                <h3 className="mb-3 text-[19px] font-semibold uppercase tracking-[0.02em]">
                  {service.title}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-warm-grey">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="group/link inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-wood transition-colors hover:text-wood-dark"
                >
                  {t("learnMore")}
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && services.length > limit && (
          <div className="reveal mt-14 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-wood/40 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-wood transition-colors hover:border-wood hover:bg-wood hover:text-ivory"
            >
              {t("viewAll")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
