import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutTeaser() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal-left group relative aspect-[16/11] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
          <Image
            src="/projects/marina-penthouse-terrace.avif"
            alt="Marina penthouse terrace renovation"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="reveal-right">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            About G.A.G
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">A coordinated team, not a contractor list.</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            G.A.G Interiors brings design, approvals, execution and joinery under one roof &mdash; so nothing gets
            lost between handoffs.
          </p>
          <div className="mt-6">
            <Button href="/about" variant="outline">
              About Us &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
