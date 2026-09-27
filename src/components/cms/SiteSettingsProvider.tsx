"use client";

import { createContext, useContext, type ReactNode } from "react";

// Makes the CMS contact details available to client components (enquiry form, mobile bar)
// without prop-drilling through every page. Renders no markup of its own.

export type ContactSettings = {
  phoneDisplay: string;
  phoneE164: string;
  whatsappNumber: string;
  email: string;
};

const ContactContext = createContext<ContactSettings | null>(null);

export function SiteSettingsProvider({ contact, children }: { contact: ContactSettings; children: ReactNode }) {
  return <ContactContext.Provider value={contact}>{children}</ContactContext.Provider>;
}

export function useContactSettings(): ContactSettings {
  const contact = useContext(ContactContext);
  if (!contact) throw new Error("useContactSettings must be used inside <SiteSettingsProvider>.");
  return contact;
}
