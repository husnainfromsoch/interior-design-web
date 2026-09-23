export default function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-bv-background pb-12 pt-14 md:pt-[72px] lg:pb-16 lg:pt-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-bv-body text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {eyebrow}
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[64px] mt-4 font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink sm:text-[52px] lg:text-[64px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-bv-muted">{intro}</p>
        </div>
      </div>
    </section>
  );
}
