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
import SmoothScroll from "@/components/ui/SmoothScroll";

// Bellvero v2 design-system typefaces (client spec §2.2). Latin + Cyrillic so RU
// copy never falls back to a system font.
const bvHeading = Cormorant_Garamond({
  variable: "--font-bv-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
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

  return (
    <html
      lang={locale}
      className={`${bvHeading.variable} ${bvBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bv-background text-bv-ink font-bv-body">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 [&:has(>_[data-hero])]:pt-0 pt-[76px] lg:pt-[92px]">{children}</main>
          <Footer />
          <MobileBottomBar />
          <ScrollReveal />
          <SmoothScroll />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
