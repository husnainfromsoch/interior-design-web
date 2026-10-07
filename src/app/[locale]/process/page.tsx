import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import HashRedirect from "@/components/ui/HashRedirect";
import ProcessHero from "@/components/sections/ProcessHero";
import ProcessStagesTimeline from "@/components/sections/ProcessStagesTimeline";
import { formCopy } from "@/components/final/formCopy";
import { Body, H2, H3, Section, TextLink } from "@/components/spec/blocks";
import { block, dots, linkHref, meta, numbered, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P19 Our Process (Final Changes Sheet, P19): PR01–PR07 in the order of the copy.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P19", locale), "/process", locale);
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProcessPage" });
  const b = (id: string) => block("P19", id, locale);
  const hero = b("PR01");
  const stages = b("PR02");
  const ways = b("PR03");
  const everything = b("PR03b");
  const decisions = b("PR04");

  return (
    <>
      {/* PR01 Hero: text over a slow image sequence (temporary photos until the final images arrive) */}
      <ProcessHero
        eyebrow=""
        title={val(hero[0])}
        intro={val(hero[1])}
        stats={[]}
        images={["/visuals/PHOTO-2025-04-15-11-32-01.jpg", "/visuals/PHOTO-2025-04-15-12-00-05.jpg", "/visuals/PHOTO-2025-04-15-12-08-11.jpg"]}
        imageAlt={t("heroImageAlt")}
      />

      {/* PR02 Ten Stages: two columns of five on the dark timeline, the note beneath */}
      <ProcessStagesTimeline heading={val(stages[0])} stages={stages.slice(1, 11).map((line) => numbered(line))} />
      <section className="bg-bv-ink pb-14 md:pb-[72px] lg:pb-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <p className="max-w-3xl text-[14px] leading-[1.65] text-bv-white/50">{val(stages[11])}</p>
        </div>
      </section>

      {/* PR03 Four Ways to Work With Us: 4 columns, 2 × 2 on tablet, 1 on mobile */}
      <Section>
        <H2>{val(ways[0])}</H2>
        <div className="mt-8 grid grid-rows-[auto_auto_1fr] gap-x-6 gap-y-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {ways.slice(1, 5).map((line) => {
            const { n, title, body, anchor } = numbered(line);
            return (
              <article
                key={n}
                id={anchor}
                className="reveal row-span-3 grid grid-rows-subgrid gap-y-3 rounded-lg bg-bv-surface p-6 lg:p-7"
                style={{ scrollMarginTop: "var(--header-h)", ["--reveal-delay" as string]: `${(Number(n) - 1) * 90}ms` }}
              >
                <span className="t-number text-bv-accent">{n}</span>
                <H3>{title}</H3>
                <p className="t-body text-bv-muted">{body}</p>
              </article>
            );
          })}
        </div>
        <HashRedirect from="bespoke-joinery" to="individual-services" />

        {/* PR03b Everything we do: link row */}
        <div className="reveal mt-10 border-t border-bv-line pt-8">
          <H3>{val(everything[0])}</H3>
          <ul className="mt-3 flex flex-wrap gap-x-8">
            {dots(val(everything[1])).map((label) => (
              <li key={label}>
                <TextLink href={linkHref(label)} arrow={false}>
                  {label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PR04 Decisions You Can Follow, with PR05 and PR06 beneath */}
      <Section surface>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <H2 className="lg:col-span-5">{val(decisions[0])}</H2>
          <Body className="lg:col-span-7">{val(decisions[1])}</Body>
        </div>
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:mt-14">
          {[b("PR05"), b("PR06")].map((lines) => (
            <div key={lines[0]} className="reveal border-t border-bv-line py-6">
              <H3>{val(lines[0])}</H3>
              <p className="t-body mt-3 text-bv-ink">{val(lines[1])}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PR07 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P19" />
    </>
  );
}
