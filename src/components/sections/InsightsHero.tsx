export default function InsightsHero({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <section className="bg-bv-background px-4 pb-10 pt-10 sm:px-10 lg:px-16 lg:pb-14 lg:pt-16">
      <div className="mx-auto max-w-[1320px]">
        <span className="t-eyebrow text-bv-accent">
          {eyebrow}
        </span>
        <h1 className="mt-4 t-h1 text-bv-ink">
          {heading}
        </h1>
        <p className="mt-6 max-w-[640px] t-body text-bv-ink">{intro}</p>
      </div>
    </section>
  );
}
