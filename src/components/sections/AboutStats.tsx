import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default async function AboutStats() {
  const t = await getTranslations("AboutStats");
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal-left">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("badge")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[26px] leading-snug sm:text-[32px]">
              {t("titlePlain")} <span className="italic text-bv-accent">{t("titleItalic")}</span>.
            </h2>
          </TextBlockAnimation>
          <p className="mt-4 max-w-md text-[17px] text-bv-muted">
            {t("body")}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              {t("cta")}
            </Button>
          </div>
        </div>

        <div className="reveal-right grid grid-cols-2 grid-rows-2 gap-4">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-none border border-bv-line/70 ">
            <Image
              src="https://images.unsplash.com/photo-1681516771357-25b8d2901efd?q=80&w=1200&auto=format&fit=crop"
              alt="Wood flooring with balcony view"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-none border border-bv-line/70 ">
            <Image
              src="https://images.unsplash.com/photo-1661351224676-f1b437f6a9c2?q=80&w=1200&auto=format&fit=crop"
              alt="Outdoor patio tiling with garden edge"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-none border border-bv-line/70 ">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
              alt="Entrance flooring detail"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-none border border-bv-line/70 ">
            <Image
              src="https://images.unsplash.com/photo-1621535884102-d13e00c76283?q=80&w=1200&auto=format&fit=crop"
              alt="Patio walkway with paver detailing"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
