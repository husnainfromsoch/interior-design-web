// Insights topics (Insights spec A2). Kept apart from insights.ts so client components
// can import them without bundling the article bodies.

export type TopicSlug = "approvals" | "costs" | "materials" | "joinery" | "design" | "process";

export type Topic = {
  slug: TopicSlug;
  name: { en: string; ru: string };
};

export const TOPICS: Topic[] = [
  { slug: "approvals", name: { en: "Approvals & Permits", ru: "Согласования и разрешения" } },
  { slug: "costs", name: { en: "Costs & Budgeting", ru: "Стоимость и бюджет" } },
  { slug: "materials", name: { en: "Materials & Finishes", ru: "Материалы и отделка" } },
  { slug: "joinery", name: { en: "Bespoke Joinery", ru: "Мебель на заказ" } },
  { slug: "design", name: { en: "Design Ideas", ru: "Идеи дизайна" } },
  { slug: "process", name: { en: "Process & Planning", ru: "Процесс и планирование" } },
];

export function topicName(slug: TopicSlug, locale: string) {
  const topic = TOPICS.find((t) => t.slug === slug);
  return topic ? (locale === "ru" ? topic.name.ru : topic.name.en) : slug;
}
