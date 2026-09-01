import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Studio Interiors",
  description: "Book a consultation with Studio Interiors, serving Dubai, Abu Dhabi and the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Book a consultation"
        description="Tell us about your project and our team will be in touch within one business day."
      />
      <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10">
        <ContactForm />
      </section>
    </>
  );
}
