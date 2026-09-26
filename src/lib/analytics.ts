type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;

/**
 * GA4 event. No-op until the analytics script has been loaded after cookie consent.
 * Every event carries page_language and page_path (spec §24) so behaviour can be
 * compared between the EN and RU versions. Never pass enquiry content in params.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, {
    page_language: document.documentElement.lang || "en",
    page_path: window.location.pathname,
    ...params,
  });
}
