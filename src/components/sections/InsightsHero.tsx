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
        <span className="font-bv-body text-[13px] font-semibold uppercase tracking-[0.14em] text-bv-accent">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-bv-heading text-[38px] font-medium leading-[1.1] text-bv-ink sm:text-[52px] lg:text-[64px]">
          {heading}
        </h1>
        <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-bv-ink sm:text-[20px]">{intro}</p>
      </div>
    </section>
  );
}
