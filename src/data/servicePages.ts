// The eleven service pages P03–P13 (spec §6). Titles are the §6 page titles, used in
// navigation, related links and metadata. Page content is composed per page in
// src/components/service-pages and read verbatim from the spec copy.

export type ServiceSlug =
  | "interior-design"
  | "landscape-design"
  | "villa-renovation"
  | "apartment-renovation"
  | "commercial-fit-out"
  | "bespoke-joinery"
  | "custom-kitchens"
  | "wardrobes"
  | "approvals"
  | "mep-hvac"
  | "materials-procurement";

export type NavGroup = "design" | "renovation" | "commercial" | "joinery" | "specialist";

export type ServicePage = {
  slug: ServiceSlug;
  page: string;
  title: { en: string; ru: string };
  group: NavGroup;
  /** F1 service value preselected on this page (spec §14.1) */
  formService: string;
  /** Hero image slot, used for cards and the OG image later */
  heroImage: string;
  /** Spec copy block of the hero (H1 + body), e.g. C-P03-D01 */
  heroCode: string;
  /** Old URLs that redirect here permanently */
  legacySlugs?: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  { slug: "interior-design", page: "P03", title: { en: "Interior Design", ru: "Дизайн интерьера" }, group: "design", formService: "design", heroImage: "BV-IMG-14", heroCode: "C-P03-D01" },
  { slug: "landscape-design", page: "P04", title: { en: "Landscape Design", ru: "Ландшафтный дизайн" }, group: "design", formService: "landscape", heroImage: "BV-IMG-25", heroCode: "C-P04-L01" },
  { slug: "villa-renovation", page: "P05", title: { en: "Villa Renovation", ru: "Ремонт вилл" }, group: "renovation", formService: "villa", heroImage: "BV-IMG-29", heroCode: "C-P05-V01", legacySlugs: ["renovation-fit-out-dubai"] },
  { slug: "apartment-renovation", page: "P06", title: { en: "Apartment Renovation", ru: "Ремонт квартир" }, group: "renovation", formService: "apartment", heroImage: "BV-IMG-33", heroCode: "C-P06-A01" },
  { slug: "commercial-fit-out", page: "P07", title: { en: "Commercial Fit-Out", ru: "Коммерческая отделка" }, group: "commercial", formService: "commercial", heroImage: "BV-IMG-39", heroCode: "C-P07-C01" },
  { slug: "bespoke-joinery", page: "P08", title: { en: "Bespoke Joinery & Furniture", ru: "Столярные изделия и мебель" }, group: "joinery", formService: "joinery", heroImage: "BV-IMG-44", heroCode: "C-P08-J01", legacySlugs: ["custom-joinery-furniture"] },
  { slug: "custom-kitchens", page: "P09", title: { en: "Custom Kitchens", ru: "Кухни на заказ" }, group: "joinery", formService: "kitchens", heroImage: "BV-IMG-49", heroCode: "C-P09-K01", legacySlugs: ["custom-kitchens-dubai"] },
  { slug: "wardrobes", page: "P10", title: { en: "Wardrobes & Dressing Rooms", ru: "Шкафы и гардеробные" }, group: "joinery", formService: "wardrobes", heroImage: "BV-IMG-56", heroCode: "C-P10-W01", legacySlugs: ["custom-wardrobes-dubai"] },
  { slug: "approvals", page: "P11", title: { en: "Approvals & NOCs", ru: "Согласования и NOC" }, group: "specialist", formService: "approvals", heroImage: "BV-IMG-59", heroCode: "C-P11-N01", legacySlugs: ["approvals-noc-permits"] },
  { slug: "mep-hvac", page: "P12", title: { en: "MEP & HVAC", ru: "Инженерные системы" }, group: "specialist", formService: "mep", heroImage: "BV-IMG-60", heroCode: "C-P12-E01", legacySlugs: ["hvac-ventilation-dubai"] },
  { slug: "materials-procurement", page: "P13", title: { en: "Materials & Procurement", ru: "Материалы и комплектация" }, group: "specialist", formService: "procurement", heroImage: "BV-IMG-61", heroCode: "C-P13-M01", legacySlugs: ["materials-finishes"] },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
export const serviceTitle = (slug: ServiceSlug, locale: string) => getServicePage(slug)!.title[locale === "ru" ? "ru" : "en"];
export const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;
