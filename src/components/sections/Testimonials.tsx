import { getTranslations } from "next-intl/server";
import { ClientsSection, type Stat, type Testimonial } from "@/components/ui/testimonial-card";

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");

  const stats: Stat[] = [
    { value: "120+", label: t("stat1Label") },
    { value: "AED 45M", label: t("stat2Label") },
    { value: "4.9", label: t("stat3Label") },
  ];

  const testimonials: Testimonial[] = [
    {
      name: t("t1Name"),
      title: t("t1Title"),
      quote: t("t1Quote"),
      avatarSrc:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      rating: 5.0,
    },
    {
      name: t("t2Name"),
      title: t("t2Title"),
      quote: t("t2Quote"),
      avatarSrc:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
      rating: 4.8,
    },
    {
      name: t("t3Name"),
      title: t("t3Title"),
      quote: t("t3Quote"),
      avatarSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      rating: 4.9,
    },
  ];

  return (
    <ClientsSection
      tagLabel={t("tagLabel")}
      title={t("title")}
      description={t("description")}
      stats={stats}
      testimonials={testimonials}
      primaryActionLabel={t("primaryAction")}
      primaryActionHref="/#contact-form"
      secondaryActionLabel={t("secondaryAction")}
      secondaryActionHref="/portfolio"
    />
  );
}
