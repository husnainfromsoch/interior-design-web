import cards from "@/data/spec/media.json";

// Media library keyed by spec asset ID (BV-IMG-01 … BV-IMG-100). Alt text, captions and
// AI disclosure come verbatim from the spec's production cards (§18) via
// scripts/extract-spec.mjs.
//
// FINAL: when an approved AI asset is delivered, put its path in APPROVED under its ID.
// TEMPORARY: until then the slot shows a placeholder photo from TEMP_POOL and is labelled
// "Temporary image" instead of the AI disclosure. Temporary photos are for the review
// build only and must all be replaced before launch.

type Card = {
  id: string;
  assetType?: string;
  ratio?: string;
  altEn?: string;
  altRu?: string;
  captionEn?: string;
  captionRu?: string;
  disclosureEn?: string;
  disclosureRu?: string;
};
const CARDS = cards as Record<string, Card>;

/** Approved, published assets: "BV-IMG-01": "/media/bv-cp01-living-wide-ai-01.webp" */
const APPROVED: Record<string, string> = {};

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

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  /** AI disclosure, or the temporary-image notice while the slot has no approved asset. */
  disclosure: string;
  temporary: boolean;
  isDrawing: boolean;
  ratio: string;
};

export function getMedia(id: string, locale: string): MediaAsset | null {
  const card = CARDS[id];
  if (!card) return null;
  const ru = locale === "ru";
  const approved = APPROVED[id];
  const index = Number(id.replace(/\D/g, "")) || 0;
  const caption = (ru ? card.captionRu : card.captionEn)?.trim();
  return {
    id,
    src: approved ?? TEMP_POOL[index % TEMP_POOL.length],
    alt: (ru ? card.altRu : card.altEn) ?? "",
    caption: caption || undefined,
    disclosure: approved
      ? ((ru ? card.disclosureRu : card.disclosureEn) ?? "")
      : ru
        ? "Временное изображение · финальная визуализация готовится"
        : "Temporary image · final visual in production",
    temporary: !approved,
    isDrawing: card.assetType === "ai_drawing_illustration",
    ratio: card.ratio ?? "4:3",
  };
}

/** Resolve several slots; unpublished ones are dropped so blocks close up (spec §16 "Empty media"). */
export const getMediaList = (ids: string[], locale: string) =>
  ids.map((id) => getMedia(id, locale)).filter((m): m is MediaAsset => m !== null);

/** "16:9" → "16 / 9" for CSS aspect-ratio. */
export const cssRatio = (ratio: string) => ratio.replace(":", " / ");
