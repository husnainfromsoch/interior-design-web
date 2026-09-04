import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function ServicesHero() {
  const t = await getTranslations("ServicesHero");
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-soft-black text-ivory sm:min-h-[640px]">
      <Image
        src="/visuals/PHOTO-2025-04-15-12-52-59(1).jpg"
        alt="An elegant panelled lounge with marble staircase by G.A.G Interiors"
        fill
        priority
        sizes="100vw"
        className="kenburns-fast object-cover"
      />
      <div className="hero-in relative mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 pb-40 pt-24 text-center sm:pb-52 lg:px-8">
        <h1 className="max-w-3xl font-serif text-[38px] leading-[1.1] sm:text-[56px]">
          {t("titlePlain")}
          <span className="italic text-champagne"> {t("titleItalic")}</span>
        </h1>
      </div>
    </section>
  );
}
