import Image from "next/image";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal-left">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            About G.A.G Interiors
          </span>
          <h2 className="font-serif text-[26px] leading-snug sm:text-[32px]">
            Redefining modern living through <span className="italic text-wood">design</span>.
          </h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            G.A.G Interiors brings design, approvals, execution and joinery under one roof, delivering
            renovation and fit-out projects across Dubai and the UAE with a single point of accountability.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              More About Us &rarr;
            </Button>
          </div>
          <div className="mt-10 flex gap-10 border-t border-stone pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-[32px] text-wood">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-warm-grey">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/projects/downtown-villa-living.avif"
                alt="Living room interior fit-out"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/projects/jbr-apartment-bathroom.avif"
                alt="Apartment bathroom renovation"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-10">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/projects/al-barari-kitchen.avif"
                alt="Custom kitchen and joinery"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/projects/villa-exterior.avif"
                alt="Villa exterior renovation"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
