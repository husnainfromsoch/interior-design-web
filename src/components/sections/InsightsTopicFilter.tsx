"use client";

import { Link } from "@/i18n/navigation";
import { TOPICS, topicName, type TopicSlug } from "@/data/insights";
import { trackEvent } from "@/lib/analytics";

export default function InsightsTopicFilter({
  active,
  locale,
  allLabel,
  navLabel,
}: {
  active?: TopicSlug;
  locale: string;
  allLabel: string;
  navLabel: string;
}) {
  const item = (isActive: boolean) =>
    `inline-block whitespace-nowrap border-b-2 pb-[6px] font-bv-body text-[15px] font-medium text-bv-ink transition-colors duration-200 ${
      isActive ? "border-bv-accent" : "border-transparent hover:border-bv-line"
    }`;

  return (
    <nav aria-label={navLabel} className="relative">
      <div className="flex gap-8 overflow-x-auto pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link
          href="/insights"
          aria-current={!active ? "true" : undefined}
          className={item(!active)}
          onClick={() => trackEvent("insights_filter", { topic: "all" })}
        >
          {allLabel}
        </Link>
        {TOPICS.map((topic) => (
          <Link
            key={topic.slug}
            href={{ pathname: "/insights", query: { topic: topic.slug } }}
            aria-current={active === topic.slug ? "true" : undefined}
            className={item(active === topic.slug)}
            onClick={() => trackEvent("insights_filter", { topic: topic.slug })}
          >
            {topicName(topic.slug, locale)}
          </Link>
        ))}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bv-background to-transparent md:hidden"
      />
    </nav>
  );
}
