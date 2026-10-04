import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { CompletedProjects, imageCaption } from "@/components/final/shared";
import { formCopy } from "@/components/final/formCopy";
import { Eyebrow, FactsStrip, Faq, H2, H3, ImageSlot, Intro, PrimaryButton, ProjectCards, Section, Steps, TextLink } from "@/components/spec/blocks";
import { SHOW_PLACEHOLDERS } from "@/data/media";
import { CONCEPTS_IN_CARD_ORDER } from "@/data/concepts";
import { HERO_IMAGE } from "@/data/siteContent";
import { block, dots, linkHref, meta, numbered, titled, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P01 Home (Final Changes Sheet, P01). Blocks H01–H09 in the order of the copy.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P01", locale), "/", locale);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === "ru" ? "ru" : "en";
  const b = (id: string) => block("P01", id, locale);
  const tImage = await getTranslations({ locale, namespace: "HomeResponsibility" });

  const hero = b("H01");
  const services = b("H02");
  const concepts = b("H04");
  const team = b("H05");
  const stages = b("H06");
  const founders = b("H07");
  const faq = b("H08");
  const sideBox = titled(val(faq[8]));
  const [sideText, sideButton] = sideBox.body.split(/ (?:Button|Кнопка): /);

  return (
    <>
      {/* H01 Hero (D11): full-bleed image with white text on the left and a left-side
          gradient. Until an image is uploaded: solid #332E2B, text #F7F4EE. */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-bv-ink lg:min-h-[680px]">
        {HERO_IMAGE && (
          <>
            <Image src={HERO_IMAGE.src} alt={HERO_IMAGE.alt[lang]} fill priority sizes="100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-bv-ink/80 via-bv-ink/45 to-transparent" />
          </>
        )}
        <div className="relative mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-8 sm:py-[72px] lg:px-[60px] lg:py-[104px]">
          <div className="max-w-[860px]">
            <Eyebrow light>{val(hero[0])}</Eyebrow>
            <h1 className="t-h1-xl mt-5 text-bv-background">{val(hero[1])}</h1>
            <p className="t-body mt-6 max-w-[620px] text-bv-background">{val(hero[2])}</p>
            <div className="mt-8">
              <PrimaryButton>{val(hero[3])}</PrimaryButton>
            </div>
            <p className="t-caption mt-3 text-bv-background">{val(hero[4])}</p>
          </div>
          {HERO_IMAGE && <p className="t-caption mt-10 text-bv-background">{imageCaption(HERO_IMAGE, locale)}</p>}
          {/* Staging only: marks the full-bleed hero image slot (D11) */}
          {!HERO_IMAGE && SHOW_PLACEHOLDERS && <p className="t-caption mt-10 inline-block border border-dashed border-bv-background/40 px-3 py-2 text-bv-background">BV-IMG-01 · full-bleed hero image</p>}
        </div>
      </section>

      {/* H01b Facts strip */}
      <div className="pt-6 lg:pt-0">
        <FactsStrip facts={dots(b("H01b")[0])} />
      </div>

      {/* H02 Explore Our Services: 5 cards in one row on desktop, 2 columns on tablet, 1 on
          mobile. Subgrid keeps the divider, description and link row on one line (D5). */}
      <Section>
        <H2>{val(services[0])}</H2>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-x-6">
          {services.slice(1, 6).map((line) => {
            const { n, title, body } = numbered(line);
            const [text, links] = body.split(/ (?:Links?|Ссылк[аи]): /);
            return (
              <article key={n} className={`${SHOW_PLACEHOLDERS ? "row-span-4" : "row-span-3"} grid grid-rows-subgrid gap-y-0`}>
                {/* Card image slot: hidden in production until an image is supplied (D10) */}
                <ImageSlot label={`H02 card ${n}`} ratio="4:3" className="mb-5" />
                <div className="pb-5">
                  <span className="t-number block text-bv-accent">{n}</span>
                  <H3 className="mt-3">{title}</H3>
                </div>
                <p className="t-body border-t border-bv-line pt-5 text-bv-muted">{text}</p>
                <ul className="mt-4 border-t border-bv-line pt-2">
                  {dots(links).map((label) => (
                    <li key={label}>
                      <TextLink href={linkHref(label)}>{label}</TextLink>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10">
          <TextLink href={linkHref(val(services[6]))}>{val(services[6])}</TextLink>
        </div>
      </Section>

      {/* H03 From Our Projects: hidden until a completed project with a photo is published */}
      <CompletedProjects page="P01" id="H03" locale={locale} surface />

      {/* H04 Concept Projects */}
      <Section surface>
        <H2>{val(concepts[0])}</H2>
        <Intro>{val(concepts[1])}</Intro>
        <ProjectCards slugs={CONCEPTS_IN_CARD_ORDER.map((c) => c.slug)} locale={locale} />
        <div className="mt-10">
          <TextLink href={linkHref(val(concepts[3]))}>{val(concepts[3])}</TextLink>
        </div>
      </Section>

      {/* H05 One Team. One Responsibility.: one static image, 2 × 2 text grid, no icons */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <H2>{val(team[0])}</H2>
            <Intro>{val(team[1])}</Intro>
            <div className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:mt-10">
              {team.slice(2, 6).map((line) => {
                const { title, body } = titled(line);
                return (
                  <div key={title} className="border-t border-bv-line py-5">
                    <H3>{title}</H3>
                    <p className="t-body mt-2 text-bv-muted">{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-bv-surface lg:col-span-5">
            <Image src="/visuals/PHOTO-2025-04-15-12-21-17(1).jpg" alt={tImage("imageAlt")} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      {/* H06 From First Conversation to Handover: all 5 steps visible, a numbered row on desktop */}
      <Section surface>
        <H2>{val(stages[0])}</H2>
        <Steps horizontal steps={stages.slice(1, 6).map((line) => numbered(line))} />
        <div className="mt-8">
          <TextLink href={linkHref(val(stages[6]))}>{val(stages[6])}</TextLink>
        </div>
      </Section>

      {/* H07 Founders: heading, text and two role lines with names */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <H2 className="lg:col-span-5">{val(founders[0])}</H2>
          <div className="lg:col-span-7">
            <p className="t-body max-w-[760px] text-bv-ink">{val(founders[1])}</p>
            <ul className="mt-8 border-t border-bv-line">
              {founders.slice(2, 4).map((line) => {
                const [name, role] = dots(val(line));
                return (
                  <li key={name} className="grid gap-x-8 gap-y-1 border-b border-bv-line py-4 sm:grid-cols-2">
                    <span className="t-h3">{name}</span>
                    <span className="t-small self-center text-bv-muted">{role}</span>
                  </li>
                );
              })}
            </ul>
            <TextLink href="/about#leadership" className="mt-6">
              {val(founders[4]).replace(/\s*→.*$/, "")}
            </TextLink>
          </div>
        </div>
      </Section>

      {/* H08 FAQ: accordion, all closed by default */}
      <Section>
        <Faq
          heading={val(faq[0])}
          items={faq.slice(1, 8).map((line) => {
            const { title, body } = numbered(line);
            return { q: title, a: body };
          })}
          aside={
            <div className="bg-bv-surface p-6 sm:p-8">
              <H3>{sideBox.title}</H3>
              <p className="t-body mt-3 text-bv-muted">{sideText}</p>
              <div className="mt-6">
                <PrimaryButton>{sideButton}</PrimaryButton>
              </div>
            </div>
          }
        />
      </Section>

      {/* H09 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P01" />
    </>
  );
}
