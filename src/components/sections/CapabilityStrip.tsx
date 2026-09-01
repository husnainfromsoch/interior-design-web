const nodes = [
  { label: "Design", sub: "Concept & drawings" },
  { label: "Approvals", sub: "NOCs & permits" },
  { label: "Renovation", sub: "Site execution" },
  { label: "Fit-Out", sub: "Kitchens & wardrobes" },
  { label: "Custom Furniture", sub: "In-house joinery" },
];

export default function CapabilityStrip() {
  return (
    <section className="bg-charcoal py-14 text-ivory">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.14em] text-champagne">
          One coordinated team, start to handover
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-0">
          {nodes.map((node) => (
            <div key={node.label} className="relative flex-1 border-t border-champagne/50 pt-5 text-center sm:border-t-0">
              <span className="mx-auto mb-3.5 hidden h-3 w-px bg-champagne sm:block" />
              <span className="text-xs font-semibold uppercase tracking-[0.06em] text-ivory">{node.label}</span>
              <span className="mt-1.5 block text-[10px] text-stone">{node.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
