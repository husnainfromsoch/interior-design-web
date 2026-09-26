import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the `middleware` file convention to `proxy`; behaviour is unchanged.
export default createMiddleware(routing);

export const config = {
  // Locale routing runs on every page except API routes, Next internals, static files and
  // the CMS admin (/admin and anything under it), which has its own root layout and must
  // never be rewritten to /en/admin. "/administration" and similar still get locale routing.
  matcher: ["/((?!api|admin(?:/|$)|_next|_vercel|.*\\..*).*)"],
};
