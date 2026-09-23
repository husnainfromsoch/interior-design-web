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
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none bg-bv-surface">
        <Image
          src={data.cover}
          alt={data.coverAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-[11px] text-bv-muted sm:text-[12px]">{data.aiLabel}</p>

      <span className="mt-4 font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-accent">
        {data.topicLabel}
      </span>
      <h3 className="mt-2 font-bv-heading text-[26px] font-medium leading-[1.15] text-bv-ink sm:text-[28px] lg:text-[30px]">
        {data.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-[16px] leading-[1.6] text-bv-muted">{data.excerpt}</p>
      <p className="mt-auto pt-4 text-[13px] text-bv-muted">
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
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none bg-bv-surface">
          <Image
            src={data.cover}
            alt={data.coverAlt}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-[11px] text-bv-muted sm:text-[12px]">{data.aiLabel}</p>
      </div>
      <div className="lg:col-span-5">
        <span className="sr-only">{label}</span>
        <span className="font-bv-body text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-accent">
          {data.topicLabel}
        </span>
        <h2 className="mt-4 font-bv-heading text-[32px] font-medium leading-[1.1] text-bv-ink sm:text-[40px] lg:text-[48px]">
          {data.title}
        </h2>
        <p className="mt-5 line-clamp-3 text-[18px] leading-[1.6] text-bv-ink/85">{data.excerpt}</p>
        <p className="mt-5 text-[13px] text-bv-muted">
          {data.authorLabel ? `${data.authorLabel} · ` : ""}
          {data.dateLabel} · {data.readingLabel}
        </p>
        <span aria-hidden="true" className="mt-6 inline-block font-bv-body text-[15px] font-semibold text-bv-ink">
          {readMoreLabel} →
        </span>
      </div>
    </Link>
  );
}
