// Global settings record (spec §22 rule 1): legal entity and contact details exist
// here once and are rendered from here everywhere — footer, /about, /contact, privacy.
//
// Legal values are null until the company supplies them in writing. Any block that
// needs them hides itself while they are null; square-bracket placeholders are never
// published (spec §15.17 A04b, §30.8).

export const company = {
  brand: "Bellvero Group",
  phoneE164: "+971588099223",
  phoneDisplay: "+971 58 809 9223",
  whatsappDigits: "971588099223",
  email: "info@bellverogroup.com",
  legal: {
    entityName: null as string | null,
    licenceNumber: null as string | null,
    issuingAuthority: null as string | null,
    activities: { en: null as string | null, ru: null as string | null },
    registeredAddress: null as string | null,
  },
  privacy: {
    contactEmail: null as string | null,
    providers: { en: null as string | null, ru: null as string | null },
    retention: { en: null as string | null, ru: null as string | null },
  },
};

export const hasLegalLine = () =>
  Boolean(company.legal.entityName && company.legal.licenceNumber && company.legal.issuingAuthority);

/** Footer / contact company line (C-FOOTER "Company line"), or null while incomplete. */
export function legalLine(locale: string): string | null {
  if (!hasLegalLine()) return null;
  const { entityName, licenceNumber, issuingAuthority } = company.legal;
  return locale === "ru"
    ? `${entityName} · Лицензия № ${licenceNumber} · ${issuingAuthority}`
    : `${entityName} · Licence no. ${licenceNumber} · ${issuingAuthority}`;
}

/** wa.me link with the spec prefill (C-F1 "WhatsApp prefill"). Never carries form content. */
export function whatsappHref(prefill: string) {
  return `https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(prefill)}`;
}
