"use client";

import { useEffect, useSyncExternalStore } from "react";
import { consentSnapshot, readConsent, subscribeConsent } from "@/lib/consent";

// GA4 with Consent Mode v2 (spec §24). Nothing loads before the visitor accepts the
// analytics category; withdrawing consent switches storage off and stops further
// sending immediately. Disabled entirely without NEXT_PUBLIC_GA_ID, and on staging
// (NEXT_PUBLIC_STAGING=1) so test traffic never reaches the production property.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STAGING = process.env.NEXT_PUBLIC_STAGING === "1";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let loadedGtag: Gtag | null = null;

export default function Analytics() {
  const snapshot = useSyncExternalStore(subscribeConsent, consentSnapshot, () => "");

  useEffect(() => {
    if (!GA_ID || STAGING) return;
    const granted = readConsent()?.analytics === true;

    if (!loadedGtag) {
      if (!granted) return;
      window.dataLayer = window.dataLayer ?? [];
      loadedGtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      loadedGtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "granted",
      });
      loadedGtag("js", new Date());
      loadedGtag("config", GA_ID, { anonymize_ip: true });
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
      window.gtag = loadedGtag;
      return;
    }

    loadedGtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
    // trackEvent() only sends while window.gtag exists, so withdrawal stops sending at once.
    window.gtag = granted ? loadedGtag : undefined;
  }, [snapshot]);

  return null;
}
