"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { MediaAsset } from "@/data/media";

// Shared lightbox for G1 galleries and the D03a sample drawing viewer (spec §14.4,
// §15.3 D03a, §25): focus trapped while open, Escape closes and returns focus to the
// trigger, arrow keys navigate, counter "3 of 8", caption and disclosure always visible.

export type LightboxLabels = {
  close: string;
  prev: string;
  next: string;
  /** Template such as "{n} of {total}" */
  counter: string;
  unavailable: string;
  zoomIn?: string;
  zoomOut?: string;
};

export default function Lightbox({
  items,
  index,
  onIndex,
  onClose,
  labels,
  zoomable,
  title,
}: {
  items: MediaAsset[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
  labels: LightboxLabels;
  zoomable?: boolean;
  title: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const item = items[index];
  const total = items.length;

  const go = useCallback(
    (delta: number) => {
      setZoom(1);
      onIndex((index + delta + total) % total);
    },
    [index, total, onIndex]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])");
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  if (!item) return null;
  const btn =
    "flex h-11 min-w-11 items-center justify-center rounded-sm border border-bv-white/30 px-3 text-[14px] font-medium text-bv-white transition-colors hover:bg-bv-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-white";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex flex-col bg-bv-ink/95 px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4 sm:px-8"
    >
      <div className="flex items-center justify-between gap-4 text-bv-white">
        <p className="text-[14px] tabular-nums" aria-live="polite">
          {labels.counter.replace("{n}", String(index + 1)).replace("{total}", String(total))}
        </p>
        <div className="flex gap-2">
          {zoomable && (
            <>
              <button type="button" className={btn} onClick={() => setZoom((z) => Math.max(1, z - 0.5))} aria-label={labels.zoomOut}>
                −
              </button>
              <button type="button" className={btn} onClick={() => setZoom((z) => Math.min(3, z + 0.5))} aria-label={labels.zoomIn}>
                +
              </button>
            </>
          )}
          <button type="button" className={btn} onClick={onClose} data-autofocus>
            {labels.close}
          </button>
        </div>
      </div>

      <figure className="m-0 flex min-h-0 flex-1 flex-col">
        <div
          className="relative mt-4 min-h-0 flex-1 overflow-auto rounded-lg"
          onWheel={
            zoomable
              ? (e) => {
                  if (!e.ctrlKey) return;
                  setZoom((z) => Math.min(3, Math.max(1, z - e.deltaY * 0.01)));
                }
              : undefined
          }
        >
          {failed[item.id] ? (
            <div className="flex h-full items-center justify-center bg-bv-surface text-[15px] text-bv-muted">{labels.unavailable}</div>
          ) : (
            <div className="relative h-full w-full origin-center transition-transform duration-200" style={{ transform: `scale(${zoom})` }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="100vw"
                className={item.isDrawing ? "object-contain bg-bv-surface p-4" : "object-contain"}
                onError={() => setFailed((f) => ({ ...f, [item.id]: true }))}
              />
            </div>
          )}
        </div>
        <figcaption className="mt-3 flex flex-col gap-1 text-bv-white">
          {item.caption && <span className="text-[14px]">{item.caption}</span>}
          <span className="text-[12px] tracking-[0.04em] text-bv-white/80">{item.disclosure}</span>
        </figcaption>
      </figure>

      {total > 1 && (
        <div className="mt-3 flex justify-between">
          <button type="button" className={btn} onClick={() => go(-1)}>
            ← {labels.prev}
          </button>
          <button type="button" className={btn} onClick={() => go(1)}>
            {labels.next} →
          </button>
        </div>
      )}
    </div>
  );
}
