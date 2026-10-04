import Image from "next/image";
import { H2, H3, Intro, Section, TextLink } from "@/components/spec/blocks";
import { publishedProjects, type SiteImage } from "@/data/siteContent";
import { block, g, linkHref, val } from "@/lib/final";

// Blocks shared by several pages of the final build: completed project cards (Home H03,
// Projects PJ02, About A06) and the captions of images supplied through the CMS.

/** Caption of a CMS image: "AI-generated image" or "Bellvero Group project, {community}" (D10). */
export function imageCaption(image: SiteImage, locale: string) {
  return image.kind === "ai" ? g("captions", "AI image", locale) : g("captions", "Company photo", locale).replace("{community}", image.community);
}

/** Completed project cards (not links). Nothing is rendered until a project with a photo is published. */
export function CompletedProjectCards({ locale }: { locale: string }) {
  const projects = publishedProjects();
  if (projects.length === 0) return null;
  const lang = locale === "ru" ? "ru" : "en";
  return (
    <div className="mt-8 grid grid-rows-[auto_auto_auto] gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
      {projects.map((p) => (
        <article key={p.title.en} className="row-span-3 grid grid-rows-subgrid gap-y-3">
          <figure className="m-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-bv-surface">
              <Image src={p.photos[0].src} alt={p.photos[0].alt[lang]} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="t-caption mt-2">{imageCaption(p.photos[0], locale)}</figcaption>
          </figure>
          <H3>{p.title[lang]}</H3>
          <p className="t-body text-bv-muted">{p.scope[lang]}</p>
        </article>
      ))}
    </div>
  );
}

/**
 * Completed projects block with its heading and intro from the copy. The whole block is
 * hidden until at least one project with a photo is published (Changes Sheet P01 #4, P14 #2).
 */
export function CompletedProjects({ page, id, locale, surface }: { page: "P01" | "P14"; id: string; locale: string; surface?: boolean }) {
  if (publishedProjects().length === 0) return null;
  const lines = block(page, id, locale);
  const below = lines.find((l) => /^(Link below|Ссылка под блоком): /.test(l));
  return (
    <Section surface={surface}>
      <H2>{val(lines[0])}</H2>
      <Intro>{val(lines[1])}</Intro>
      <CompletedProjectCards locale={locale} />
      {below && (
        <div className="mt-8">
          <TextLink href={linkHref(val(below))}>{val(below)}</TextLink>
        </div>
      )}
    </Section>
  );
}
