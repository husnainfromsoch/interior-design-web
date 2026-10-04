"use client";

import { useEffect } from "react";

/**
 * Changes Sheet D15: accordions expose aria-expanded. The accordions are native
 * <details>, which already work with Enter/Space and without JavaScript; this mirrors
 * each one's open state onto its <summary>.
 */
export default function DetailsA11y() {
  useEffect(() => {
    const sync = (d: HTMLDetailsElement) => d.querySelector(":scope > summary")?.setAttribute("aria-expanded", String(d.open));
    const onToggle = (e: Event) => {
      if (e.target instanceof HTMLDetailsElement) sync(e.target);
    };
    const all = () => document.querySelectorAll("details").forEach(sync);
    all();
    document.addEventListener("toggle", onToggle, true);
    const mo = new MutationObserver(all);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      document.removeEventListener("toggle", onToggle, true);
      mo.disconnect();
    };
  }, []);
  return null;
}
