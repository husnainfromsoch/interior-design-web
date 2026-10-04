export default function PageIntro({
  eyebrow,
  title,
  intro,
  narrow,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  /** Legal-page column (800 px), matching /privacy, so intro and body share one left edge. */
  narrow?: boolean;
}) {
  return (
    <section className="bv-flow bg-bv-background pb-12 pt-10 lg:pb-16 lg:pt-16">
      <div className={narrow ? "mx-auto w-full max-w-[800px] px-4 sm:px-8" : "mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]"}>
        <div className="max-w-[760px]">
          <p className="t-eyebrow text-bv-accent">{eyebrow}</p>
          <h1 className="t-h1 mt-4">{title}</h1>
          <p className="t-body mt-6 text-bv-muted">{intro}</p>
        </div>
      </div>
    </section>
  );
}
