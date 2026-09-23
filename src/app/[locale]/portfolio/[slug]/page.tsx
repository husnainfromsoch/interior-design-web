import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Clock, Layers, MapPin, Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Button from "@/components/ui/Button";
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
  const StatusIcon = isCompleted ? CheckCircle2 : Sparkles;
  const statusLabel = isCompleted ? tCommon("statusCompleted") : tCommon("statusConcept");

  const otherProjects = projects.filter((p) => p.id !== slug).slice(0, 3);
  const highlights = tProjects.raw(`${slug}.highlights`) as { title: string; body: string }[];
  const mainImage = project.gallery[0] ?? project.image;
  const secondaryImage = project.gallery[1] ?? project.image;
  const highlightsImage = project.gallery[2] ?? project.gallery[0] ?? project.image;

  return (
    <>
      <PageHeader eyebrow={category} title={title} images={project.gallery} />

      <section className="py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <div className="reveal flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider ${
                    isCompleted ? "bg-bv-ink text-bv-background" : "bg-bv-background text-bv-accent-hover border border-bv-accent-hover"
                  }`}
                >
                  <StatusIcon size={12} strokeWidth={2} />
                  {statusLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-bv-muted">
                  <MapPin size={14} className="text-bv-accent" aria-hidden />
                  {tProjects(`${slug}.location`)}
                </span>
              </div>

              <p className="reveal mt-6 max-w-xl text-[17px] leading-relaxed text-bv-muted">
                {tProjects(`${slug}.description`)}
              </p>

              <div className="reveal mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact">{t("requestQuote")}</Button>
                <Button href={whatsappHref} variant="outline" external>
                  {tCommon("whatsappUs")}
                </Button>
              </div>

              <p className="reveal mt-6 text-sm text-bv-muted/80">{t("consultNote")}</p>
            </div>

            <div className="reveal-scale rounded-2xl border border-bv-line/70 bg-bv-surface p-8 shadow-[0_8px_24px_-14px_rgba(46,42,37,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">{t("atAGlance")}</p>
              <dl className="mt-6 flex flex-col gap-6">
                <div className="flex items-start gap-3.5 border-t border-bv-line/70 pt-5 first:border-t-0 first:pt-0">
                  <StatusIcon size={18} className="mt-0.5 shrink-0 text-bv-accent" aria-hidden />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-bv-accent">{t("status")}</dt>
                    <dd className="mt-1 text-sm text-bv-ink">{statusLabel}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 border-t border-bv-line/70 pt-5">
                  <Layers size={18} className="mt-0.5 shrink-0 text-bv-accent" aria-hidden />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-bv-accent">{t("scope")}</dt>
                    <dd className="mt-1 text-sm text-bv-ink">{tProjects(`${slug}.scope`)}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 border-t border-bv-line/70 pt-5">
                  <Clock size={18} className="mt-0.5 shrink-0 text-bv-accent" aria-hidden />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-bv-accent">{t("timeline")}</dt>
                    <dd className="mt-1 text-sm text-bv-ink">{tProjects(`${slug}.timeline`)}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 border-t border-bv-line/70 pt-5">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-bv-accent" aria-hidden />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-bv-accent">{t("location")}</dt>
                    <dd className="mt-1 text-sm text-bv-ink">{tProjects(`${slug}.location`)}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bv-surface py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="block font-bv-heading text-6xl leading-none text-bv-accent/20 sm:text-7xl">01</span>
              <span className="mt-6 mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("briefEyebrow")}
              </span>
              <h2 className="font-bv-heading text-[26px] leading-snug sm:text-[30px]">{t("briefHeading")}</h2>
              <div className="mt-6 border-l-2 border-bv-accent/30 pl-6">
                <p className="max-w-xl text-[16px] leading-relaxed text-bv-muted">
                  {tProjects(`${slug}.brief`)}
                </p>
              </div>
            </div>
            <div className="reveal-scale relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-bv-line/70 shadow-[0_24px_48px_-24px_rgba(46,42,37,0.3)]">
              <Image
                src={mainImage}
                alt={`${title} overview`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div className="reveal-scale relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-bv-line/70 shadow-[0_24px_48px_-24px_rgba(46,42,37,0.3)] lg:order-1">
              <Image
                src={secondaryImage}
                alt={`${title} detail`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="block font-bv-heading text-6xl leading-none text-bv-accent/20 sm:text-7xl">02</span>
              <span className="mt-6 mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("approachEyebrow")}
              </span>
              <h2 className="font-bv-heading text-[26px] leading-snug sm:text-[30px]">{t("approachHeading")}</h2>
              <div className="mt-6 border-l-2 border-bv-accent/30 pl-6">
                <p className="max-w-xl text-[16px] leading-relaxed text-bv-muted">
                  {tProjects(`${slug}.approach`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h2 className="font-bv-heading text-[28px] sm:text-[34px]">{title}</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="reveal-scale group relative aspect-[4/3] overflow-hidden rounded-2xl border border-bv-line/70 bg-bv-background shadow-[0_8px_24px_-14px_rgba(46,42,37,0.18)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-bv-accent/40 hover:shadow-[0_24px_48px_-20px_rgba(46,42,37,0.3)]"
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
              <h2 className="font-bv-heading text-[28px] sm:text-[34px]">{t("otherProjects")}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.id}`}
                  className="reveal-scale group flex flex-col overflow-hidden rounded-xl border border-bv-line/70 bg-bv-background shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-bv-accent/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={tProjects(`${p.id}.title`)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
