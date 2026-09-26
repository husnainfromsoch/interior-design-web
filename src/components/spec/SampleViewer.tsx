"use client";

import { useState } from "react";
import type { MediaAsset } from "@/data/media";
import { trackEvent } from "@/lib/analytics";
import Lightbox, { type LightboxLabels } from "./Lightbox";

// Spec §15.3 D03a: secondary-style button that opens six illustrative drawing views in a
// fixed order. No form, no email gate, no download. `sample_package_open` is a content
// view, not a lead.

export default function SampleViewer({
  items,
  buttonLabel,
  note,
  labels,
}: {
  items: MediaAsset[];
  buttonLabel: string;
  note: string;
  labels: LightboxLabels;
}) {
  const [open, setOpen] = useState<number | null>(null);
  if (items.length === 0) return null;

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={() => {
          setOpen(0);
          trackEvent("sample_package_open", { source_page: window.location.pathname });
        }}
        className="inline-flex h-[52px] items-center rounded-sm border border-bv-ink px-6 text-[14px] font-semibold tracking-[0.02em] text-bv-ink transition-colors hover:bg-bv-ink hover:text-bv-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink"
      >
        {buttonLabel}
      </button>
      <p className="mt-4 max-w-[72ch] text-[15px] leading-[1.6] text-bv-muted">{note}</p>
      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
          labels={labels}
          zoomable
          title={buttonLabel}
        />
      )}
    </div>
  );
}
