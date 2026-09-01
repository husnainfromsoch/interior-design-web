const WHATSAPP_NUMBER = "971588099223";
const WHATSAPP_MESSAGE = "Hello G.A.G Interiors, I'd like to request a quote.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with G.A.G Interiors on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.653 4.527 1.786 6.393L4 29l7.81-1.75A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.75c-1.986 0-3.85-.55-5.44-1.508l-.39-.232-4.63 1.037 1.06-4.51-.256-.406A9.71 9.71 0 0 1 5.25 15c0-5.93 4.82-10.75 10.751-10.75S26.75 9.07 26.75 15 21.933 24.75 16.001 24.75Zm5.938-7.86c-.325-.163-1.92-.947-2.218-1.056-.298-.109-.515-.163-.732.163-.217.325-.84 1.056-1.03 1.273-.19.217-.38.244-.705.081-.325-.163-1.372-.505-2.614-1.612-.966-.86-1.618-1.923-1.808-2.248-.19-.325-.02-.5.143-.663.147-.146.325-.38.488-.57.163-.19.217-.326.326-.543.108-.217.054-.407-.027-.57-.081-.163-.732-1.764-1.003-2.415-.264-.634-.532-.548-.732-.558l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.138 1.112-1.138 2.713 0 1.6 1.165 3.146 1.327 3.363.163.217 2.293 3.502 5.556 4.912.776.335 1.382.535 1.854.685.779.248 1.487.213 2.048.13.625-.094 1.92-.785 2.19-1.544.27-.759.27-1.409.19-1.544-.082-.135-.298-.217-.624-.38Z" />
      </svg>
    </a>
  );
}
