import { sc } from "@/lib/spec";

// The four concept projects (spec §15.15, P15–P18). Titles and scope lines are the
// card copy from C-P01-H03; page copy lives under C-P15… C-P18.

export type ConceptSlug =
  | "coastal-villa-concept"
  | "garden-villa-concept"
  | "tower-residence-concept"
  | "business-district-office-concept";

export type Concept = {
  slug: ConceptSlug;
  page: "P15" | "P16" | "P17" | "P18";
  /** Card number in C-P01-H03 */
  card: 1 | 2 | 3 | 4;
  /** Card image (BV-IMG-03…06), reused on the home page, catalogue and service pages */
  cardImage: string;
  cover: string;
  plan: string;
  mood: string;
  gallery: string[];
  related: [ConceptSlug, ConceptSlug];
  serviceLinks: string[];
  /** Enquiry form service value */
  service: string;
  /** Legacy /portfolio slug; the permanent redirect lives in next.config.ts */
  legacySlug: string;
};

export const CONCEPTS: Concept[] = [
  {
    slug: "coastal-villa-concept",
    page: "P15",
    card: 1,
    cardImage: "BV-IMG-03",
    cover: "BV-IMG-65",
    plan: "BV-IMG-66",
    mood: "BV-IMG-67",
    gallery: ["BV-IMG-68", "BV-IMG-69", "BV-IMG-70", "BV-IMG-71", "BV-IMG-72"],
    related: ["tower-residence-concept", "garden-villa-concept"],
    serviceLinks: ["villa-renovation", "interior-design", "bespoke-joinery"],
    service: "villa",
    legacySlug: "marina",
  },
  {
    slug: "garden-villa-concept",
    page: "P16",
    card: 3,
    cardImage: "BV-IMG-05",
    cover: "BV-IMG-73",
    plan: "BV-IMG-74",
    mood: "BV-IMG-75",
    gallery: ["BV-IMG-76", "BV-IMG-77", "BV-IMG-78", "BV-IMG-79"],
    related: ["coastal-villa-concept", "business-district-office-concept"],
    serviceLinks: ["villa-renovation", "landscape-design", "bespoke-joinery"],
    service: "villa",
    legacySlug: "albarari",
  },
  {
    slug: "tower-residence-concept",
    page: "P17",
    card: 2,
    cardImage: "BV-IMG-04",
    cover: "BV-IMG-80",
    plan: "BV-IMG-81",
    mood: "BV-IMG-82",
    gallery: ["BV-IMG-83", "BV-IMG-84", "BV-IMG-85", "BV-IMG-86"],
    related: ["coastal-villa-concept", "garden-villa-concept"],
    serviceLinks: ["apartment-renovation", "interior-design", "custom-kitchens"],
    service: "apartment",
    legacySlug: "downtown",
  },
  {
    slug: "business-district-office-concept",
    page: "P18",
    card: 4,
    cardImage: "BV-IMG-06",
    cover: "BV-IMG-87",
    plan: "BV-IMG-88",
    mood: "BV-IMG-89",
    gallery: ["BV-IMG-90", "BV-IMG-91", "BV-IMG-92"],
    related: ["tower-residence-concept", "garden-villa-concept"],
    serviceLinks: ["commercial-fit-out", "approvals", "materials-procurement"],
    service: "commercial",
    legacySlug: "jbr",
  },
];

/** Home/catalogue order per C-P01-H03: Coastal Villa, Tower Residence, Garden Villa, Business District Office. */
export const CONCEPTS_IN_CARD_ORDER = [...CONCEPTS].sort((a, b) => a.card - b.card);

export const getConcept = (slug: string) => CONCEPTS.find((c) => c.slug === slug);

export const conceptTitle = (c: Concept, locale: string) => sc("C-P01-H03", `Card ${c.card} title`, locale);
export const conceptScope = (c: Concept, locale: string) => sc("C-P01-H03", `Card ${c.card} scope`, locale);
