import Image from "next/image";
import { Link } from "@/i18n/navigation";

export type InsightsCardData = {
  href: string;
  cover: string;
  topicLabel: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  readingLabel: string;
  aiLabel: string;
};

export function InsightsCard({ data, index }: { data: InsightsCardData; index?: number }) {
  return (
    <Link href={data.href} className="reveal group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-bv-surface">
        <Image
          src={data.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {typeof index === "number" && (
          <span className="absolute left-4 top-4 font-[var(--font-bv-heading)] text-[13px] font-medium text-bv-white/90">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <p className="mt-3 text-[11px] text-bv-muted/70">{data.aiLabel}</p>

      <div className="mt-3 flex items-center gap-3">
        <span className="h-px w-6 bg-bv-accent transition-[width] duration-300 group-hover:w-10" aria-hidden="true" />
        <span className="font-[var(--font-bv-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-bv-accent">
          {data.topicLabel}
        </span>
      </div>

      <h3 className="mt-3 line-clamp-3 font-[var(--font-bv-heading)] text-[26px] font-medium leading-[1.18] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent">
        {data.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-[15.5px] leading-[1.6] text-bv-muted">{data.excerpt}</p>
      <p className="mt-4 text-[13px] font-medium text-bv-muted/80">
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
    <Link
      href={data.href}
      className="reveal-clip group grid grid-cols-1 gap-10 overflow-hidden rounded-[28px] border border-bv-line/70 bg-bv-surface/60 p-3 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:p-4"
    >
      <div className="lg:col-span-7">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-bv-surface lg:h-full lg:aspect-auto">
          <Image
            src={data.cover}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-5 top-5 rounded-full bg-bv-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-bv-ink backdrop-blur-sm">
            {label}
          </span>
        </div>
        <p className="mt-2 pl-1 text-[11px] text-bv-muted/70">{data.aiLabel}</p>
      </div>
      <div className="flex flex-col justify-center px-1 pb-2 pt-6 lg:col-span-5 lg:px-12 lg:py-10">
        <span className="font-[var(--font-bv-body)] text-[13px] font-semibold uppercase tracking-[0.1em] text-bv-accent">
          {data.topicLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.1] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[42px] lg:text-[46px]">
          {data.title}
        </h2>
        <p className="mt-5 line-clamp-3 max-w-[480px] text-[16.5px] leading-[1.65] text-bv-muted">{data.excerpt}</p>
        <p className="mt-5 text-[13px] font-medium text-bv-muted/80">
          {data.dateLabel} · {data.readingLabel}
        </p>
        <span className="mt-7 inline-flex w-fit items-center gap-2 border-b border-bv-ink/30 pb-1 text-[15px] font-semibold text-bv-ink transition-colors duration-200 group-hover:border-bv-accent group-hover:text-bv-accent">
          {readMoreLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
