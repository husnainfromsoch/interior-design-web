"use client";

import type { ReactNode } from "react";
import { OPEN_CONSENT_EVENT } from "@/lib/consent";

/** Footer "Cookie Settings": opens the consent settings (Changes Sheet D9). Without JavaScript it is a link to /cookies. */
export default function CookieSettingsLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
      }}
    >
      {children}
    </a>
  );
}
