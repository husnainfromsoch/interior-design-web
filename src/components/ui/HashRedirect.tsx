"use client";

import { useEffect } from "react";

/**
 * Sends an old #anchor to its new one on the same page (Changes Sheet P19 #2:
 * #bespoke-joinery scrolls to #individual-services).
 */
export default function HashRedirect({ from, to }: { from: string; to: string }) {
  useEffect(() => {
    const go = () => {
      if (window.location.hash !== `#${from}`) return;
      history.replaceState(null, "", `#${to}`);
      document.getElementById(to)?.scrollIntoView({ block: "start" });
    };
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [from, to]);
  return null;
}
