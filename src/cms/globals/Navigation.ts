import type { Field, GlobalConfig } from "payload";
import { canSaveOrPublish, isLoggedIn } from "../access";
import { ROUTE_OPTIONS, SERVICE_OPTIONS } from "../fields/routes";
import { noDashText } from "../fields/validate";
import { requireAllLocales } from "../hooks/requireAllLocales";
import { revalidateOnPublish } from "../hooks/revalidate";
import { TAGS } from "../tags";

// Header and footer navigation (spec §7.1, §7.2). Editors control labels (EN/RU), order and
// which pages or services appear; the header's layout, the dropdown's four-column grid,
// the language switcher, accessibility labels and the CTA's target (the enquiry form)
// stay in code. Row limits keep the menus within what the design can hold.

const label = (name: string, title: string, description?: string): Field => ({
  name,
  type: "text",
  label: title,
  localized: true,
  required: true,
  validate: noDashText,
  ...(description ? { admin: { description } } : {}),
});

const linkFields: Field[] = [
  {
    type: "row",
    fields: [
      { ...label("label", "Label"), admin: { width: "50%" } } as Field,
      { name: "route", type: "select", label: "Page", required: true, options: ROUTE_OPTIONS, admin: { width: "50%" } },
    ],
  },
];

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  admin: { group: "Settings" },
  versions: { drafts: true, max: 50 },
  access: {
    read: isLoggedIn,
    readVersions: isLoggedIn,
    update: canSaveOrPublish,
  },
  hooks: {
    beforeChange: [requireAllLocales],
    afterChange: [revalidateOnPublish([TAGS.navigation])],
  },
  fields: [
    {
      name: "header",
      type: "group",
      label: "Header",
      fields: [
        label("servicesLabel", "Services menu label", "The first menu item; it links to /services and opens the services panel."),
        {
          name: "serviceGroups",
          type: "array",
          label: "Services panel: columns",
          minRows: 1,
          maxRows: 4,
          labels: { singular: "Column", plural: "Columns" },
          admin: { description: "Up to four columns, each with a heading and its services." },
          fields: [
            label("label", "Column heading"),
            { name: "services", type: "select", label: "Services", hasMany: true, required: true, options: SERVICE_OPTIONS },
          ],
        },
        label("specialistLabel", "Services panel: specialist row heading"),
        {
          name: "specialistServices",
          type: "select",
          label: "Services panel: specialist row",
          hasMany: true,
          required: true,
          options: SERVICE_OPTIONS,
        },
        label("allServicesLabel", "Services panel: link to all services"),
        {
          name: "links",
          type: "array",
          label: "Menu items after Services",
          minRows: 1,
          maxRows: 6,
          labels: { singular: "Menu item", plural: "Menu items" },
          fields: linkFields,
        },
        label("ctaLabel", "Call-to-action button", "Opens the enquiry form (on the current page if it has one, otherwise on /contact)."),
      ],
    },
    {
      name: "footer",
      type: "group",
      label: "Footer",
      fields: [
        label("exploreHeading", "Links column heading"),
        {
          name: "exploreLinks",
          type: "array",
          label: "Links",
          minRows: 1,
          maxRows: 8,
          labels: { singular: "Link", plural: "Links" },
          fields: linkFields,
        },
      ],
    },
  ],
};
