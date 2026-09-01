import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="pb-10 pt-16 lg:pt-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        <div>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            G.A.G Interiors &mdash; Dubai, UAE
          </span>
          <h1 className="font-serif text-[32px] leading-[1.12] text-charcoal sm:text-[46px]">
            Full-cycle interior renovation, fit-out and custom joinery in the UAE.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-warm-grey">
            One coordinated team &mdash; from design and approvals through to renovation, fit-out and handover.
            No juggling separate contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button href="https://wa.me/971588099223" variant="outline" external>
              WhatsApp Us
            </Button>
          </div>
        </div>
        <Placeholder
          className="order-first aspect-[16/10] lg:order-none lg:aspect-[4/5]"
          tag="Photography placeholder"
          variant={1}
        />
      </div>
    </section>
  );
}
