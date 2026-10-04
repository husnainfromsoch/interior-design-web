import type { ReactNode } from "react";
import { SOCIAL_LINKS, type SocialNetwork } from "@/data/siteContent";

// Changes Sheet G4. Used in the footer, on the Contact page and in the mobile menu, so it
// has no server-only imports.

// G4 social icons: monochrome line icons, 20 px, in this order.
const ICONS: Record<SocialNetwork, { name: string; shape: ReactNode }> = {
  whatsapp: {
    name: "WhatsApp",
    shape: (
      <>
        <path d="M4 20 L5.3 15.8 A8 8 0 1 1 8.3 18.8 Z" />
        <path d="M9.5 9 C9.8 11.7 12.3 14.2 15 14.5 L16 12.9 L14.2 11.9 L13.3 12.8 C12.4 12.3 11.7 11.6 11.2 10.7 L12.1 9.8 L11.1 8 Z" />
      </>
    ),
  },
  telegram: {
    name: "Telegram",
    shape: (
      <>
        <path d="M20.5 4.5 L3.5 11.2 L8.8 13 L10.6 18.5 L13.5 15.2 L17.6 18.3 Z" />
        <path d="M8.8 13 L16.5 7.8 L10.6 14.6" />
      </>
    ),
  },
  instagram: {
    name: "Instagram",
    shape: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle cx="12" cy="12" r="3.8" />
        <path d="M17 7 L17.01 7" />
      </>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    shape: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="1" />
        <path d="M8 10.5 L8 16.5" />
        <path d="M8 7.5 L8.01 7.5" />
        <path d="M11.5 16.5 L11.5 10.5" />
        <path d="M11.5 13.2 C11.5 11.6 12.5 10.5 13.9 10.5 C15.3 10.5 16 11.5 16 13 L16 16.5" />
      </>
    ),
  },
  youtube: {
    name: "YouTube",
    shape: (
      <>
        <rect x="3" y="6.5" width="18" height="11" rx="2" />
        <path d="M10.2 9.3 L10.2 14.7 L14.8 12 Z" />
      </>
    ),
  },
};

export const SOCIAL_ORDER: SocialNetwork[] = ["whatsapp", "telegram", "instagram", "linkedin", "youtube"];

/** Social icon row; renders nothing when no network has a URL. `light` for dark backgrounds. */
export default function SocialIcons({ className, light }: { className?: string; light?: boolean }) {
  const links = SOCIAL_ORDER.filter((n) => SOCIAL_LINKS[n]);
  if (links.length === 0) return null;
  return (
    <ul className={`flex items-center gap-2 ${className ?? ""}`}>
      {links.map((n) => (
        <li key={n}>
          <a
            href={SOCIAL_LINKS[n]!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ICONS[n].name}
            className={`flex h-11 w-11 items-center justify-center transition-colors duration-200 hover:text-bv-accent ${light ? "text-bv-background" : "text-bv-ink"}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[n].shape}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
