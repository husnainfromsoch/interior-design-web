import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "G.A.G Interiors | Interior Renovation & Fit-Out in Dubai, UAE",
  description:
    "G.A.G Interiors is a full-cycle interior renovation, fit-out and custom joinery company in Dubai. Design, approvals, custom kitchens, wardrobes in Dubai and villa renovation and fit-out in Dubai — one coordinated team.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
