import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-charcoal py-24 text-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm tracking-[0.3em] text-gold-light uppercase">
          Client Voices
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl text-white">
          What our clients say
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-lg border border-white/10 p-8"
            >
              <p className="text-sm leading-relaxed text-beige/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-gold-light">
                {t.name} — {t.location}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
