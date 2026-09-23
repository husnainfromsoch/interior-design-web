"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-2 text-xs text-bv-muted transition-colors duration-200 hover:text-bv-accent"
    >
      {label}
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bv-field-border/40 transition-[background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-accent group-hover:bg-bv-accent group-hover:text-bv-white motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <ArrowUp className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
