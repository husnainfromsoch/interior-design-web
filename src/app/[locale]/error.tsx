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
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-ivory px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wood">
        Something went wrong
      </p>
      <h1 className="max-w-lg font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
        This page hit a snag while loading.
      </h1>
      <p className="max-w-md text-warm-grey">
        Please try again — your connection and place in the site are unaffected.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full border border-wood bg-wood px-[28px] py-[14px] text-sm font-semibold tracking-wide text-ivory shadow-[0_8px_20px_-8px_rgba(124,90,58,0.65)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-dark hover:bg-wood-dark active:translate-y-0"
      >
        Try again
      </button>
    </div>
  );
}
