import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-beige">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <p className="text-sm tracking-[0.3em] text-gold uppercase">
          Interior Design Studio — Dubai, UAE
        </p>
        <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight text-charcoal sm:text-6xl">
          Timeless interiors, crafted for modern living
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          We design refined residential, commercial and hospitality spaces
          across the UAE — blending luxury materials, considered light, and
          bespoke detailing.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-charcoal px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-gold"
          >
            Book a Consultation
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-charcoal/30 px-8 py-3 text-sm tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
