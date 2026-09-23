import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";
import PageHeader from "@/components/ui/PageHeader";
import ProjectHighlights from "@/components/sections/ProjectHighlights";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: `${t(`${slug}.title`)} | Bellvero Group Dubai`,
    description: t(`${slug}.description`),
  };
}

function StorySection({
  tone,
  index,
  flip,
  eyebrow,
  heading,
  body,
  facts,
  image,
  alt,
  caption,
}: {
  tone?: "surface";
  index: string;
  flip?: boolean;
  eyebrow: string;
  heading: string;
  body: string;
  facts: string[][];
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <section className={`${tone === "surface" ? "bg-bv-surface" : ""} py-[64px] lg:py-[104px]`}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className={`reveal lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="font-bv-heading text-[44px] leading-none text-bv-accent/30">{index}</span>
              <span className="h-px w-10 bg-bv-accent/40" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">{eyebrow}</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-6 font-bv-heading text-[32px] leading-[1.15] text-bv-ink sm:text-[40px]">{heading}</h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-bv-muted sm:text-[18px]">{body}</p>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-none border border-bv-line bg-bv-line">
              {facts.map(([label, value]) => (
                <div key={label} className="bg-bv-background/70 px-5 py-4">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-bv-muted">{label}</dt>
                  <dd className="mt-1.5 text-[15px] leading-snug text-bv-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`reveal-scale relative lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
            <div
              aria-hidden
              className={`absolute inset-0 hidden rounded-none border border-bv-accent/30 lg:block ${flip ? "translate-x-5 translate-y-5" : "-translate-x-5 translate-y-5"}`}
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none  lg:aspect-[5/4]">
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/40 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-[2px] bg-bv-white/90 px-4 py-2 text-[13px] font-medium text-bv-ink backdrop-blur">
                {caption}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const t = await getTranslations("ProjectDetail");
  const tProjects = await getTranslations("Projects");
  const tCommon = await getTranslations("Common");
  const tWhatsapp = await getTranslations("WhatsApp");

  const WHATSAPP_NUMBER = "971588099223";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tWhatsapp("message"))}`;

  const title = tProjects(`${slug}.title`);
  const category = tProjects(`${slug}.category`);
  const isCompleted = project.status === "completed";
  const statusLabel = isCompleted ? tCommon("statusCompleted") : tCommon("statusConcept");

  const otherProjects = projects.filter((p) => p.id !== slug).slice(0, 3);
  const highlights = tProjects.raw(`${slug}.highlights`) as { title: string; body: string }[];
  const mainImage = project.gallery[0] ?? project.image;
  const secondaryImage = project.gallery[1] ?? project.image;
  const highlightsImage = project.gallery[2] ?? project.gallery[0] ?? project.image;

  return (
    <>
      <PageHeader eyebrow={category} title={title} images={project.gallery} />

      <section className="py-[48px] md:py-[56px] lg:py-[72px]">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col lg:col-span-6">
              <div className="reveal flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.16em]">
                <span className="inline-flex items-center gap-2.5 text-bv-accent">
                  <span className="h-1.5 w-1.5 rounded-full border border-bv-accent" aria-hidden />
                  {statusLabel}
                </span>
                <span className="reveal-line h-px w-10 bg-bv-line" style={{ ["--reveal-delay" as string]: "200ms" }} aria-hidden />
                <span className="text-bv-muted">{tProjects(`${slug}.location`)}</span>
              </div>

              <div className="reveal mt-8 flex items-start gap-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <span className="reveal-line mt-3 hidden h-px w-12 shrink-0 bg-bv-accent sm:block" style={{ ["--reveal-delay" as string]: "400ms" }} aria-hidden />
                <p className="max-w-[560px] text-[18px] leading-[1.75] text-bv-ink sm:text-[20px]">
                  {tProjects(`${slug}.description`)}
                </p>
              </div>

              <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ ["--reveal-delay" as string]: "240ms" }}>
                <Button href="/contact">{t("requestQuote")}</Button>
                <Button href={whatsappHref} variant="outline" external>
                  {tCommon("whatsappUs")}
                </Button>
              </div>
              <p className="reveal mt-6 text-sm text-bv-muted" style={{ ["--reveal-delay" as string]: "320ms" }}>{t("consultNote")}</p>

              <dl className="mt-10 grid grid-cols-2 gap-x-8">
                {[
                  [t("scope"), tProjects(`${slug}.scope`)],
                  [t("timeline"), tProjects(`${slug}.timeline`)],
                ].map(([label, value], i) => (
                  <div key={label} className="reveal" style={{ ["--reveal-delay" as string]: `${300 + i * 120}ms` }}>
                    <span className="reveal-line block h-px w-full bg-bv-accent/60" style={{ ["--reveal-delay" as string]: `${350 + i * 120}ms` }} aria-hidden />
                    <dt className="mt-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-bv-muted">
                      <span className="tabular-nums text-bv-accent">0{i + 1}</span>
                      {label}
                    </dt>
                    <dd className="mt-2 text-[17px] leading-snug text-bv-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">{t("atAGlance")}</p>
              <ParallaxImage
                src={project.gallery[3] ?? project.gallery[1] ?? project.image}
                alt={`${title} concept`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full bg-bv-surface"
              />
              <div className="mt-4 flex items-center justify-between gap-6 text-[12px] uppercase tracking-[0.16em] text-bv-muted">
                <span>{statusLabel}</span>
                <span>{tProjects(`${slug}.location`)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StorySection
        tone="surface"
        index="01"
        eyebrow={t("briefEyebrow")}
        heading={t("briefHeading")}
        body={tProjects(`${slug}.brief`)}
        facts={[
          [t("scope"), tProjects(`${slug}.scope`)],
          [t("location"), tProjects(`${slug}.location`)],
        ]}
        image={mainImage}
        alt={`${title} overview`}
        caption={title}
      />

      <StorySection
        index="02"
        flip
        eyebrow={t("approachEyebrow")}
        heading={t("approachHeading")}
        body={tProjects(`${slug}.approach`)}
        facts={[
          [t("timeline"), tProjects(`${slug}.timeline`)],
          [t("status"), statusLabel],
        ]}
        image={secondaryImage}
        alt={`${title} detail`}
        caption={category}
      />

      <ProjectHighlights
        eyebrow={t("highlightsEyebrow")}
        heading={t("highlightsHeading")}
        highlights={highlights}
        backgroundImage={highlightsImage}
      />

      {project.gallery.length > 1 && (
        <section className="bg-bv-surface py-24">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
            <div className="reveal max-w-xl">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("gallery")}
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] sm:text-[34px]">{title}</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="reveal-scale group relative aspect-[4/3] overflow-hidden rounded-none border border-bv-line/70 bg-bv-background  transition-all duration-500 ease-out hover:border-bv-accent/40 "
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>

            <p className="reveal mt-8 text-xs text-bv-muted/80">{t("galleryDisclaimer")}</p>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
            <div className="reveal mb-12">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("explore")}
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] sm:text-[34px]">{t("otherProjects")}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.id}`}
                  className="reveal-scale group flex flex-col overflow-hidden rounded-none border border-bv-line/70 bg-bv-background  transition-all duration-200 hover:border-bv-accent/40 "
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={tProjects(`${p.id}.title`)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-2.5 text-[19px] font-medium">{tProjects(`${p.id}.title`)}</h3>
                    <p className="text-sm text-bv-muted">{tProjects(`${p.id}.category`)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
