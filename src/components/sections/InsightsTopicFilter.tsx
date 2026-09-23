import { Link } from "@/i18n/navigation";
import { TOPICS, topicName, type TopicSlug } from "@/data/insights";

export default function InsightsTopicFilter({
  active,
  locale,
  allLabel,
}: {
  active?: TopicSlug;
  locale: string;
  allLabel: string;
}) {
  return (
    <nav aria-label="Topics" className="relative -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex items-center gap-2.5 whitespace-nowrap pb-1">
        <Link
          href="/insights"
          aria-current={!active ? "true" : undefined}
          className={`rounded-full border px-4 py-2 font-[var(--font-bv-body)] text-[14px] font-medium transition-all duration-200 ${
            !active
              ? "border-bv-ink bg-bv-ink text-bv-background"
              : "border-bv-line text-bv-ink/70 hover:border-bv-ink/40 hover:text-bv-ink"
          }`}
        >
          {allLabel}
        </Link>
        {TOPICS.map((topic) => {
          const isActive = active === topic.slug;
          return (
            <Link
              key={topic.slug}
              href={{ pathname: "/insights", query: { topic: topic.slug } }}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-full border px-4 py-2 font-[var(--font-bv-body)] text-[14px] font-medium transition-all duration-200 ${
                isActive
                  ? "border-bv-ink bg-bv-ink text-bv-background"
                  : "border-bv-line text-bv-ink/70 hover:border-bv-ink/40 hover:text-bv-ink"
              }`}
            >
              {topicName(topic.slug, locale)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
