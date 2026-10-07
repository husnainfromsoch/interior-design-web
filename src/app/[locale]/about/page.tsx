import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import ScrollRail from "@/components/ui/ScrollRail";
import WordsInView from "@/components/ui/WordsInView";
import { CompletedProjectCards, imageCaption } from "@/components/final/shared";
import { formCopy } from "@/components/final/formCopy";
import { Body, CtaButton, Eyebrow, H2, Intro, PrimaryButton, ProjectCards, ScopeList, Section, SplitHero } from "@/components/spec/blocks";
import { getSiteSettings } from "@/cms/data";
import { FOUNDER_PHOTOS, TEAM_PHOTOS, type SiteImage } from "@/data/siteContent";
import { block, dots, linkHref, meta, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P20 About (Final Changes Sheet, P20): A01–A08 in the order of the copy. A04b is hidden
// until the licence number is set; A07 until team photos are uploaded; "Materials we
// build with" and the employer-building photo row stay hidden while they have no image.
// Layout pass 2026-10-08 (owner request): the copy is unchanged; the sections are set as an
// outlined year, profile cards, a ruled career table, an ink workshop panel and a numbered list.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P20", locale), "/about", locale);
}

const delay = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` }) as CSSProperties;

/** Profile card: index, role, name, text. `onSurface` flips the card colour inside a surface section. */
function Profile({ lines, photo, locale, index, onSurface }: { lines: string[]; photo?: SiteImage; locale: string; index: number; onSurface?: boolean }) {
  const [name, role, text] = lines.map(val);
  return (
    <article
      className={`reveal group relative flex flex-col overflow-hidden rounded-lg p-6 md:p-8 lg:p-10 ${onSurface ? "bg-bv-background" : "bg-bv-surface"}`}
      style={delay(index * 140)}
    >
      <span aria-hidden="true" className="reveal-line absolute left-0 top-0 h-[3px] w-full bg-bv-accent" style={delay(250 + index * 140)} />
      {/* Portrait slot: real photos only (never AI or stock portraits), so it stays empty until one is uploaded */}
      {photo && (
        <figure className="m-0 mb-8">
          <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-lg bg-bv-line/40">
            <Image src={photo.src} alt={photo.alt[locale === "ru" ? "ru" : "en"]} fill sizes="360px" className="object-cover" />
          </div>
          <figcaption className="t-caption mt-2">{imageCaption(photo, locale)}</figcaption>
        </figure>
      )}
      <div className="flex items-start justify-between gap-6">
        <Eyebrow className="pt-2">{role}</Eyebrow>
        <span
          aria-hidden="true"
          className="font-bv-heading text-[56px] font-medium leading-[0.8] text-bv-accent/35 tabular-nums transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 motion-reduce:transition-none lg:text-[72px]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-bv-heading text-[30px] font-medium leading-[1.1] text-bv-ink md:text-[34px] lg:mt-8 lg:text-[40px]">{name}</h3>
      <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-bv-ink lg:mt-5 lg:text-[17px]">{text}</p>
    </article>
  );
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const b = (id: string) => block("P20", id, locale);
  const { legal } = await getSiteSettings(locale);

  const hero = b("A01");
  const founders = b("A02");
  const leadership = b("A03");
  const experience = b("A03b");
  const workshop = b("A04");
  const contracting = b("A04b");
  const expect = b("A05");
  const team = b("A07");
  const columns = dots(experience[2].slice(experience[2].indexOf(": ") + 2).replace(/\):$/, ""));
  const [joinery, metal, visit] = dots(val(workshop[2]));
  const teamPhoto = TEAM_PHOTOS["abbas-al-gilani"];
  // A05 text is four short sentences; each one becomes a numbered line (words unchanged).
  const promises = val(expect[1]).match(/[^.]+\./g)?.map((t) => t.trim()) ?? [];

  return (
    <>
      <SplitHero xl title={val(hero[0])} body={<p>{val(hero[1])}</p>} slot="P20 hero" locale={locale} />

      {/* A02 Two Founders, One Standard of Work: heading and outlined year stay in view, text runs beside */}
      <Section surface>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[128px]">
              <H2>{val(founders[0])}</H2>
              <p className="reveal mt-8 font-bv-heading text-[clamp(88px,13vw,176px)] font-medium leading-[0.85] tabular-nums lg:mt-12" style={delay(150)}>
                <span className="year-outline">{val(founders[1])}</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <Body lead>{val(founders[2])}</Body>
            <div className="mt-8 space-y-5 border-t border-bv-line pt-8 lg:mt-10 lg:pt-10">
              {founders.slice(3).map((p) => (
                <Body key={p}>{val(p)}</Body>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* A03 Leadership: two profiles with names */}
      <Section>
        <div id="leadership" style={{ scrollMarginTop: "var(--header-h)" }}>
          <H2>{val(leadership[0])}</H2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
            <Profile lines={leadership.slice(2, 5)} photo={FOUNDER_PHOTOS["haidar-al-gilani"]} locale={locale} index={0} />
            <Profile lines={leadership.slice(6, 9)} photo={FOUNDER_PHOTOS["saqib-al-gilani"]} locale={locale} index={1} />
          </div>
        </div>
      </Section>

      {/* A03b The Experience Behind Bellvero: table with three rows, under a rail that fills on scroll */}
      <Section surface>
        <H2>{val(experience[0])}</H2>
        <Intro>{val(experience[1])}</Intro>
        <div className="relative mt-8 lg:mt-12">
          <ScrollRail horizontal className="absolute inset-x-0 top-0 h-px" />
          <table className="w-full border-collapse text-left">
            <thead className="hidden sm:table-header-group">
              <tr>
                {columns.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-b border-bv-line px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-bv-muted last:text-right lg:text-[12px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {experience.slice(3, 6).map((row, i) => (
                <tr
                  key={row}
                  className="reveal block border-b border-bv-line py-5 transition-colors duration-300 hover:bg-bv-background/70 sm:table-row sm:py-0"
                  style={delay(i * 110)}
                >
                  {dots(row).map((cell, j, cells) => (
                    <td
                      key={j}
                      className={
                        j === 0
                          ? "block font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink sm:table-cell sm:px-4 sm:py-7 sm:align-baseline lg:text-[28px]"
                          : j === cells.length - 1
                            ? "block pt-2 text-[14px] font-semibold tracking-[0.02em] text-bv-accent tabular-nums sm:table-cell sm:px-4 sm:py-7 sm:text-right sm:align-baseline lg:text-[15px]"
                            : "block pt-1 text-[16px] leading-[1.5] text-bv-ink sm:table-cell sm:px-4 sm:py-7 sm:align-baseline lg:text-[17px]"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Closing statement across the full width; its words rise in one after another when it is on screen */}
        <WordsInView
          text={val(experience[6])}
          className="mt-10 font-bv-heading text-[28px] font-medium leading-[1.22] text-bv-ink md:text-[36px] lg:mt-16 lg:text-[46px]"
        />
      </Section>

      {/* A04 Made for the Project: ink panel */}
      <Section>
        <div className="reveal relative overflow-hidden rounded-lg bg-bv-ink px-6 py-10 text-bv-background md:px-10 md:py-14 lg:px-16 lg:py-20">
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-sm border border-bv-background/10 lg:inset-4" />
          {/* Desktop: heading top left, visit button bottom left, text and service links on the right */}
          <div className="relative grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10">
            <div className="lg:col-span-5">
              <H2 light>{val(workshop[0])}</H2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
              <p className="reveal max-w-[62ch] text-[16px] leading-[1.7] text-bv-background/85 lg:text-[18px]" style={delay(120)}>
                {val(workshop[1])}
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-3 lg:mt-10" style={delay(220)}>
                <PrimaryButton href={linkHref(joinery)} variant="light">
                  {joinery}
                </PrimaryButton>
                <PrimaryButton href={linkHref(metal)} variant="light">
                  {metal}
                </PrimaryButton>
              </div>
            </div>
            <div className="reveal lg:col-span-5 lg:row-start-2 lg:self-end" style={delay(300)}>
              <PrimaryButton>{visit}</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* A04b Who You Are Contracting With: hidden until the licence number is set in the CMS */}
      {legal.licenceNumber && legal.issuingAuthority && (
        <Section surface>
          <H2>{val(contracting[0])}</H2>
          <Body className="mt-6">
            {val(contracting[1]).replace("{licence_number}", legal.licenceNumber).replace("{issuing_authority}", legal.issuingAuthority)}
          </Body>
        </Section>
      )}

      {/* A05 What You Can Expect: the sentences of the text as a numbered list */}
      <Section surface>
        <H2>{val(expect[0])}</H2>
        {promises.length > 1 ? <ScopeList numbered items={promises.map((title) => ({ title }))} /> : <Body className="mt-6">{val(expect[1])}</Body>}
        <CtaButton href={linkHref(val(expect[2]))} className="mt-8 lg:mt-10">
          {val(expect[2])}
        </CtaButton>
      </Section>

      {/* A06 Projects: completed projects (hidden until published), then two concept cards */}
      <Section>
        <H2>{val(b("A06")[0])}</H2>
        <CompletedProjectCards locale={locale} />
        <ProjectCards slugs={["coastal-villa-concept", "business-district-office-concept"]} locale={locale} />
      </Section>

      {/* A07 Our Team: hidden until team photos are uploaded */}
      {teamPhoto && (
        <Section surface>
          <H2>{val(team[0])}</H2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
            <Profile lines={team.slice(2, 5)} photo={teamPhoto} locale={locale} index={0} onSurface />
          </div>
        </Section>
      )}

      {/* A08 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P20" />
    </>
  );
}
