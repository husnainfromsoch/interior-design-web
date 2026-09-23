import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ServicesDirectionGrid from "./ServicesDirectionGrid";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

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

  const items = directions.map((d) => ({
    id: d.id,
    num: d.num,
    image: d.image,
    title: t(`${d.id}Title`),
    body: t(`${d.id}Body`),
    viewLabel: t("viewService"),
    hrefs: d.hrefs.map((l) => ({ href: l.href, label: t(l.key) })),
  }));

  return (
    <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {t("heading")}
            </h2>
          </TextBlockAnimation>
          <Link
            href="/services"
            className="btn-shine hidden h-[48px] shrink-0 items-center gap-2 rounded-[2px] border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:inline-flex"
          >
            {t("allServices")}
          </Link>
        </div>

        <div className="mt-12 lg:mt-16">
          <ServicesDirectionGrid items={items} />
        </div>

        <div className="reveal mt-10 sm:hidden">
          <Link
            href="/services"
            className="inline-flex h-[48px] items-center gap-2 rounded-[2px] border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {t("allServices")}
          </Link>
        </div>
      </div>
    </section>
  );
}
