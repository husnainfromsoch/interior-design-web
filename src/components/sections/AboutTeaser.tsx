import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/3] w-full rounded-lg bg-beige-dark/60" />

        <div>
          <p className="text-sm tracking-[0.3em] text-gold uppercase">
            About the Studio
          </p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal">
            A decade of designing for the UAE&apos;s finest spaces
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Studio Interiors is a Dubai-based design practice creating
            considered, luxurious spaces for clients across the Emirates.
            From concept to final styling, we manage every detail so our
            clients experience nothing but the finished result.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm tracking-wide text-charcoal underline underline-offset-4 hover:text-gold"
          >
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
}
