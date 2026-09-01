const points = [
  {
    title: "One coordinated team",
    body: "No juggling separate contractors for design, approvals and execution.",
  },
  {
    title: "Technical preparation",
    body: "Drawings and documentation done properly before work starts on site.",
  },
  {
    title: "Approvals handled",
    body: "NOCs and building management permits managed on your behalf.",
  },
  {
    title: "Custom joinery, in-house",
    body: "Furniture and fit-out built to match the design exactly.",
  },
  {
    title: "Clear communication",
    body: "One point of contact, from consultation to handover.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="reveal">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            Why G.A.G
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px]">
            What one coordinated team actually gets you.
          </h2>
        </div>
        <div className="reveal border-t border-stone">
          {points.map((point) => (
            <div
              key={point.title}
              className="grid grid-cols-1 gap-1.5 border-b border-stone py-6 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <h3 className="text-[17px] font-medium">{point.title}</h3>
              <p className="text-sm text-warm-grey">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
