"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";
import type { MediaAsset } from "@/data/media";
import { cssRatio } from "@/data/media";
import { trackEvent } from "@/lib/analytics";
import Lightbox, { type LightboxLabels } from "./Lightbox";

// Spec §14.4 G1: 4:3 columns plus the WIDE frame(s) full width; one column on mobile.
// Each frame opens the lightbox; caption and disclosure stay visible in the grid.
//
// Scroll rail (owner trial 2026-10-08, NOT client-approved): on wide, tall screens with
// motion allowed the "Gallery rail" block in globals.css turns the same list into a pinned
// row that travels sideways as the page scrolls. This component only writes the progress
// (--gp on the track, --ix per frame for the image drift) and the frame counter; where the
// CSS leaves the stage unpinned it is the plain grid and nothing is written.

const two = (n: number) => String(n).padStart(2, "0");

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
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const { scrollY } = useScroll();

  /** Scroll distance of the pinned run, or null while the stage is not pinned. */
  const travel = useCallback(() => {
    if (!track.current || !stage.current) return null;
    const top = parseFloat(getComputedStyle(stage.current).top);
    const distance = track.current.offsetHeight - stage.current.offsetHeight;
    return Number.isNaN(top) || distance <= 0 ? null : { top, distance };
  }, []);

  const update = useCallback(() => {
    const run = travel();
    if (!run || !track.current) return;
    const progress = Math.min(1, Math.max(0, (run.top - track.current.getBoundingClientRect().top) / run.distance));
    track.current.style.setProperty("--gp", progress.toFixed(4));
    const mid = window.innerWidth / 2;
    let nearest = 0;
    let best = Infinity;
    track.current.querySelectorAll<HTMLElement>("[data-frame]").forEach((frame, i) => {
      const r = frame.getBoundingClientRect();
      const off = (r.left + r.width / 2 - mid) / window.innerWidth;
      frame.style.setProperty("--ix", Math.min(1, Math.max(-1, off)).toFixed(4));
      if (Math.abs(off) < best) {
        best = Math.abs(off);
        nearest = i;
      }
    });
    if (count.current) count.current.textContent = two(nearest + 1);
  }, [travel]);

  useMotionValueEvent(scrollY, "change", update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  /** Keyboard focus on a frame outside the view scrolls the page until that frame is centred. */
  const bringIntoView = (frame: HTMLElement) => {
    const run = travel();
    const list = frame.closest("ul");
    if (!run || !list || !track.current) return;
    const r = frame.getBoundingClientRect();
    if (r.left >= 0 && r.right <= window.innerWidth) return;
    const x = r.left + r.width / 2 - list.getBoundingClientRect().left - window.innerWidth / 2;
    const start = track.current.getBoundingClientRect().top + window.scrollY - run.top;
    window.scrollTo({ top: start + Math.min(run.distance, Math.max(0, x)) });
  };

  if (items.length === 0) return null;

  // WIDE frames lead, then the 4:3 frames fill complete rows: 3 columns for an odd
  // count divisible by 3, otherwise 2. Keeps a frame from sitting alone in a row.
  const ordered = [...items.filter((m) => wide.includes(m.id)), ...items.filter((m) => !wide.includes(m.id))];
  const wides = items.filter((m) => wide.includes(m.id)).length;
  const normals = ordered.length - wides;
  const three = normals % 2 === 1 && normals % 3 === 0;
  const cols = three ? "md:grid-cols-3" : "md:grid-cols-2";
  const span = three ? "md:col-span-3" : "md:col-span-2";

  return (
    <>
      <div ref={track} className="gal-rail mt-8 lg:mt-10" style={{ ["--gn" as string]: normals, ["--gw" as string]: wides } as CSSProperties}>
        <div ref={stage} className="gal-rail__stage">
          <ul className={`gal-rail__list grid gap-8 ${cols}`}>
            {ordered.map((m, i) => {
              const isWide = wide.includes(m.id);
              return (
                <li key={m.id} className={isWide ? span : undefined}>
                  <figure className="m-0">
                    <button
                      type="button"
                      data-frame
                      onFocus={(e) => bringIntoView(e.currentTarget)}
                      onClick={() => {
                        setOpen(i);
                        trackEvent("gallery_open", { asset_id: m.id });
                      }}
                      className="gal-rail__frame group relative block w-full overflow-hidden rounded-lg bg-bv-line/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink"
                      style={{ aspectRatio: cssRatio(isWide ? "21:9" : "4:3") }}
                      aria-label={m.alt}
                    >
                      <span className="gal-rail__drift absolute inset-0 block">
                        <Image src={m.src} alt="" fill sizes={isWide ? "100vw" : three ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover img-zoom" />
                      </span>
                    </button>
                    <figcaption className="t-caption mt-2">{m.caption}</figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
          {/* Rail only: frame counter and a line that fills with the run */}
          <div aria-hidden="true" className="gal-rail__bar">
            <span className="t-small tabular-nums text-bv-ink">
              <span ref={count}>01</span> / {two(ordered.length)}
            </span>
            <span className="gal-rail__line">
              <span />
            </span>
          </div>
        </div>
      </div>
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
