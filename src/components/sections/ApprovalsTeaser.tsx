import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";

export default function ApprovalsTeaser() {
  return (
    <section className="py-24">
      <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            Approvals, NOCs &amp; Permits
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">The paperwork, handled.</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            NOCs, minor works, major modification coordination and documentation &mdash; managed on your behalf, so
            approvals never hold up your project.
          </p>
          <div className="mt-6">
            <Button href="/services/approvals-noc-permits" variant="outline">
              Learn More &rarr;
            </Button>
          </div>
        </div>
        <Placeholder className="order-1 aspect-[16/11] lg:order-2" tag="Photography placeholder" variant={3} />
      </div>
    </section>
  );
}
