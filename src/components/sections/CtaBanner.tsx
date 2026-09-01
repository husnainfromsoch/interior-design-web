import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-beige px-8 py-16 text-center">
        <h2 className="max-w-xl font-serif text-4xl text-charcoal">
          Ready to reimagine your space?
        </h2>
        <p className="max-w-md text-base text-muted">
          Book a complimentary consultation with our design team, available
          across Dubai and the wider UAE.
        </p>
        <Link
          href="/contact"
          className="mt-4 rounded-full bg-charcoal px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-gold"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
