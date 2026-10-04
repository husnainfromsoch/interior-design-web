import { dots, g } from "@/lib/final";
import type { FormCopy } from "@/components/ui/EnquiryForm";

// Enquiry form F1 texts from the final copy (Global › Enquiry form F1). Built on the
// server and passed to the client form as props.

/** F1 service values in the order of the copy's "Service options" row. */
export const SERVICE_VALUES = [
  "design",
  "landscape",
  "villa",
  "apartment",
  "commercial",
  "kitchens",
  "wardrobes",
  "joinery",
  "metal",
  "mep",
  "approvals",
  "procurement",
  "notSure",
] as const;

const LOCATION_VALUES = ["dubai", "abuDhabi", "other"] as const;

/** "Label. Hint: text" / "Label. Placeholder: text" → [label, text] */
function labelled(text: string): [string, string] {
  const dot = text.indexOf(". ");
  const rest = text.slice(dot + 2);
  return [text.slice(0, dot), rest.slice(rest.indexOf(": ") + 2)];
}

export function formCopy(locale: string): FormCopy {
  const f = (item: string, nth = 0) => g("f1", item, locale, nth);
  const services = dots(f("Service options"));
  if (services.length !== SERVICE_VALUES.length) throw new Error("F1 service options do not match SERVICE_VALUES");
  const location = f("Field (optional)", 2);
  const [messageLabel, messagePlaceholder] = labelled(f("Field (optional)", 3));
  const [filesLabel, filesHint] = labelled(f("Field (optional, new)"));
  const note = f("Note");
  const noteSplit = note.indexOf(". ") + 1;
  return {
    heading: f("H2"),
    intro: f("Intro"),
    name: f("Field", 0),
    phone: f("Field", 1),
    email: f("Field (optional)", 0),
    service: f("Field (optional)", 1),
    services: SERVICE_VALUES.map((value, i) => ({ value, label: services[i] })),
    location: location.slice(0, location.indexOf(": ")),
    locations: dots(location.slice(location.indexOf(": ") + 2)).map((label, i) => ({ value: LOCATION_VALUES[i], label })),
    message: messageLabel,
    messagePlaceholder,
    files: filesLabel,
    filesHint,
    submit: f("Button 1"),
    whatsapp: f("Button 2"),
    note: note.slice(0, noteSplit),
    noteLink: note.slice(noteSplit + 1),
    success: f("Success"),
    successButton: f("Success button"),
    whatsappPrefill: f("WhatsApp prefilled text"),
    errorRequired: f("Error: required field"),
    errorPhone: f("Error: phone"),
    errorFileType: f("Error: file type"),
    errorFileSize: f("Error: file size"),
    errorSending: f("Error: sending"),
    nextSteps: f("What happens next")
      .split(/\s(?=0\d\s)/)
      .map((s) => s.replace(/^0\d\s/, "")),
  };
}
