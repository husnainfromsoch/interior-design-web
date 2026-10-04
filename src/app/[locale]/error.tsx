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
      <p className="t-eyebrow text-bv-accent">
        Something went wrong
      </p>
      <h1 className="t-h1 max-w-lg text-bv-ink ">
        This page hit a snag while loading.
      </h1>
      <p className="t-body max-w-md text-bv-muted">
        Please try again, your connection and place in the site are unaffected.
      </p>
      <button
        type="button"
        onClick={reset}
        className="t-button inline-flex h-[52px] items-center rounded-sm bg-bv-accent px-7 text-bv-white transition-colors duration-200 hover:bg-bv-accent-hover"
      >
        Try again
      </button>
    </div>
  );
}
