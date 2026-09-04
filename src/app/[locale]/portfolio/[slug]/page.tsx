import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import MidCta from "@/components/sections/MidCta";
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
    title: `${t(`${slug}.title`)} | G.A.G Interiors Dubai`,
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

  const title = tProjects(`${slug}.title`);
  const category = tProjects(`${slug}.category`);
  const isCompleted = project.status === "completed";
  const StatusIcon = isCompleted ? CheckCircle2 : Sparkles;
  const statusLabel = isCompleted ? tCommon("statusCompleted") : tCommon("statusConcept");

  const otherProjects = projects.filter((p) => p.id !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={category} title={title} images={project.gallery} />

      <section className="py-24">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="reveal flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider ${
                isCompleted ? "bg-charcoal text-ivory" : "bg-ivory text-wood-dark border border-wood-dark"
              }`}
            >
              <StatusIcon size={12} strokeWidth={2} />
              {statusLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-warm-grey">
              <MapPin size={14} className="text-wood" aria-hidden />
              {tProjects(`${slug}.location`)}
            </span>
          </div>

          <p className="reveal mt-6 max-w-2xl text-[16px] leading-relaxed text-warm-grey">
            {tProjects(`${slug}.description`)}
          </p>

          <div className="reveal mt-10 grid grid-cols-2 gap-6 border-t border-stone pt-8 sm:grid-cols-3 sm:max-w-lg">
            <div>
              <p className="text-xs uppercase tracking-widest text-wood">{t("scope")}</p>
              <p className="mt-1.5 text-sm text-charcoal">{tProjects(`${slug}.scope`)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-wood">{t("timeline")}</p>
              <p className="mt-1.5 text-sm text-charcoal">{tProjects(`${slug}.timeline`)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-wood">{t("location")}</p>
              <p className="mt-1.5 text-sm text-charcoal">{tProjects(`${slug}.location`)}</p>
            </div>
          </div>

          <div className="reveal mt-10">
            <Button href="/contact">{t("requestQuote")}</Button>
          </div>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="bg-beige py-24">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
            <div className="reveal max-w-xl">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
                {t("gallery")}
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px]">{title}</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="reveal-scale group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 bg-ivory shadow-[0_8px_24px_-14px_rgba(46,42,37,0.18)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_24px_48px_-20px_rgba(46,42,37,0.3)]"
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

            <p className="reveal mt-8 text-xs text-warm-grey/80">{t("galleryDisclaimer")}</p>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
            <div className="reveal mb-12">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
                {t("explore")}
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px]">{t("otherProjects")}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.id}`}
                  className="reveal-scale group flex flex-col overflow-hidden rounded-xl border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
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
                    <p className="text-sm text-warm-grey">{tProjects(`${p.id}.category`)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MidCta />
    </>
  );
}
