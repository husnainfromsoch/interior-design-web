import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact G.A.G Interiors | Request a Quote in Dubai",
  description: "Request a quote or book a site visit with G.A.G Interiors, serving Dubai and the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Request a quote or book a site visit"
        description="Tell us about your project and our team will be in touch within one business day."
      />
      <section className="mx-auto max-w-2xl px-6 py-24 lg:px-8">
        <ContactForm />
      </section>
    </>
  );
}
