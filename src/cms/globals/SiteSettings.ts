import type { GlobalConfig } from "payload";
import { canSaveOrPublish, isLoggedIn } from "../access";
import { e164, noDashText, noDashTextarea, whatsappDigits } from "../fields/validate";
import { requireAllLocales } from "../hooks/requireAllLocales";
import { revalidateOnPublish } from "../hooks/revalidate";
import { TAGS } from "../tags";

// Global settings record (main spec §22 rule 1): contact details and the legal entity exist
// here once and are rendered from here everywhere (footer, /contact, /about, /privacy,
// the Home FAQ card, the enquiry form and the mobile bar). Legal and privacy values stay
// empty until the company supplies them; every block that needs them hides itself, and
// square-bracket placeholders are never published (spec §15.17 A04b, §30.8).
//
// Logo, default share image and default SEO fields arrive with the media library.

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: { group: "Settings" },
  versions: { drafts: true, max: 50 },
  access: {
    read: isLoggedIn,
    readVersions: isLoggedIn,
    update: canSaveOrPublish,
  },
  hooks: {
    beforeChange: [requireAllLocales],
    afterChange: [revalidateOnPublish([TAGS.siteSettings])],
  },
  fields: [
    {
      name: "contact",
      type: "group",
      label: "Contact details",
      admin: { description: "Shown in the footer, on /contact, in the enquiry form, the Home FAQ card and the mobile contact bar." },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "phoneDisplay",
              type: "text",
              label: "Phone (as displayed)",
              required: true,
              validate: noDashText,
              admin: { description: "Exactly as visitors should read it, e.g. +971 58 809 9223." },
            },
            {
              name: "phoneE164",
              type: "text",
              label: "Phone (for dialling)",
              required: true,
              validate: e164,
              admin: { description: "Same number in international format without spaces, e.g. +971588099223. Used for tap-to-call." },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "whatsappNumber",
              type: "text",
              label: "WhatsApp number",
              required: true,
              validate: whatsappDigits,
              admin: { description: "Digits only with country code, e.g. 971588099223." },
            },
            { name: "email", type: "email", label: "Email", required: true },
          ],
        },
        {
          name: "workingHours",
          type: "text",
          label: "Working hours",
          localized: true,
          required: true,
          validate: noDashText,
        },
        {
          name: "visitsLine",
          type: "textarea",
          label: "Visits and meetings",
          localized: true,
          required: true,
          validate: noDashTextarea,
          admin: { description: "Where meetings take place. The site has no public office address." },
        },
      ],
    },
    {
      name: "legal",
      type: "group",
      label: "Legal entity",
      admin: {
        description:
          "The company line (footer, /contact) and the 'Who you are contracting with' block (/about) appear only when name, licence number and issuing authority are all filled in.",
      },
      fields: [
        { name: "entityName", type: "text", label: "Legal entity name", validate: noDashText },
        {
          type: "row",
          fields: [
            { name: "licenceNumber", type: "text", label: "Licence number", validate: noDashText },
            { name: "issuingAuthority", type: "text", label: "Issuing authority", validate: noDashText },
          ],
        },
        { name: "activities", type: "textarea", label: "Licensed activities", localized: true, validate: noDashTextarea },
        { name: "registeredAddress", type: "textarea", label: "Registered address", validate: noDashTextarea },
      ],
    },
    {
      name: "privacy",
      type: "group",
      label: "Privacy notice details",
      admin: { description: "Filled into the privacy notice (/privacy). A sentence that needs an empty value is left out." },
      fields: [
        { name: "contactEmail", type: "email", label: "Privacy contact email" },
        { name: "providers", type: "textarea", label: "Service providers and locations", localized: true, validate: noDashTextarea },
        { name: "retention", type: "textarea", label: "Retention schedule", localized: true, validate: noDashTextarea },
      ],
    },
  ],
};
