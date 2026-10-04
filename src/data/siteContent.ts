// Content the owners supply later (Final Changes Sheet, sections 5 and 7). Every block
// that reads from here hides itself while its value is empty: no placeholders (G12).
//
// TODO(CMS): these become the Payload collections and fields of section 5 (`founders`,
// `team`, `completed_projects`, `social_links`, `hero_image`, `reviews`). Until those
// are migrated, the values live here and the public behaviour is already the final one.

export type SocialNetwork = "whatsapp" | "telegram" | "instagram" | "linkedin" | "youtube";

/** G4: icons in this order; an icon shows only when its URL is filled. */
export const SOCIAL_LINKS: Record<SocialNetwork, string | null> = {
  whatsapp: "https://wa.me/971588099223",
  telegram: null,
  instagram: null,
  linkedin: null,
  youtube: null,
};

export type SiteImage = { src: string; alt: { en: string; ru: string } } & ({ kind: "ai" } | { kind: "company"; community: string });

/** D11: Home hero image (AI image BV-IMG-01, later a finished-project photo). Empty → solid #332E2B hero. */
export const HERO_IMAGE: SiteImage | null = null;

export type CompletedProject = {
  title: { en: string; ru: string };
  community: string;
  scope: { en: string; ru: string };
  photos: SiteImage[];
  published: boolean;
};

/**
 * Completed projects (Home H03, About A06, Projects PJ02). The three initial entries from
 * the copy are added as unpublished once the owners supply photos; a card needs a
 * published project with at least one photo.
 */
export const COMPLETED_PROJECTS: CompletedProject[] = [];
export const publishedProjects = () => COMPLETED_PROJECTS.filter((p) => p.published && p.photos.length > 0);

/** About A07 "Our Team": shown only when team photos are uploaded. */
export const TEAM_PHOTOS: Record<string, SiteImage> = {};

/** Founder portraits (Home H07, About A03): optional, shown when uploaded. Never AI portraits. */
export const FOUNDER_PHOTOS: Record<string, SiteImage> = {};
