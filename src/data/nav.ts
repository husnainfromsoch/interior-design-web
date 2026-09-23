import { getServices } from "@/data/services";

export function getNavLinks(
  locale: string,
  t: {
    services: string;
    projects: string;
    process: string;
    about: string;
    contact: string;
    insights?: string;
  },
  options?: { includeInsights?: boolean }
) {
  const links = [
    {
      label: t.services,
      href: "/services",
      children: getServices(locale).map((service) => ({
        label: service.title,
        href: service.href,
      })),
    },
    { label: t.projects, href: "/portfolio" },
    { label: t.process, href: "/process" },
    { label: t.about, href: "/about" },
    { label: t.contact, href: "/contact" },
  ];

  // Insights moves into the main header nav once 10+ articles are published (spec A1).
  if (options?.includeInsights && t.insights) {
    links.push({ label: t.insights, href: "/insights" });
  }

  return links;
}
