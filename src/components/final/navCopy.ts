import { dots, g, globalTable, linkHref } from "@/lib/final";

// Header navigation and Services menu from the final copy (Global › Header, Global ›
// Services menu; Changes Sheet G1, G2). Built on the server and passed to the client
// header as props.

export type NavLink = { label: string; href: string };
export type HeaderNav = {
  servicesLabel: string;
  serviceGroups: { label: string; services: NavLink[] }[];
  allServices: NavLink;
  links: NavLink[];
  ctaLabel: string;
  mainLabel: string;
};

// The header "Nav" row lists these pages in this order.
const NAV_ROUTES = ["/services", "/projects", "/process", "/about", "/contact"];
// Footer "Column 1 links".
const FOOTER_ROUTES = ["/services", "/projects", "/process", "/about", "/insights", "/contact"];

export function headerNav(locale: string): HeaderNav {
  const ru = locale === "ru";
  const [servicesLabel, ...rest] = dots(g("header", "Nav", locale));
  const menu = globalTable("servicesMenu");
  const groups = menu.filter((r) => r[0] !== "Link at bottom");
  const bottom = menu.find((r) => r[0] === "Link at bottom")!;
  return {
    servicesLabel,
    serviceGroups: groups.map((r) => ({
      label: ru ? r[2] : r[0],
      services: dots(ru ? r[3] : r[1]).map((label) => ({ label, href: linkHref(label) })),
    })),
    allServices: { label: ru ? bottom[3] : bottom[1], href: "/services" },
    links: rest.map((label, i) => ({ label, href: NAV_ROUTES[i + 1] })),
    ctaLabel: g("header", "Button", locale),
    mainLabel: ru ? "Основная навигация" : "Main navigation",
  };
}

export const footerLinks = (locale: string): NavLink[] =>
  dots(g("footer", "Column 1 links", locale)).map((label, i) => ({ label, href: FOOTER_ROUTES[i] }));
