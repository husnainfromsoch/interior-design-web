import "server-only";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Navigation as NavigationDoc, SiteSetting as SiteSettingsDoc } from "@/payload-types";
import type { ServiceSlug } from "@/data/servicePages";
import { TAGS } from "./tags";

// The public site's only way to read CMS content. Published versions only (drafts are for
// the draft-mode preview, added later). Results are cached per language and tagged, and a
// publish in the admin revalidates the tag (src/cms/hooks/revalidate.ts).
//
// Fail closed: if a required value is missing (for example a database that was never
// seeded) rendering stops with a clear error instead of publishing blank contact details
// or an empty menu. During a build that fails the build, so the live site stays as it was.

type Locale = "en" | "ru";
// Per-build/deployment cache scope (set in next.config.ts), so cached CMS data is never
// shared between deployments or database branches.
const SCOPE = process.env.CMS_CACHE_SCOPE ?? "unscoped";
const asLocale = (locale: string): Locale => (locale === "ru" ? "ru" : "en");

async function loadGlobal<T>(slug: "site-settings" | "navigation", locale: Locale) {
  const payload = await getPayload({ config });
  return (await payload.findGlobal({ slug, locale, draft: false, depth: 0, overrideAccess: true })) as T;
}

function required<T>(value: T | null | undefined, what: string): T {
  if (value === null || value === undefined || (typeof value === "string" && !value.trim()) || (Array.isArray(value) && value.length === 0)) {
    throw new Error(`CMS content missing: ${what}. Publish it in /admin (or run the seed on a new database).`);
  }
  return value;
}

export type SiteSettings = {
  contact: {
    phoneDisplay: string;
    phoneE164: string;
    whatsappNumber: string;
    email: string;
    workingHours: string;
    visitsLine: string;
  };
  legal: {
    entityName: string | null;
    licenceNumber: string | null;
    issuingAuthority: string | null;
    activities: string | null;
    registeredAddress: string | null;
  };
  privacy: { contactEmail: string | null; providers: string | null; retention: string | null };
};

export const getSiteSettings = (locale: string) => {
  const lang = asLocale(locale);
  return unstable_cache(
    async (): Promise<SiteSettings> => {
      const doc = await loadGlobal<SiteSettingsDoc>("site-settings", lang);
      const c = doc.contact;
      const at = (field: string) => `Site Settings › ${field} (${lang.toUpperCase()})`;
      return {
        contact: {
          phoneDisplay: required(c?.phoneDisplay, at("Phone (as displayed)")),
          phoneE164: required(c?.phoneE164, at("Phone (for dialling)")),
          whatsappNumber: required(c?.whatsappNumber, at("WhatsApp number")),
          email: required(c?.email, at("Email")),
          workingHours: required(c?.workingHours, at("Working hours")),
          visitsLine: required(c?.visitsLine, at("Visits and meetings")),
        },
        legal: {
          entityName: doc.legal?.entityName || null,
          licenceNumber: doc.legal?.licenceNumber || null,
          issuingAuthority: doc.legal?.issuingAuthority || null,
          activities: doc.legal?.activities || null,
          registeredAddress: doc.legal?.registeredAddress || null,
        },
        privacy: {
          contactEmail: doc.privacy?.contactEmail || null,
          providers: doc.privacy?.providers || null,
          retention: doc.privacy?.retention || null,
        },
      };
    },
    ["cms", SCOPE, "site-settings", lang],
    { tags: [TAGS.siteSettings] }
  )();
};

export type NavLink = { label: string; href: string };
export type NavigationData = {
  header: {
    servicesLabel: string;
    serviceGroups: { label: string; services: ServiceSlug[] }[];
    specialistLabel: string;
    specialistServices: ServiceSlug[];
    allServicesLabel: string;
    links: NavLink[];
    ctaLabel: string;
  };
  footer: { exploreHeading: string; exploreLinks: NavLink[] };
};

export const getNavigation = (locale: string) => {
  const lang = asLocale(locale);
  return unstable_cache(
    async (): Promise<NavigationData> => {
      const doc = await loadGlobal<NavigationDoc>("navigation", lang);
      const at = (field: string) => `Navigation › ${field} (${lang.toUpperCase()})`;
      const links = (rows: { label?: string | null; route?: string | null }[] | null | undefined, where: string) =>
        required(rows, at(where)).map((r, i) => ({
          label: required(r.label, at(`${where} ${i + 1} label`)),
          href: required(r.route, at(`${where} ${i + 1} page`)),
        }));
      const h = doc.header;
      const f = doc.footer;
      return {
        header: {
          servicesLabel: required(h?.servicesLabel, at("Services menu label")),
          serviceGroups: required(h?.serviceGroups, at("Services panel columns")).map((g, i) => ({
            label: required(g.label, at(`Services panel column ${i + 1} heading`)),
            services: required(g.services, at(`Services panel column ${i + 1} services`)) as ServiceSlug[],
          })),
          specialistLabel: required(h?.specialistLabel, at("Specialist row heading")),
          specialistServices: required(h?.specialistServices, at("Specialist row")) as ServiceSlug[],
          allServicesLabel: required(h?.allServicesLabel, at("Link to all services")),
          links: links(h?.links, "Menu item"),
          ctaLabel: required(h?.ctaLabel, at("Call-to-action button")),
        },
        footer: {
          exploreHeading: required(f?.exploreHeading, at("Footer links heading")),
          exploreLinks: links(f?.exploreLinks, "Footer link"),
        },
      };
    },
    ["cms", SCOPE, "navigation", lang],
    { tags: [TAGS.navigation] }
  )();
};
