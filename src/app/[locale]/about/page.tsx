import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { CompletedProjectCards, imageCaption } from "@/components/final/shared";
import { formCopy } from "@/components/final/formCopy";
import { Body, H2, H3, Intro, PrimaryButton, ProjectCards, Section, SplitHero, TextLink } from "@/components/spec/blocks";
import { getSiteSettings } from "@/cms/data";
import { FOUNDER_PHOTOS, TEAM_PHOTOS, type SiteImage } from "@/data/siteContent";
import { block, dots, linkHref, meta, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P20 About (Final Changes Sheet, P20): A01–A08 in the order of the copy. A04b is hidden
// until the licence number is set; A07 until team photos are uploaded; "Materials we
// build with" and the employer-building photo row stay hidden while they have no image.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P20", locale), "/about", locale);
}

function Profile({ lines, photo, locale }: { lines: string[]; photo?: SiteImage; locale: string }) {
  const [name, role, text] = lines.map(val);
  return (
    <article className="row-span-4 grid grid-rows-subgrid gap-y-3 border-t border-bv-line py-6">
      {photo ? (
        <figure className="m-0">
          <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden bg-bv-surface">
            <Image src={photo.src} alt={photo.alt[locale === "ru" ? "ru" : "en"]} fill sizes="360px" className="object-cover" />
          </div>
          <figcaption className="t-caption mt-2">{imageCaption(photo, locale)}</figcaption>
        </figure>
      ) : (
        <span />
      )}
      <H3>{name}</H3>
      <p className="t-small text-bv-muted">{role}</p>
      <p className="t-body text-bv-ink">{text}</p>
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

  return (
    <>
      <SplitHero xl title={val(hero[0])} body={<p>{val(hero[1])}</p>} />

      {/* A02 Two Founders, One Standard of Work */}
      <Section surface>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <H2>{val(founders[0])}</H2>
            <p className="t-number mt-6 text-bv-accent">{val(founders[1])}</p>
          </div>
          <div className="space-y-5 lg:col-span-7">
            {founders.slice(2).map((p) => (
              <Body key={p}>{val(p)}</Body>
            ))}
          </div>
        </div>
      </Section>

      {/* A03 Leadership: two profiles with names */}
      <Section>
        <div id="leadership" style={{ scrollMarginTop: "var(--header-h)" }}>
          <H2>{val(leadership[0])}</H2>
          <div className="mt-8 grid grid-rows-[auto_auto_auto_1fr] gap-x-12 sm:grid-cols-2 lg:mt-12">
            <Profile lines={leadership.slice(2, 5)} photo={FOUNDER_PHOTOS["haidar-al-gilani"]} locale={locale} />
            <Profile lines={leadership.slice(6, 9)} photo={FOUNDER_PHOTOS["saqib-al-gilani"]} locale={locale} />
          </div>
        </div>
      </Section>

      {/* A03b The Experience Behind Bellvero: table with three rows */}
      <Section surface>
        <H2>{val(experience[0])}</H2>
        <Intro>{val(experience[1])}</Intro>
        <table className="mt-8 w-full border-collapse border-t border-bv-line text-left lg:mt-10">
          <thead className="hidden sm:table-header-group">
            <tr>
              {columns.map((h) => (
                <th key={h} scope="col" className="t-small border-b border-bv-line py-3 pr-6 text-bv-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {experience.slice(3, 6).map((row) => (
              <tr key={row} className="block border-b border-bv-line py-4 sm:table-row sm:py-0">
                {dots(row).map((cell, j) => (
                  <td key={j} className="t-body block py-0.5 text-bv-ink sm:table-cell sm:py-4 sm:pr-6 sm:align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Body className="mt-8">{val(experience[6])}</Body>
      </Section>

      {/* A04 Made for the Project */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <H2 className="lg:col-span-5">{val(workshop[0])}</H2>
          <div className="lg:col-span-7">
            <Body>{val(workshop[1])}</Body>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={linkHref(joinery)} variant="outline">
                {joinery}
              </PrimaryButton>
              <PrimaryButton href={linkHref(metal)} variant="outline">
                {metal}
              </PrimaryButton>
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

      {/* A05 What You Can Expect */}
      <Section surface>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <H2 className="lg:col-span-5">{val(expect[0])}</H2>
          <div className="lg:col-span-7">
            <Body>{val(expect[1])}</Body>
            <TextLink href={linkHref(val(expect[2]))} className="mt-4">
              {val(expect[2])}
            </TextLink>
          </div>
        </div>
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
          <div className="mt-8 grid grid-rows-[auto_auto_auto_1fr] sm:grid-cols-2 lg:mt-12">
            <Profile lines={team.slice(2, 5)} photo={teamPhoto} locale={locale} />
          </div>
        </Section>
      )}

      {/* A08 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P20" />
    </>
  );
}
