import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const directions = [
  {
    id: "design",
    num: "01",
    image: "/service images/imgi_5_StudioPPARK-81+Squam+11.jpg",
    hrefs: [
      { href: "/services/interior-design", key: "designLink1" },
      { href: "/services/landscape-design", key: "designLink2" },
    ],
  },
  {
    id: "renovation",
    num: "02",
    image: "/service images/imgi_43_Nachman_12.12.17_01.jpg",
    hrefs: [
      { href: "/services/villa-renovation", key: "renovationLink1" },
      { href: "/services/apartment-renovation", key: "renovationLink2" },
    ],
  },
  {
    id: "commercial",
    num: "03",
    image: "/service images/imgi_31_magnum-opus_full-screen-push-1_desktop.jpg",
    hrefs: [{ href: "/services/commercial-fit-out", key: "commercialLink1" }],
  },
  {
    id: "joinery",
    num: "04",
    image: "/service images/imgi_57_DSC_0116.jpg",
    hrefs: [{ href: "/services/bespoke-joinery", key: "joineryLink1" }],
  },
] as const;

export default async function HomeDirections() {
  const t = await getTranslations("HomeDirections");

  return (
    <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
            {t("heading")}
          </h2>
          <Link
            href="/services"
            className="btn-shine hidden h-[48px] shrink-0 items-center gap-2 rounded-full border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:inline-flex"
          >
            {t("allServices")}
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:gap-y-12">
          {directions.map((d, i) => (
            <article
              key={d.id}
              className="reveal group flex flex-col overflow-hidden rounded-[20px] border border-bv-line bg-bv-surface/60 shadow-[0_2px_10px_-4px_rgba(51,46,43,0.12)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-bv-accent/40 hover:shadow-[0_28px_56px_-24px_rgba(51,46,43,0.4)] active:translate-y-0 active:shadow-[0_8px_20px_-12px_rgba(51,46,43,0.35)] active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <Link href={d.hrefs[0].href} className="relative block aspect-[16/11] w-full overflow-hidden bg-bv-surface">
                <Image
                  src={d.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/75 via-bv-ink/0 to-bv-ink/0" />
                <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-bv-white/95 font-[var(--font-bv-body)] text-[13px] font-semibold tracking-[0.02em] text-bv-ink shadow-md backdrop-blur">
                  {d.num}
                </span>
                <span className="absolute bottom-5 left-5 inline-flex items-center rounded-full bg-bv-ink/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-bv-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {t("viewService")}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 scale-90 items-center justify-center rounded-full bg-bv-accent text-bv-white opacity-0 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span aria-hidden="true" className="h-[3px] w-9 rounded-full bg-bv-accent transition-all duration-300 group-hover:w-14" />
                <h3 className="mt-4 font-[var(--font-bv-heading)] text-[24px] font-medium leading-[1.18] text-bv-ink transition-colors group-hover:text-bv-accent lg:text-[28px]">
                  <Link href={d.hrefs[0].href}>{t(`${d.id}Title`)}</Link>
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-bv-muted">
                  {t(`${d.id}Body`)}
                </p>
                <div className="mt-6 flex flex-1 flex-wrap items-end gap-2.5">
                  {d.hrefs.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="btn-shine inline-flex items-center gap-1.5 rounded-full border border-bv-field-border/70 px-4 py-2 text-[13px] font-semibold text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-accent hover:bg-bv-accent hover:text-bv-white hover:shadow-[0_8px_20px_-8px_rgba(152,88,63,0.6)] active:scale-[0.97] active:duration-100 motion-reduce:transition-none motion-reduce:active:scale-100"
                    >
                      {t(l.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 sm:hidden">
          <Link
            href="/services"
            className="inline-flex h-[48px] items-center gap-2 rounded-full border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {t("allServices")}
          </Link>
        </div>
      </div>
    </section>
  );
}
