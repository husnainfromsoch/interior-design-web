"use client";

import type { ReactNode } from "react";

// Fee card CTA (spec P03 D04): scrolls to F1 on this page and passes the chosen package
// to the form. Without JavaScript it is a plain link to #project-enquiry.
export const PACKAGE_EVENT = "bv:package";

export default function PackageCta({ packageName, className, children }: { packageName: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#project-enquiry"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(PACKAGE_EVENT, { detail: packageName }))}
    >
      {children}
    </a>
  );
}
