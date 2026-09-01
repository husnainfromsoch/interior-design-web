import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="max-w-xl">
        <p className="text-sm tracking-[0.3em] text-gold uppercase">
          What We Do
        </p>
        <h2 className="mt-4 font-serif text-4xl text-charcoal">
          Services tailored to your space
        </h2>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-beige-dark/60 p-8 transition-colors hover:border-gold"
          >
            <h3 className="font-serif text-xl text-charcoal">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
