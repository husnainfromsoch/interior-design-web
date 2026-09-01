import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-soft-black py-24 text-ivory">
      <div className="reveal mx-auto max-w-[1180px] px-6 text-center lg:px-8">
        <h2 className="font-serif text-[32px] sm:text-[38px]">Tell us about your project.</h2>
        <p className="mx-auto mt-4 max-w-md text-[17px] text-stone">
          WhatsApp us, request a quote, or book a site visit &mdash; whichever is easiest for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="https://wa.me/971588099223" variant="outline-light" external>
            WhatsApp Us
          </Button>
          <Button href="#contact-form" variant="primary">
            Request a Quote
          </Button>
          <Button href="https://wa.me/971588099223?text=I%27d%20like%20to%20book%20a%20site%20visit" variant="outline-light" external>
            Book a Site Visit
          </Button>
          <Button href="tel:+971588099223" variant="outline-light" external>
            Call Us
          </Button>
        </div>

        <div
          id="contact-form"
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-ivory/10 bg-ivory p-8 text-charcoal shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)] sm:p-10"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
