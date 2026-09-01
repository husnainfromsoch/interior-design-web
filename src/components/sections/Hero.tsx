import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years in the UAE" },
];

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden text-ivory">
      <video
        className="kenburns absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/projects/downtown-villa-living.avif"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black via-soft-black/55 to-soft-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black/70 via-soft-black/20 to-transparent" />

      <div className="relative flex w-full flex-col">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-8">
          <div className="hero-in max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              <span className="h-px w-8 bg-champagne" />
              G.A.G Interiors &mdash; Dubai, UAE
            </span>
            <h1 className="font-serif text-[38px] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[64px]">
              Full-cycle interior renovation, fit-out &amp; custom joinery.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
              One coordinated team &mdash; from design and approvals through to renovation, fit-out and
              handover. No juggling separate contractors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Button href="https://wa.me/971588099223" variant="outline-light" external>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/15 bg-soft-black/40 backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-3 divide-x divide-ivory/15 px-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 py-7 text-center sm:flex-row sm:justify-center sm:gap-3 sm:py-8">
                <p className="font-serif text-[26px] leading-none text-champagne sm:text-[32px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-stone sm:text-[12px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
