import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";

const swatches = ["#C9C2B6", "#8B6F52", "#D9C7A6", "#2E2A25"];

export default function MaterialsTeaser() {
  return (
    <section className="bg-beige py-24">
      <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Placeholder className="aspect-[16/11]" tag="Photography placeholder" variant={2} />
        <div>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            Materials &amp; Finishes
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">Stone, wood and finish, sourced with intent.</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            Every material is selected and procured to match the design brief &mdash; not the nearest available option.
          </p>
          <div className="my-6 flex gap-2.5">
            {swatches.map((color) => (
              <div key={color} className="h-[34px] w-[34px] rounded" style={{ background: color }} />
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
