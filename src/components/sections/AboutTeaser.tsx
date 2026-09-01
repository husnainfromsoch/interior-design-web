import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";

export default function AboutTeaser() {
  return (
    <section className="bg-beige py-24">
      <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Placeholder className="aspect-[16/11]" tag="Photography placeholder" variant={4} />
        <div>
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
