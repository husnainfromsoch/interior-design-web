import { text, textarea } from "payload/shared";
import type { TextFieldValidation, TextareaFieldValidation } from "payload";

// Owner rule (2026-09-26): no em dash anywhere in visible text. Every client-editable text
// field runs through these validators, which keep Payload's own checks (required, length).

const DASH = "—";
const dashError = 'Use ":" or "," instead of the long dash "—" (site style rule).';

export const noDashText: TextFieldValidation = (value, options) =>
  typeof value === "string" && value.includes(DASH) ? dashError : text(value, options);

export const noDashTextarea: TextareaFieldValidation = (value, options) =>
  typeof value === "string" && value.includes(DASH) ? dashError : textarea(value, options);

/** E.164 international format, e.g. +971588099223. */
export const e164: TextFieldValidation = (value, options) => {
  if (value && !/^\+[1-9]\d{7,14}$/.test(value)) return "Use international format: + then country code and number, no spaces (e.g. +971588099223).";
  return text(value, options);
};

/** WhatsApp number as used in wa.me links: digits only, with country code. */
export const whatsappDigits: TextFieldValidation = (value, options) => {
  if (value && !/^[1-9]\d{7,14}$/.test(value)) return "Digits only, with country code and no + or spaces (e.g. 971588099223).";
  return text(value, options);
};
