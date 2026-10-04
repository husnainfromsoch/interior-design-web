import cards from "@/data/spec/media.json";

// Media library keyed by image slot ID (BV-IMG-01 … BV-IMG-100). Alt text comes from the
// slot's production card (scripts/extract-spec.mjs).
//
// Final Changes Sheet D10: the site shows only the company's own photos and AI images the
// company supplies. A slot without an approved file returns null and its block renders
// the text-only version: no placeholders, no third-party photos, no empty boxes.
// When an image is delivered, add its path here under the slot ID with its kind.
// (The CMS media library replaces this map: Changes Sheet section 5.)

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

// Changes Sheet G7 / copy "Image captions".
const CAPTION = {
  ai: { en: "AI-generated image", ru: "Изображение создано ИИ" },
  company: { en: "Bellvero Group project, {community}", ru: "Проект Bellvero Group, {community}" },
};

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  /** Visible caption: "AI-generated image" or "Bellvero Group project, {community}". */
  caption: string;
  isDrawing: boolean;
  ratio: string;
};

export function getMedia(id: string, locale: string): MediaAsset | null {
  const card = CARDS[id];
  const approved = APPROVED[id];
  if (!card || !approved) return null;
  const lang = locale === "ru" ? "ru" : "en";
  return {
    id,
    src: approved.src,
    alt: (lang === "ru" ? card.altRu : card.altEn) ?? "",
    caption: approved.kind === "ai" ? CAPTION.ai[lang] : CAPTION.company[lang].replace("{community}", approved.community),
    isDrawing: card.assetType === "ai_drawing_illustration",
    ratio: card.ratio ?? "4:3",
  };
}

/** Resolve several slots; slots without an image are dropped so blocks close up. */
export const getMediaList = (ids: string[], locale: string) =>
  ids.map((id) => getMedia(id, locale)).filter((m): m is MediaAsset => m !== null);

/** "16:9" → "16 / 9" for CSS aspect-ratio. */
export const cssRatio = (ratio: string) => ratio.replace(":", " / ");
