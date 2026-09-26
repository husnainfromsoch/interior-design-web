import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";
import { SERVICE_PAGES } from "./src/data/servicePages";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Permanent redirects from pre-spec URLs to the spec §6 URLs, in both languages.
const legacy: [string, string][] = [
  ["/portfolio", "/projects"],
  ["/portfolio/marina", "/projects/coastal-villa-concept"],
  ["/portfolio/albarari", "/projects/garden-villa-concept"],
  ["/portfolio/downtown", "/projects/tower-residence-concept"],
  ["/portfolio/jbr", "/projects/business-district-office-concept"],
  ...SERVICE_PAGES.flatMap((s) => (s.legacySlugs ?? []).map((old): [string, string] => [`/services/${old}`, `/services/${s.slug}`])),
];

// Spec §27 security headers. The CSP is left to the hosting step because the inline
// bootstrap needs a per-request nonce; frame-ancestors is covered by X-Frame-Options.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

const nextConfig: NextConfig = {
  // No X-Powered-By header at all (withPayload would otherwise send "Next.js, Payload").
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return legacy.flatMap(([from, to]) => [
      { source: from, destination: to, permanent: true },
      { source: `/ru${from}`, destination: `/ru${to}`, permanent: true },
    ]);
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

const config = withPayload(withNextIntl(nextConfig), { devBundleServerPackages: false });

// withPayload adds colour-scheme client hints (Accept-CH, Critical-CH, Vary) to every route
// for the admin theme. On public pages Critical-CH can make the browser retry the first
// request and Vary splits the CDN cache, so the hints are scoped to the admin only.
const payloadHeaders = config.headers!;
config.headers = async () =>
  (await payloadHeaders()).flatMap((rule) =>
    rule.source === "/:path*" && rule.headers.some((h) => h.key === "Critical-CH")
      ? [
          { ...rule, source: "/admin" },
          { ...rule, source: "/admin/:path*" },
        ]
      : [rule]
  );

export default config;
