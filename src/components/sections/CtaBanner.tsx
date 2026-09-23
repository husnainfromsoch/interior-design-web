import Link from "next/link";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-24 lg:px-8">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-bv-surface px-8 py-16 text-center">
        <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
          <h2 className="max-w-xl font-bv-heading text-4xl text-bv-ink">
            Ready to reimagine your space?
          </h2>
        </TextBlockAnimation>
        <p className="max-w-md text-base text-bv-muted">
          Book a complimentary consultation with our design team, available
          across Dubai and the wider UAE.
        </p>
        <Link
          href="/contact"
          className="mt-4 rounded-full bg-bv-ink px-8 py-3 text-sm tracking-wide text-bv-white transition-colors hover:bg-bv-accent-hover"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
