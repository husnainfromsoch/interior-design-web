"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaAsset } from "@/data/media";
import { cssRatio } from "@/data/media";
import { trackEvent } from "@/lib/analytics";
import Lightbox, { type LightboxLabels } from "./Lightbox";

// Spec §14.4 G1: 4:3 columns plus the WIDE frame(s) full width; one column on mobile.
// Each frame opens the lightbox; caption and disclosure stay visible in the grid.

export default function Gallery({
  items,
  wide = [],
  labels,
}: {
  items: MediaAsset[];
  wide?: string[];
  labels: LightboxLabels & { galleryTitle: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  if (items.length === 0) return null;

  // WIDE frames lead, then the 4:3 frames fill complete rows: 3 columns for an odd
  // count divisible by 3, otherwise 2. Keeps a frame from sitting alone in a row.
  const ordered = [...items.filter((m) => wide.includes(m.id)), ...items.filter((m) => !wide.includes(m.id))];
  const normals = ordered.length - items.filter((m) => wide.includes(m.id)).length;
  const three = normals % 2 === 1 && normals % 3 === 0;
  const cols = three ? "md:grid-cols-3" : "md:grid-cols-2";
  const span = three ? "md:col-span-3" : "md:col-span-2";

  return (
    <>
      <ul className={`mt-8 grid gap-8 lg:mt-10 ${cols}`}>
        {ordered.map((m, i) => {
          const isWide = wide.includes(m.id);
          return (
            <li key={m.id} className={isWide ? span : undefined}>
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(i);
                    trackEvent("gallery_open", { asset_id: m.id });
                  }}
                  className="group relative block w-full overflow-hidden rounded-lg bg-bv-line/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink"
                  style={{ aspectRatio: cssRatio(isWide ? "21:9" : "4:3") }}
                  aria-label={m.alt}
                >
                  <Image src={m.src} alt="" fill sizes={isWide ? "100vw" : three ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover img-zoom" />
                </button>
                <figcaption className="mt-2 flex flex-col gap-1">
                  {m.caption && <span className="text-[14px] leading-[1.5] text-bv-ink">{m.caption}</span>}
                  <span className="text-[11px] leading-[1.4] tracking-[0.04em] text-bv-muted lg:text-[12px]">{m.disclosure}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
      {open !== null && (
        <Lightbox
          items={ordered}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
          labels={labels}
          title={labels.galleryTitle}
        />
      )}
    </>
  );
}
