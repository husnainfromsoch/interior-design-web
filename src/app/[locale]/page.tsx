import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import Parallax from "@/components/ui/Parallax";
import HeroMedia from "@/components/sections/HeroMedia";
import HowWeWorkPanel from "@/components/sections/HowWeWorkPanel";
import ServicesDirectionGrid from "@/components/sections/ServicesDirectionGrid";
import StagesTimeline from "@/components/sections/StagesTimeline";
import { CompletedProjects } from "@/components/final/shared";
import { formCopy } from "@/components/final/formCopy";
import { FactsStrip, H2, Intro, PrimaryButton, ProjectCards, RiseWords, Section, TextLink } from "@/components/spec/blocks";
import { Link } from "@/i18n/navigation";
import { CONCEPTS_IN_CARD_ORDER } from "@/data/concepts";
import { block, dots, linkHref, meta, numbered, titled, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P01 Home. Texts: final copy, blocks H01–H09 in the order of the copy. Look: the
// pre-sheet home sections (video hero, direction cards, responsibility panel, stages
// timeline, family block, FAQ), restored at the owner's request on 2026-10-07.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P01", locale), "/", locale);
}

// Temporary photos (owner decision 2026-10-07): replaced when the final images arrive.
const DIRECTION_IMAGES = [
  "/service images/imgi_5_StudioPPARK-81+Squam+11.jpg",
  "/service images/imgi_43_Nachman_12.12.17_01.jpg",
  "/service images/imgi_31_magnum-opus_full-screen-push-1_desktop.jpg",
  "/service images/imgi_57_DSC_0116.jpg",
  "/service images/imgi_60_DSC_0210.jpg",
];
const TEAM_ICONS = ["clipboard-list", "shield-check", "refresh-ccw", "eye"];
const TEAM_SLIDES = [
  "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg",
  "/visuals/PHOTO-2025-04-15-09-20-47(4).jpg",
  "/visuals/PHOTO-2025-04-15-09-20-47(9).jpg",
  "/visuals/PHOTO-2025-04-15-11-32-01.jpg",
];
const STAGE_IMAGES = [
  "/visuals/PHOTO-2025-04-15-09-20-47(1).jpg",
  "/visuals/PHOTO-2025-04-15-09-20-47(10).jpg",
  "/visuals/PHOTO-2025-04-15-11-30-59(1).jpg",
  "/visuals/PHOTO-2025-04-15-12-00-05.jpg",
  "/visuals/PHOTO-2025-04-15-12-14-49.jpg",
];

const outlineButton =
  "btn-shine inline-flex h-[48px] shrink-0 items-center gap-2 rounded-sm border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";
const outlineOnLight = `${outlineButton} border-bv-field-border text-bv-ink hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white`;
const outlineOnDark = `${outlineButton} border-bv-white/25 text-bv-white hover:border-bv-white hover:bg-bv-white hover:text-bv-ink`;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isRu = locale === "ru";
  const b = (id: string) => block("P01", id, locale);
  const tHero = await getTranslations({ locale, namespace: "Hero" });
  const tTeam = await getTranslations({ locale, namespace: "HomeResponsibility" });
  const tFamily = await getTranslations({ locale, namespace: "HomeFamily" });

  const hero = b("H01");
  const services = b("H02");
  const concepts = b("H04");
  const team = b("H05");
  const stages = b("H06");
  const founders = b("H07");
  const faq = b("H08");
  const sideBox = titled(val(faq[8]));
  const [sideText, sideButton] = sideBox.body.split(/ (?:Button|Кнопка): /);
  const subtitle = val(hero[2]).split(" ");
  const allServices = val(services[6]);
  const processLink = val(stages[6]);

  // Owner decision 2026-10-08: Home shows the first four directions in one row. The fifth
  // line of the copy (05 Metal & Aluminium) is not shown here; the page stays in the menu.
  const directions = services.slice(1, 5).map((line, i) => {
    const { n, title, body } = numbered(line);
    const [text, links] = body.split(/ (?:Links?|Ссылк[аи]): /);
    return {
      id: n,
      num: n,
      image: DIRECTION_IMAGES[i],
      title,
      body: text,
      viewLabel: "",
      hrefs: dots(links).map((label) => ({ href: linkHref(label), label })),
    };
  });

  return (
    <>
      {/* H01 Hero: full-bleed video (dark background when it cannot play), text on the left */}
      <section
        data-hero
        className="relative flex w-full items-end overflow-hidden bg-bv-ink font-bv-body text-bv-white"
        style={{ minHeight: "clamp(620px, calc(100svh - 88px), 880px)" }}
      >
        <HeroMedia
          videoSrc="/videos/hero.mp4"
          labels={{ pause: tHero("pauseVideo"), play: tHero("playVideo") }}
        />

        {/* Scrim: darker over the text zone (left), lighter on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-bv-ink/65 via-bv-ink/35 to-bv-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/70 via-transparent to-transparent" />

        <div className="hero-scroll-out relative w-full">
          <div className="mx-auto w-full max-w-[1320px] px-4 pb-20 sm:px-8 sm:pb-24 lg:px-[60px]">
            <div className="max-w-[780px] lg:w-7/12">
              <p style={{ animationDelay: "0.1s" }} className="hero-in flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-white/90">
                {val(hero[0])}
              </p>
              <h1
                className={`mt-5 font-bv-heading font-medium tracking-tight ${isRu ? "text-[38px] leading-[1.06] sm:text-[56px] lg:text-[72px]" : "text-[42px] leading-[1.03] sm:text-[62px] lg:text-[80px]"}`}
              >
                <RiseWords text={val(hero[1])} start={200} step={70} />
              </h1>
              <p className="tagline-in mt-6 max-w-xl text-[18px] leading-[1.55] text-bv-white sm:text-[20px]">
                {subtitle.map((word, i) => (
                  <Fragment key={i}>
                    <span className="tagline-word" style={{ animationDelay: `${0.5 + i * 0.045}s` }}>
                      {word}
                    </span>
                    {i < subtitle.length - 1 ? " " : ""}
                  </Fragment>
                ))}
              </p>
              <div style={{ animationDelay: "0.6s" }} className="hero-in mt-9">
                <a
                  href="#project-enquiry"
                  data-magnetic
                  className="press btn-shine inline-flex h-[52px] items-center rounded-sm bg-bv-accent px-8 text-sm font-semibold tracking-[0.02em] text-bv-white duration-200 hover:bg-bv-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-white"
                >
                  {val(hero[3])}
                </a>
              </div>
              <p style={{ animationDelay: "0.75s" }} className="hero-in mt-4 text-[13px] leading-[1.5] text-bv-white/85">
                {val(hero[4])}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H01b Facts strip */}
      <FactsStrip display facts={dots(b("H01b")[0])} />

      {/* H02 Explore Our Services: direction cards with image, text and links, four per row */}
      <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <H2 sweep>{val(services[0])}</H2>
            <Link href={linkHref(allServices)} className={`${outlineOnLight} hidden sm:inline-flex`}>
              {allServices}
            </Link>
          </div>
          <div className="mt-12 lg:mt-16">
            <ServicesDirectionGrid items={directions} />
          </div>
          <div className="reveal mt-10 sm:hidden">
            <Link href={linkHref(allServices)} className={outlineOnLight}>
              {allServices}
            </Link>
          </div>
        </div>
      </section>

      {/* H03 From Our Projects: hidden until a completed project with a photo is published */}
      <CompletedProjects page="P01" id="H03" locale={locale} surface />

      {/* H04 Concept Projects */}
      <Section>
        <H2>{val(concepts[0])}</H2>
        <Intro>{val(concepts[1])}</Intro>
        <ProjectCards slugs={CONCEPTS_IN_CARD_ORDER.map((c) => c.slug)} locale={locale} />
        <TextLink href={linkHref(val(concepts[3]))} className="mt-10">
          {val(concepts[3])}
        </TextLink>
      </Section>

      {/* H05 One Team. One Responsibility.: four points beside a slow image sequence */}
      <section className="bv-flow bg-bv-surface py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <HowWeWorkPanel
            header={
              <div className="reveal max-w-3xl">
                <H2>{val(team[0])}</H2>
                <p className="mt-3 text-[17px] leading-[1.55] text-bv-muted">{val(team[1])}</p>
              </div>
            }
            steps={team.slice(2, 6).map((line, i) => ({ id: String(i), icon: TEAM_ICONS[i], ...titled(line) }))}
            slides={TEAM_SLIDES.map((src) => ({ src, alt: tTeam("imageAlt") }))}
          />
        </div>
      </section>

      {/* H06 From First Conversation to Handover: five steps on the dark timeline */}
      <section className="bg-bv-ink py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <H2 light className="min-w-0 max-w-2xl sm:flex-1">
              {val(stages[0])}
            </H2>
            <Link href={linkHref(processLink)} className={`${outlineOnDark} self-start sm:self-auto`}>
              {processLink}
            </Link>
          </div>
          <div className="mt-10 lg:mt-12">
            <StagesTimeline
              steps={stages.slice(1, 6).map((line, i) => {
                const { title, body } = numbered(line);
                return { title, body, image: STAGE_IMAGES[i] };
              })}
            />
          </div>
        </div>
      </section>

      {/* H07 Founders: heading, text and two role lines with names, image beside */}
      <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-14 lg:px-[60px]">
          <div className="reveal lg:col-span-7">
            <H2>{val(founders[0])}</H2>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{val(founders[1])}</p>

            <ul className="mt-8 divide-y divide-bv-line border-y border-bv-line">
              {founders.slice(2, 4).map((line, i) => {
                const [name, role] = dots(val(line));
                return (
                  <li
                    key={name}
                    className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                    style={{ ["--reveal-delay" as string]: `${150 + i * 110}ms` }}
                  >
                    <span className="font-bv-heading text-[22px] font-medium leading-[1.2] text-bv-ink lg:text-[24px]">{name}</span>
                    <span className="text-[14px] leading-[24px] text-bv-muted">{role}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Link href="/about#leadership" className={outlineOnLight}>
                {val(founders[4]).replace(/\s*→.*$/, "")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="reveal-clip relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bv-surface sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <Parallax>
                <Image src="/visuals/PHOTO-2025-04-15-12-33-54(5).jpg" alt={tFamily("imageAlt")} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/45 via-bv-ink/0 to-bv-ink/0" />
            </div>
          </div>
        </div>
      </section>

      {/* H08 FAQ: sticky heading and side box on the left, numbered accordion on the right */}
      <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="reveal lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <H2>{val(faq[0])}</H2>
                <div className="mt-10 rounded-lg bg-bv-surface p-7 sm:p-9">
                  <p className="font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink sm:text-[28px]">{sideBox.title}</p>
                  <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.65] text-bv-muted">{sideText}</p>
                  <PrimaryButton className="mt-7">{sideButton}</PrimaryButton>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-bv-line">
                {faq.slice(1, 8).map((line, i) => {
                  const { title, body } = numbered(line);
                  return (
                    <details key={i} name="home-faq" open={i === 0} className="reveal group border-b border-bv-line" style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                      <summary className="flex cursor-pointer list-none items-start gap-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink sm:gap-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                        <span aria-hidden="true" className="w-8 flex-none pt-1.5 font-bv-heading text-[15px] text-bv-muted transition-colors duration-300 group-open:text-bv-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-bv-heading text-[20px] font-medium leading-[1.3] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[24px]">
                          {title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-sm border border-bv-field-border/50 text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-ink group-open:border-bv-accent group-open:bg-bv-accent group-open:text-bv-white motion-reduce:transition-none"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <p className="max-w-[62ch] pb-8 pl-[52px] pr-4 text-[16px] leading-[1.7] text-bv-muted sm:pl-[64px] sm:pr-16 sm:text-[17px]">{body}</p>
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H09 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P01" />
    </>
  );
}
