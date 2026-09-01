import Image from "next/image";
import Button from "@/components/ui/Button";

export default function MidCta() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 text-ivory">
      <Image
        src="/projects/villa-exterior.avif"
        alt="Completed villa exterior"
        fill
        sizes="100vw"
        className="kenburns object-cover"
      />
      <div className="absolute inset-0 bg-soft-black/70" />
      <div className="reveal-scale relative mx-auto max-w-[720px] px-6 text-center lg:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
          Let&rsquo;s Work Together
        </span>
        <h2 className="font-serif text-[30px] leading-snug sm:text-[40px]">
          Let&rsquo;s create something <span className="italic text-champagne">timeless</span>, together.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="outline-light">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
