"use client";

import { useState } from "react";

export default function CopyLinkButton({
  label,
  copiedLabel,
  title,
}: {
  label: string;
  copiedLabel: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = window.location.href.split("#")[0];
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    try {
      if (isMobile && typeof navigator.share === "function") {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user cancelled or clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="text-[13px] text-bv-muted underline underline-offset-4 transition-colors hover:text-bv-ink"
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
