import { getTranslations } from "next-intl/server";

const WHATSAPP_NUMBER = "971588099223";

export default async function WhatsAppButton() {
  const t = await getTranslations("WhatsApp");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("message"))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("ariaLabel")}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-12 w-12 drop-shadow-lg" fill="#25D366" aria-hidden="true">
        <path d="M16.004 3C9.14 3 3.57 8.57 3.57 15.43c0 2.31.63 4.55 1.83 6.51L3 29l7.22-2.36a12.44 12.44 0 0 0 5.78 1.43h.01c6.86 0 12.43-5.57 12.43-12.43S22.86 3 16.004 3Zm0 22.43h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-4.29 1.4 1.41-4.18-.25-.43a10.36 10.36 0 0 1-1.6-5.5c0-5.75 4.68-10.43 10.44-10.43 2.79 0 5.41 1.09 7.38 3.06a10.36 10.36 0 0 1 3.05 7.38c0 5.75-4.68 10.4-10.4 10.4Zm5.73-7.8c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
}
