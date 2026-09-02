import Image from "next/image";

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
    <section className="relative flex min-h-[64vh] items-end overflow-hidden text-ivory">
      <Image src={image} alt={heading} fill sizes="100vw" className="kenburns object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-soft-black/25 to-transparent" />

      <div className="reveal-scale relative mx-auto w-full max-w-[1180px] px-6 pb-16 lg:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
          {eyebrow}
        </span>
        <h2 className="max-w-2xl font-serif text-[28px] leading-snug sm:text-[38px]">
          {heading}
        </h2>
        <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-ivory/85 sm:text-[15px]">
          {caption}
        </p>
      </div>
    </section>
  );
}
