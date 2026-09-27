import { SERVICE_PAGES } from "../../data/servicePages";
import type { ConceptSlug } from "../../data/concepts";

// Link targets editors can choose from (developer-controlled). Editors pick a page from
// this list instead of typing URLs, so navigation can never point at a page that does not
// exist. When Pages, Services and Projects move into the CMS these become relationships.

const PROJECT_ROUTES: { slug: ConceptSlug; label: string }[] = [
  { slug: "coastal-villa-concept", label: "Coastal Villa" },
  { slug: "garden-villa-concept", label: "Garden Villa" },
  { slug: "tower-residence-concept", label: "Tower Residence" },
  { slug: "business-district-office-concept", label: "Business District Office" },
];

export const ROUTE_OPTIONS = [
  { label: "Home", value: "/" },
  { label: "Services", value: "/services" },
  { label: "Projects", value: "/projects" },
  { label: "Our Process", value: "/process" },
  { label: "About", value: "/about" },
  { label: "Insights", value: "/insights" },
  { label: "Contact", value: "/contact" },
  { label: "Warranty", value: "/warranty" },
  { label: "Privacy", value: "/privacy" },
  { label: "Cookies", value: "/cookies" },
  ...SERVICE_PAGES.map((s) => ({ label: `Service: ${s.title.en}`, value: `/services/${s.slug}` })),
  ...PROJECT_ROUTES.map((p) => ({ label: `Project: ${p.label}`, value: `/projects/${p.slug}` })),
];

export const SERVICE_OPTIONS = SERVICE_PAGES.map((s) => ({ label: s.title.en, value: s.slug }));
