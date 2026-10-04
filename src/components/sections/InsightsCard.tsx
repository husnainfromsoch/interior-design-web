import Image from "next/image";
import { Link } from "@/i18n/navigation";

export type InsightsCardData = {
  href: string;
  cover: string;
  coverAlt: string;
  topicLabel: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  readingLabel: string;
  aiLabel: string;
  authorLabel?: string;
  articleId?: string;
};

export function InsightsCard({
  data,
  dataAttrs,
}: {
  data: InsightsCardData;
  dataAttrs?: Record<string, string>;
}) {
  return (
    <Link href={data.href} className="group flex h-full flex-col" {...dataAttrs}>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-bv-surface">
        <Image
          src={data.cover}
          alt={data.coverAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="img-zoom object-cover"
        />
      </div>
      <p className="mt-2 t-caption text-bv-muted">{data.aiLabel}</p>

      <span className="mt-4 t-eyebrow text-bv-accent">
        {data.topicLabel}
      </span>
      <h3 className="mt-2 t-h3 text-bv-ink">
        {data.title}
      </h3>
      <p className="mt-3 line-clamp-2 t-body text-bv-muted">{data.excerpt}</p>
      <p className="mt-auto pt-4 t-caption text-bv-muted">
        {data.dateLabel} · {data.readingLabel}
      </p>
    </Link>
  );
}

export function InsightsFeaturedCard({
  data,
  label,
  readMoreLabel,
}: {
  data: InsightsCardData;
  label: string;
  readMoreLabel: string;
}) {
  return (
    <Link href={data.href} className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div className="lg:col-span-7">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-bv-surface">
          <Image
            src={data.cover}
            alt={data.coverAlt}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="img-zoom object-cover"
          />
        </div>
        <p className="mt-2 t-caption text-bv-muted">{data.aiLabel}</p>
      </div>
      <div className="lg:col-span-5">
        <span className="sr-only">{label}</span>
        <span className="t-eyebrow text-bv-accent">
          {data.topicLabel}
        </span>
        <h2 className="mt-4 t-h2 text-bv-ink">
          {data.title}
        </h2>
        <p className="mt-5 line-clamp-3 t-body text-bv-ink/85">{data.excerpt}</p>
        <p className="mt-5 t-caption text-bv-muted">
          {data.authorLabel ? `${data.authorLabel} · ` : ""}
          {data.dateLabel} · {data.readingLabel}
        </p>
        <span aria-hidden="true" className="mt-6 inline-block t-small text-bv-ink">
          {readMoreLabel} →
        </span>
      </div>
    </Link>
  );
}
