import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import DocPage from "@/components/final/DocPage";
import { meta } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";

// P22 Warranty (Final Changes Sheet, P22): whole page from the final copy, in the service
// page layout. The page ends with its own CTA ("Ask about the warranty"), then form F1.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P22", locale), "/warranty", locale);
}

export default async function WarrantyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DocPage page="P22" locale={locale} />;
}
