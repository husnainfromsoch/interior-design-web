import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import HashRedirect from "@/components/ui/HashRedirect";
import { formCopy } from "@/components/final/formCopy";
import { Body, H2, H3, Note, Section, SplitHero, Steps, TextLink } from "@/components/spec/blocks";
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
  const b = (id: string) => block("P19", id, locale);
  const hero = b("PR01");
  const stages = b("PR02");
  const ways = b("PR03");
  const everything = b("PR03b");
  const decisions = b("PR04");

  return (
    <>
      <SplitHero title={val(hero[0])} body={<p>{val(hero[1])}</p>} />

      {/* PR02 Ten Stages */}
      <Section surface>
        <H2>{val(stages[0])}</H2>
        <Steps steps={stages.slice(1, 11).map((line) => numbered(line))} />
        <Note>{val(stages[11])}</Note>
      </Section>

      {/* PR03 Four Ways to Work With Us: 4 columns, 2 × 2 on tablet, 1 on mobile */}
      <Section>
        <H2>{val(ways[0])}</H2>
        <div className="mt-8 grid grid-rows-[auto_auto_1fr] gap-x-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {ways.slice(1, 5).map((line) => {
            const { n, title, body, anchor } = numbered(line);
            return (
              <article key={n} id={anchor} className="row-span-3 grid grid-rows-subgrid gap-y-3 border-t border-bv-line py-6" style={{ scrollMarginTop: "var(--header-h)" }}>
                <span className="t-number text-bv-accent">{n}</span>
                <H3>{title}</H3>
                <p className="t-body text-bv-muted">{body}</p>
              </article>
            );
          })}
        </div>
        <HashRedirect from="bespoke-joinery" to="individual-services" />

        {/* PR03b Everything we do: link row */}
        <div className="mt-10 border-t border-bv-line pt-8">
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
            <div key={lines[0]} className="border-t border-bv-line py-6">
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
