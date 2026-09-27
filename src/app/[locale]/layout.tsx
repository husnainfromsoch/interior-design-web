import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageFade from "@/components/ui/PageFade";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Magnetic from "@/components/ui/Magnetic";
import ConsentBanner from "@/components/ui/ConsentBanner";
import Analytics from "@/components/ui/Analytics";
import PreviewBar from "@/components/ui/PreviewBar";
import { SiteSettingsProvider } from "@/components/cms/SiteSettingsProvider";
import { getNavigation, getSiteSettings } from "@/cms/data";

// Bellvero v2 design-system typefaces (client spec §2.2). Latin + Cyrillic so RU
// copy never falls back to a system font.
const bvHeading = Cormorant_Garamond({
  variable: "--font-bv-heading",
  subsets: ["latin", "cyrillic"],
  // 600: trial type-weight bump (see "Type size trial" in globals.css).
  weight: ["500", "600"],
});

const bvBody = Manrope({
  variable: "--font-bv-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Interior Renovation & Fit-Out Company in Dubai | Bellvero Group",
  description:
    "Bellvero Group is Dubai's full-cycle interior renovation, fit-out and custom joinery company. Design, authority approvals, custom kitchens, wardrobes and villa renovation across the UAE, one coordinated team, one point of accountability. Discuss your project today.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const [settings, navigation] = await Promise.all([getSiteSettings(locale), getNavigation(locale)]);
  const { phoneDisplay, phoneE164, whatsappNumber, email } = settings.contact;

  return (
    <html
      lang={locale}
      className={`${bvHeading.variable} ${bvBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bv-background text-bv-ink font-bv-body">
        <NextIntlClientProvider>
          <SiteSettingsProvider contact={{ phoneDisplay, phoneE164, whatsappNumber, email }}>
            <PreviewBar />
            <Header nav={navigation.header} />
            <main id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>
            <Footer />
            <MobileBottomBar />
            <ScrollReveal />
            <ScrollProgress />
            <PageFade />
            <SmoothScroll />
            <Magnetic />
            <ConsentBanner />
            <Analytics />
          </SiteSettingsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
