export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-beige px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wood">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-[40px] text-charcoal sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-6 text-base leading-relaxed text-warm-grey">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
