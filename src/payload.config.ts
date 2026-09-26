import path from "path";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Users } from "./cms/collections/Users";

// Payload CMS (step 1: foundation only). The admin lives at /admin; the public site does
// not read from the CMS yet. All values come from server-side env vars (.env.example);
// nothing here is exposed to the browser.
//
// Schema changes always go through committed migrations in src/migrations (push: false),
// so a local session can never alter a shared database's schema by accident.

const root = process.cwd();

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(root, "src") },
    meta: { titleSuffix: " | Bellvero CMS" },
  },
  collections: [Users],
  // EN and RU as localised fields on the same record (main spec §22 rule 2). No fallback,
  // so a missing Russian value shows up as missing instead of silently rendering English.
  localization: {
    locales: [
      { label: "English", code: "en" },
      { label: "Русский", code: "ru" },
    ],
    defaultLocale: "en",
    fallback: false,
  },
  // The site reads content through the Local API; no public GraphQL endpoint.
  graphQL: { disable: true },
  telemetry: false,
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL ?? "" },
    push: false,
    migrationDir: path.resolve(root, "src/migrations"),
  }),
  typescript: { outputFile: path.resolve(root, "src/payload-types.ts") },
});
