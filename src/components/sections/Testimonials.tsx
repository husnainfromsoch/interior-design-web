import { ClientsSection, type Stat, type Testimonial } from "@/components/ui/testimonial-card";

const stats: Stat[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "AED 45M", label: "Value built" },
  { value: "4.9", label: "Average rating" },
];

const testimonials: Testimonial[] = [
  {
    name: "A. Al Mansoori",
    title: "Villa Owner, Dubai",
    quote:
      "The team transformed our villa into something beyond what we imagined. Every detail was considered.",
    avatarSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    rating: 5.0,
  },
  {
    name: "S. Khan",
    title: "Operations Director, Abu Dhabi",
    quote:
      "Professional, precise, and genuinely creative. Our office fit-out was delivered on time and on budget.",
    avatarSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
  },
  {
    name: "R. Haddad",
    title: "Homeowner, Dubai",
    quote: "A design partner who truly listens. Our new home feels like us, only elevated.",
    avatarSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
];

export default function Testimonials() {
  return (
    <ClientsSection
      tagLabel="Client Voices"
      title="What our clients experience with us."
      description="Trusted by 120+ homeowners and businesses across the UAE to deliver interiors that feel personal, precise, and elevated."
      stats={stats}
      testimonials={testimonials}
      primaryActionLabel="Request a Quote"
      primaryActionHref="/#contact-form"
      secondaryActionLabel="See Our Projects"
      secondaryActionHref="/portfolio"
    />
  );
}
