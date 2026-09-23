import Image from "next/image";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default function ServiceSpotlight({
  image,
  eyebrow,
  heading,
  caption,
}: {
  image: string;
  eyebrow: string;
  heading: string;
  caption: string;
}) {
  return (
    <section className="relative flex min-h-[64vh] items-end overflow-hidden text-bv-background">
      <Image src={image} alt={heading} fill sizes="100vw" className="kenburns object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/80 via-bv-ink/25 to-transparent" />

      <div className="reveal-scale relative mx-auto w-full max-w-[1320px] px-6 pb-16 lg:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
          {eyebrow}
        </span>
        <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
          <h2 className="max-w-2xl font-bv-heading text-[28px] leading-snug sm:text-[38px]">
            {heading}
          </h2>
        </TextBlockAnimation>
        <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-bv-background/85 sm:text-[15px]">
          {caption}
        </p>
      </div>
    </section>
  );
}
