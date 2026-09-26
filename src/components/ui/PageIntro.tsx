import { RiseWords } from "@/components/spec/blocks";

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
        <div className="max-w-3xl">
          <span className="hero-in inline-block font-bv-body text-[13px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
            <RiseWords text={title} start={100} />
          </h1>
          <p className="hero-in mt-6 max-w-2xl text-[17px] leading-[1.65] text-bv-muted" style={{ animationDelay: "0.45s" }}>{intro}</p>
        </div>
      </div>
    </section>
  );
}
