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
import DetailsA11y from "@/components/ui/DetailsA11y";
import ConsentBanner from "@/components/ui/ConsentBanner";
import Analytics from "@/components/ui/Analytics";
import PreviewBar from "@/components/ui/PreviewBar";
import { SiteSettingsProvider } from "@/components/cms/SiteSettingsProvider";
import { getSiteSettings } from "@/cms/data";
import { headerNav } from "@/components/final/navCopy";
import { dots, g, globalTable, meta } from "@/lib/final";

// Two families only: Cormorant Garamond for headings, Manrope for everything else.
// Latin + Cyrillic so RU copy never falls back to a system font.
const bvHeading = Cormorant_Garamond({
  variable: "--font-bv-heading",
  subsets: ["latin", "cyrillic"],
  // 600: type-weight bump (see "Type size trial" in globals.css).
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

// Default for pages without their own metadata: the Home title and description (G10).
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return meta("P01", locale);
}

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
  const settings = await getSiteSettings(locale);
  // Mobile bottom bar labels: a two-column table (EN | RU) with one row.
  const [discuss, whatsapp] = dots(globalTable("bottomBar")[0][locale === "ru" ? 1 : 0]);
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
            <Header nav={headerNav(locale)} />
            <main id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>
            <Footer />
            <MobileBottomBar labels={{ discuss, whatsapp }} whatsappPrefill={g("f1", "WhatsApp prefilled text", locale)} />
            <ScrollReveal />
            <ScrollProgress />
            <PageFade />
            <SmoothScroll />
            <Magnetic />
            <DetailsA11y />
            <ConsentBanner />
            <Analytics />
          </SiteSettingsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
