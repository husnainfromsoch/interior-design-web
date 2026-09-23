type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;

/** GA4 event. No-op until the analytics script has been loaded after cookie consent. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
