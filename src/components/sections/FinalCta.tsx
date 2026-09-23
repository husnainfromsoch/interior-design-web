import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import ContactFormPanel from "@/components/sections/ContactFormPanel";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default async function FinalCta() {
  const t = await getTranslations("FinalCta");
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-bv-background">
      <Image
        src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-bv-ink/55" />
      <div className="reveal relative mx-auto max-w-[1320px] px-6 text-center lg:px-8">
        <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] sm:text-[38px]">{t("title")}</h2>
        </TextBlockAnimation>
        <p className="mx-auto mt-4 max-w-md text-[17px] text-bv-line">
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
