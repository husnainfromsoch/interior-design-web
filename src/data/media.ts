import cards from "@/data/spec/media.json";

// Media library keyed by image slot ID (BV-IMG-01 … BV-IMG-100). Alt text comes from the
// slot's production card (scripts/extract-spec.mjs).
//
// FINAL: when an approved image is delivered, add its path here under the slot ID with its
// kind. (The CMS media library replaces this map: Changes Sheet section 5.)
// TEMPORARY (owner decision 2026-10-07, overrides Changes Sheet D10 for now): until then
// the slot shows a placeholder photo from TEMP_POOL, labelled "Temporary image" instead of
// the AI caption. Temporary photos must all be replaced before launch.

type Card = {
  id: string;
  assetType?: string;
  ratio?: string;
  altEn?: string;
  altRu?: string;
};
const CARDS = cards as Record<string, Card>;

type Approved = { src: string; kind: "ai" } | { src: string; kind: "company"; community: string };

/** Approved, published assets: "BV-IMG-01": { src: "/media/bv-img-01.webp", kind: "ai" } */
const APPROVED: Record<string, Approved> = {};

const u = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;
const TEMP_POOL = [
  "1600210491892-03d54c0aaf87", "1600607687939-ce8a6c25118c", "1618221195710-dd6b41faaea6",
  "1613977257363-707ba9348227", "1613977257592-4871e5fcd7c4", "1615309662243-70f6df917b59",
  "1583847268964-b28dc8f51f92", "1566305977571-5666677c6e98", "1580587771525-78b9dba3b914",
  "1564078516393-cf04bd966897", "1597088136953-db42ae225804", "1598928506311-c55ded91a20c",
  "1608303588026-884930af2559", "1611021061285-16c871740efa", "1621535884102-d13e00c76283",
  "1638284457192-27d3d0ec51aa", "1668602824652-61b9e53d7be5", "1682888813913-e13f18692019",
  "1693892985308-44965a6060d1", "1719324923613-ff0884b031ed", "1748679979601-dc9ec43d900d",
  "1749930206000-179d0b85aa7e", "1751283226474-869937c075d6", "1753893558281-9acda0662bbd",
  "1754788358645-d6e6cca12e25", "1755816764831-2803235f0099", "1758448755856-01d3add0177b",
  "1758565811572-22622d91c2e1", "1760072513376-67a46aab0fd1", "1764526624453-db32c24eca55",
  "1783667818798-38903081f98f", "1659930087003-2d64e33181f7", "1663811397133-2d1f5addd9d5",
].map(u);
const TEMP_CAPTION = { en: "Temporary image · final visual in production", ru: "Временное изображение · финальная визуализация готовится" };

/** Temporary photo for a slot that has no approved file yet; `seed` picks it from the pool. */
export function tempImage(seed: string | number, locale: string) {
  const n = typeof seed === "number" ? seed : [...seed].reduce((a, c) => a + c.charCodeAt(0), 0);
  return { src: TEMP_POOL[n % TEMP_POOL.length], caption: TEMP_CAPTION[locale === "ru" ? "ru" : "en"] };
}

// Changes Sheet G7 / copy "Image captions".
const CAPTION = {
  ai: { en: "AI-generated image", ru: "Изображение создано ИИ" },
  company: { en: "Bellvero Group project, {community}", ru: "Проект Bellvero Group, {community}" },
};

/**
 * Image-slot placeholders (owner request 2026-10-05): on local and staging builds an empty
 * slot shows a box in the slot's ratio with a watermark, so reviewers see where images go.
 * Never in production: the Changes Sheet (D10, G12) forbids placeholders on the public site.
 */
export const SHOW_PLACEHOLDERS = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_STAGING === "1";

export type MediaAsset = {
  id: string;
  /** True for a staging placeholder: no file yet, render the watermark box. */
  placeholder?: boolean;
  src: string;
  alt: string;
  /** Visible caption: "AI-generated image", "Bellvero Group project, {community}", or the temporary-image notice. */
  caption: string;
  /** True while the slot shows a temporary photo instead of an approved file. */
  temporary?: boolean;
  isDrawing: boolean;
  ratio: string;
};

export function getMedia(id: string, locale: string): MediaAsset | null {
  const card = CARDS[id];
  const approved = APPROVED[id];
  if (!card) return null;
  const lang = locale === "ru" ? "ru" : "en";
  if (!approved) {
    const temp = tempImage(Number(id.replace(/\D/g, "")) || 0, locale);
    return {
      id,
      src: temp.src,
      alt: (lang === "ru" ? card.altRu : card.altEn) ?? "",
      caption: temp.caption,
      temporary: true,
      isDrawing: card.assetType === "ai_drawing_illustration",
      ratio: card.ratio ?? "4:3",
    };
  }
  return {
    id,
    src: approved.src,
    alt: (lang === "ru" ? card.altRu : card.altEn) ?? "",
    caption: approved.kind === "ai" ? CAPTION.ai[lang] : CAPTION.company[lang].replace("{community}", approved.community),
    isDrawing: card.assetType === "ai_drawing_illustration",
    ratio: card.ratio ?? "4:3",
  };
}

/** Resolve several slots to real images only (galleries, viewers); empty slots are dropped. */
export const getMediaList = (ids: string[], locale: string) =>
  ids.map((id) => getMedia(id, locale)).filter((m): m is MediaAsset => m !== null && !m.placeholder);

/** Resolve several slots including staging placeholders (image rows and grids). */
export const getMediaSlots = (ids: string[], locale: string) =>
  ids.map((id) => getMedia(id, locale)).filter((m): m is MediaAsset => m !== null);

/** "16:9" → "16 / 9" for CSS aspect-ratio. */
export const cssRatio = (ratio: string) => ratio.replace(":", " / ");
