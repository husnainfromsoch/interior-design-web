// First-party consent record (spec §24): stored in the `bv_consent` cookie for 180 days.
// It holds only the category choices and a timestamp, never enquiry content.

export type Consent = { analytics: boolean; marketing: boolean; ts: number };

export const CONSENT_COOKIE = "bv_consent";
export const CONSENT_MAX_AGE_DAYS = 180;
/** Fired on window whenever the choice changes. */
export const CONSENT_EVENT = "bv:consent";
/** Fired to reopen the dialog (e.g. from the Cookie Settings page). */
export const OPEN_CONSENT_EVENT = "bv:open-consent";

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`))
    ?.slice(CONSENT_COOKIE.length + 1);
  if (!raw) return null;
  try {
    const v = JSON.parse(decodeURIComponent(raw)) as Partial<Consent>;
    return { analytics: Boolean(v.analytics), marketing: Boolean(v.marketing), ts: Number(v.ts) || 0 };
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }) {
  const value: Consent = { ...choice, ts: Date.now() };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Subscribe helper for useSyncExternalStore. */
export function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

/** Stable snapshot for useSyncExternalStore: the raw cookie string. */
export function consentSnapshot() {
  return document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`)) ?? "";
}
