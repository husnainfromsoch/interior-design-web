import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import ContactFormPanel from "@/components/sections/ContactFormPanel";

export default async function FinalCta() {
  const t = await getTranslations("FinalCta");
  return (
    <section id="contact" className="bg-soft-black py-24 text-ivory">
      <div className="reveal mx-auto max-w-[1180px] px-6 text-center lg:px-8">
        <h2 className="font-serif text-[32px] sm:text-[38px]">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-md text-[17px] text-stone">
          {t("body")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="https://wa.me/971588099223" variant="outline-light" external>
            {t("whatsapp")}
          </Button>
          <Button href="#contact-form" variant="primary">
            {t("requestQuote")}
          </Button>
          <Button href="https://wa.me/971588099223?text=I%27d%20like%20to%20book%20a%20site%20visit" variant="outline-light" external>
            {t("bookVisit")}
          </Button>
          <Button href="tel:+971588099223" variant="outline-light" external>
            {t("callUs")}
          </Button>
        </div>

        <ContactFormPanel className="mx-auto mt-16 max-w-3xl" />
      </div>
    </section>
  );
}
