// Runs the create-only CMS seed during a Vercel build (the "vercel-build" script).
//
// Production: never seeds. Production content is created deliberately, never by a build;
//   until it exists the production build fails at prerender instead of rendering blanks.
// Preview: seeds the deployment's own Neon branch (preview/<git-branch>), creating only
//   what is missing and never overwriting.
// No DATABASE_URL: skips, like cms-migrate.mjs.
import { spawnSync } from "node:child_process";

if (!process.env.DATABASE_URL) {
  console.log("[cms-seed] DATABASE_URL is not set: skipping.");
  process.exit(0);
}
if (process.env.VERCEL_ENV === "production") {
  console.log("[cms-seed] Production build: seeding is disabled, skipping.");
  process.exit(0);
}

const result = spawnSync("npx", ["payload", "run", "src/cms/seed/run.ts", "confirm"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});
process.exit(result.status ?? 1);
