import { getServices } from "@/data/services";

export function getNavLinks(
  locale: string,
  t: {
    home: string;
    projects: string;
    services: string;
    why: string;
    about: string;
    contact: string;
  }
) {
  return [
    { label: t.home, href: "/" },
    { label: t.projects, href: "/#projects" },
    {
      label: t.services,
      href: "/services",
      children: getServices(locale).map((service) => ({
        label: service.title,
        href: service.href,
      })),
    },
    { label: t.why, href: "/#why" },
    { label: t.about, href: "/about" },
    { label: t.contact, href: "/contact" },
  ];
}
