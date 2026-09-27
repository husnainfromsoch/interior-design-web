// Contact and legal helpers over the CMS Site Settings (formerly src/data/company.ts).
// Pure functions so server and client components share them.

type Legal = { entityName: string | null; licenceNumber: string | null; issuingAuthority: string | null };

/** wa.me link with the spec prefill (C-F1 "WhatsApp prefill"). Never carries form content. */
export function whatsappHref(whatsappNumber: string, prefill: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefill)}`;
}

export const hasLegalLine = (legal: Legal) => Boolean(legal.entityName && legal.licenceNumber && legal.issuingAuthority);

/** Footer / contact company line (C-FOOTER "Company line"), or null while incomplete. */
export function legalLine(legal: Legal, locale: string): string | null {
  if (!hasLegalLine(legal)) return null;
  const { entityName, licenceNumber, issuingAuthority } = legal;
  return locale === "ru"
    ? `${entityName} · Лицензия № ${licenceNumber} · ${issuingAuthority}`
    : `${entityName} · Licence no. ${licenceNumber} · ${issuingAuthority}`;
}
