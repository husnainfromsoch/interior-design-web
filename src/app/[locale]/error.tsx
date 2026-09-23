"use client";

import { useEffect } from "react";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-bv-background px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bv-accent">
        Something went wrong
      </p>
      <h1 className="max-w-lg font-bv-heading text-3xl leading-tight text-bv-ink sm:text-4xl">
        This page hit a snag while loading.
      </h1>
      <p className="max-w-md text-bv-muted">
        Please try again, your connection and place in the site are unaffected.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full border border-bv-accent bg-bv-accent px-[28px] py-[14px] text-sm font-semibold tracking-wide text-bv-background shadow-[0_8px_20px_-8px_rgba(124,90,58,0.65)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-bv-accent-hover hover:bg-bv-accent-hover active:translate-y-0"
      >
        Try again
      </button>
    </div>
  );
}
