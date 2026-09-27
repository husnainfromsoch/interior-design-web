import { ValidationError, type Field, type GlobalBeforeChangeHook } from "payload";

// EN and RU must both be complete before anything is published (main spec §22 rule 2 and
// the no-fallback rule: a missing Russian value must never silently show English). Payload
// checks `required` for the language being saved; this hook checks the other language on
// publish. Drafts may stay incomplete.

const LOCALES = ["en", "ru"] as const;
const LANGUAGE = { en: "English", ru: "Russian" } as const;

type Row = { id?: string | number } & Record<string, unknown>;
type Missing = { path: string; locale: (typeof LOCALES)[number] };

function collectMissing(fields: Field[], current: Row | undefined, other: Row | undefined, path: string, locale: Missing["locale"], out: Missing[]) {
  for (const field of fields) {
    if (!("name" in field)) {
      if ("fields" in field && Array.isArray(field.fields)) collectMissing(field.fields, current, other, path, locale, out);
      continue;
    }
    const p = path ? `${path}.${field.name}` : field.name;
    if (field.type === "group") {
      collectMissing(field.fields, current?.[field.name] as Row, other?.[field.name] as Row, p, locale, out);
    } else if (field.type === "array") {
      const rows = (current?.[field.name] as Row[] | undefined) ?? [];
      const otherRows = (other?.[field.name] as Row[] | undefined) ?? [];
      rows.forEach((row, i) =>
        collectMissing(field.fields, row, otherRows.find((r) => r.id && r.id === row.id), `${p}.${i}`, locale, out)
      );
    } else if ((field.type === "text" || field.type === "textarea") && field.localized && field.required) {
      const value = other?.[field.name];
      if (typeof value !== "string" || !value.trim()) out.push({ path: p, locale });
    }
  }
}

export const requireAllLocales: GlobalBeforeChangeHook = async ({ data, global, req, context }) => {
  if (context?.skipLocaleCheck || data?._status !== "published") return data;
  const current = req.locale;
  if (current !== "en" && current !== "ru") return data;

  const missing: Missing[] = [];
  for (const locale of LOCALES) {
    if (locale === current) continue;
    // Deliberately NOT passing `req`: Payload's local API writes the requested locale onto the
    // req object it is given, which would switch the rest of this save to the other language
    // (an English publish would overwrite the Russian text). The committed state is what we
    // want to check anyway.
    const other = await req.payload.findGlobal({ slug: global.slug, locale, draft: true, depth: 0, overrideAccess: true });
    collectMissing(global.fields, data, other as unknown as Row, "", locale, missing);
  }
  if (missing.length) {
    throw new ValidationError({
      global: global.slug,
      errors: missing.map((m) => ({
        path: m.path,
        message: `${LANGUAGE[m.locale]} text is missing. Switch the language to ${LANGUAGE[m.locale]}, fill it in, then publish.`,
      })),
      req,
    });
  }
  return data;
};
