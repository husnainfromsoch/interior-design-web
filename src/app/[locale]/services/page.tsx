import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CtaBand, H2, Intro, MediaFigure, Section, SplitHero, TextLink } from "@/components/spec/blocks";
import { FaqSection, FORM_ANCHOR } from "@/components/service-pages/common";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { getMedia } from "@/data/media";
import { serviceHref, serviceTitle, type ServiceSlug } from "@/data/servicePages";
import { linkText, pair, sc } from "@/lib/spec";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { clsx as cx } from "clsx";

// Spec §15.2 P02 Services: S01–S05.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${locale === "ru" ? "Услуги" : "Services"} | Bellvero Group`,
    description: sc("C-P02-S01", "body", locale),
  };
}

const ROWS: { image: string; links: { slug: ServiceSlug; hash?: string }[]; id?: string }[] = [
  { image: "BV-IMG-10", links: [{ slug: "interior-design" }, { slug: "landscape-design" }] },
  { image: "BV-IMG-11", links: [{ slug: "villa-renovation" }, { slug: "apartment-renovation" }], id: "residential-renovation" },
  { image: "BV-IMG-12", links: [{ slug: "commercial-fit-out" }] },
  { image: "BV-IMG-13", links: [{ slug: "bespoke-joinery", hash: "#capabilities" }, { slug: "custom-kitchens" }, { slug: "wardrobes" }] },
];
const SPECIALIST: ServiceSlug[] = ["approvals", "mep-hvac", "materials-procurement"];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = (code: string, label: string) => sc(code, label, locale);

  return (
    <>
      <SplitHero
        title={c("C-P02-S01", "H1")}
        body={c("C-P02-S01", "body")}
        cta={{ label: sc("UI", "cta.primary", locale), href: FORM_ANCHOR }}
        media={getMedia("BV-IMG-09", locale)}
      />

      {/* S02: image 40 % / text 60 %, image side left, right, left, right; image above text on mobile */}
      <Section>
        <div className="flex flex-col gap-14 lg:gap-[104px]">
          {ROWS.map((row, i) => {
            const { title, body } = pair(c("C-P02-S02", `row ${i + 1}`));
            const media = getMedia(row.image, locale);
            const imageRight = i % 2 === 1;
            return (
              <article
                key={row.image}
                id={row.id}
                className={cx(
                  "grid scroll-mt-[104px] items-center gap-8 lg:gap-16",
                  // the image column stays 40 % on both sides, so every row's image is the same size
                  imageRight ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"
                )}
              >
                {media && (
                  <MediaFigure asset={media} ratio="4:3" className={imageRight ? "lg:order-2" : undefined} sizes="(min-width: 1024px) 40vw, 100vw" />
                )}
                <div className={imageRight ? "reveal lg:order-1" : "reveal"} style={{ ["--reveal-delay" as string]: "150ms" }}>
                  <span aria-hidden="true" className="block font-bv-heading text-[56px] font-medium leading-none text-bv-accent/35 lg:text-[80px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-bv-heading text-[28px] font-medium leading-[1.15] text-bv-ink md:text-[34px] lg:text-[44px]">{title}</h2>
                  <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.65] text-bv-muted lg:text-[18px]">{body}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-1">
                    {row.links.map((l) => (
                      <li key={l.slug}>
                        <TextLink href={`${serviceHref(l.slug)}${l.hash ?? ""}`}>{serviceTitle(l.slug, locale)}</TextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <H2>{c("C-P02-S03", "H2")}</H2>
        <Intro>{c("C-P02-S03", "intro")}</Intro>
        <ul className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-12">
          {SPECIALIST.map((slug, i) => {
            const { title, body } = pair(c("C-P02-S03", `item ${i + 1}`));
            return (
              <li key={slug} className="reveal" style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
                <Link
                  href={serviceHref(slug)}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-bv-line bg-bv-background p-7 transition-colors duration-300 hover:border-bv-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink lg:p-9"
                >
                  <span aria-hidden="true" className="absolute inset-0 origin-bottom scale-y-0 bg-bv-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 motion-reduce:transition-none" />
                  <span aria-hidden="true" className="relative font-bv-heading text-[40px] leading-none text-bv-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative mt-8 font-bv-heading text-[26px] font-medium leading-[1.2] text-bv-ink transition-colors duration-300 group-hover:text-bv-background lg:text-[30px]">
                    {linkText(title)}
                  </span>
                  <span className="relative mt-3 flex-1 text-[16px] leading-[1.65] text-bv-muted transition-colors duration-300 group-hover:text-bv-background/80">{body}</span>
                  <ArrowRight aria-hidden="true" strokeWidth={1.6} className="arrow-nudge relative mt-8 h-6 w-6 text-bv-accent transition-colors duration-300 group-hover:text-bv-background" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <FaqSection code="C-P02-S04" locale={locale} />

      {/* S05: fees are not shown here; a text link points to the fee block on P03 */}
      <EnquiryForm leadSource="P02" />
      <Section compact>
        <CtaBand href="/services/interior-design#fees" text={c("C-P02-S05", "link")} />
      </Section>
    </>
  );
}
