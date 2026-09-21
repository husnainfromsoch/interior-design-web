import { getServices } from "@/data/services";

export function getNavLinks(
  locale: string,
  t: {
    services: string;
    projects: string;
    process: string;
    about: string;
    contact: string;
  }
) {
  return [
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
}
