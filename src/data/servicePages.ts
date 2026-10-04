// The twelve service pages P03–P13 and P23 (Final Changes Sheet v3.0). Titles are the
// page names from the copy file's Services menu, used in navigation, breadcrumbs and
// the form. Page content is rendered from the final copy (src/lib/final.ts) by
// src/components/final/DocPage.tsx.

export type ServiceSlug =
  | "interior-design"
  | "landscape-design"
  | "villa-renovation"
  | "apartment-renovation"
  | "commercial-fit-out"
  | "bespoke-joinery"
  | "custom-kitchens"
  | "wardrobes"
  | "metal-aluminium"
  | "approvals"
  | "mep-hvac"
  | "materials-procurement";

export type ServicePage = {
  slug: ServiceSlug;
  /** Page code in the final copy file, e.g. "P03" */
  page: string;
  title: { en: string; ru: string };
  /** F1 service value preselected on this page (Changes Sheet G5) */
  formService: string;
  /** Hero image slot; the hero is text-only while the slot has no image (D10) */
  heroImage?: string;
  /** Old URLs that redirect here permanently */
  legacySlugs?: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  { slug: "interior-design", page: "P03", title: { en: "Interior Design", ru: "Дизайн интерьера" }, formService: "design", heroImage: "BV-IMG-14" },
  { slug: "landscape-design", page: "P04", title: { en: "Landscaping & Pools", ru: "Ландшафт и бассейны" }, formService: "landscape", heroImage: "BV-IMG-25" },
  { slug: "villa-renovation", page: "P05", title: { en: "Villa Renovation", ru: "Ремонт вилл" }, formService: "villa", heroImage: "BV-IMG-29", legacySlugs: ["renovation-fit-out-dubai"] },
  { slug: "apartment-renovation", page: "P06", title: { en: "Apartment Renovation", ru: "Ремонт квартир" }, formService: "apartment", heroImage: "BV-IMG-33" },
  { slug: "commercial-fit-out", page: "P07", title: { en: "Commercial Fit-Out", ru: "Коммерческая отделка" }, formService: "commercial", heroImage: "BV-IMG-39" },
  { slug: "bespoke-joinery", page: "P08", title: { en: "Bespoke Joinery", ru: "Мебель на заказ" }, formService: "joinery", heroImage: "BV-IMG-44", legacySlugs: ["custom-joinery-furniture"] },
  { slug: "custom-kitchens", page: "P09", title: { en: "Custom Kitchens", ru: "Кухни на заказ" }, formService: "kitchens", heroImage: "BV-IMG-49", legacySlugs: ["custom-kitchens-dubai"] },
  { slug: "wardrobes", page: "P10", title: { en: "Wardrobes & Dressing Rooms", ru: "Гардеробные и шкафы" }, formService: "wardrobes", heroImage: "BV-IMG-56", legacySlugs: ["custom-wardrobes-dubai"] },
  { slug: "metal-aluminium", page: "P23", title: { en: "Metal & Aluminium", ru: "Металл и алюминий" }, formService: "metal" },
  { slug: "approvals", page: "P11", title: { en: "Approvals & NOC", ru: "Согласования и NOC" }, formService: "approvals", heroImage: "BV-IMG-59", legacySlugs: ["approvals-noc-permits"] },
  { slug: "mep-hvac", page: "P12", title: { en: "MEP Systems", ru: "Инженерные системы" }, formService: "mep", heroImage: "BV-IMG-60", legacySlugs: ["hvac-ventilation-dubai"] },
  { slug: "materials-procurement", page: "P13", title: { en: "Materials & Procurement", ru: "Комплектация" }, formService: "procurement", heroImage: "BV-IMG-61", legacySlugs: ["materials-finishes"] },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
export const serviceTitle = (slug: ServiceSlug, locale: string) => getServicePage(slug)!.title[locale === "ru" ? "ru" : "en"];
export const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;
