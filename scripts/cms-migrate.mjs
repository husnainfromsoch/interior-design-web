// Applies pending Payload CMS migrations before a deployment build (run by the
// "vercel-build" script, which Vercel uses instead of "build" when it exists).
//
// DATABASE_URL not set: skip with a notice, so a deployment without the CMS configured
// still builds the public site exactly as before (/admin then answers 500 until it is set).
// DATABASE_URL set: migrations must succeed, otherwise the build fails instead of
// deploying code against an out-of-date schema.
import { spawnSync } from "node:child_process";

if (!process.env.DATABASE_URL) {
  console.log("[cms-migrate] DATABASE_URL is not set: skipping CMS migrations.");
  process.exit(0);
}

console.log("[cms-migrate] Applying CMS migrations...");
const result = spawnSync("npx", ["payload", "migrate"], { stdio: "inherit", shell: process.platform === "win32" });
process.exit(result.status ?? 1);
