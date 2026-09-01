import Image from "next/image";
import Button from "@/components/ui/Button";

const swatches = ["#C9C2B6", "#8B6F52", "#D9C7A6", "#2E2A25"];

export default function MaterialsTeaser() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal-left group relative aspect-[16/11] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
          <Image
            src="/images/imgi_24_61f3245393d53d502b2dec6b_Hranowsky_Whitworth-620.jpg"
            alt="Materials and finishes in a living space"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="reveal-right">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            Materials &amp; Finishes
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">Stone, wood and finish, sourced with intent.</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            Every material is selected and procured to match the design brief &mdash; not the nearest available option.
          </p>
          <div className="my-6 flex gap-3">
            {swatches.map((color) => (
              <div
                key={color}
                className="h-[34px] w-[34px] rounded-full border-2 border-ivory shadow-[0_2px_8px_-2px_rgba(46,42,37,0.3)] ring-1 ring-stone/60 transition-transform duration-200 hover:scale-110"
                style={{ background: color }}
              />
            ))}
          </div>
          <Button href="/services/materials-finishes" variant="outline">
            Explore Materials &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
