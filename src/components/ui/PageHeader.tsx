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
    <section className="bg-beige px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm tracking-[0.3em] text-gold uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-5xl text-charcoal">{title}</h1>
        {description && (
          <p className="mt-6 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
