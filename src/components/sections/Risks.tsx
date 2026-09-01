const risks = [
  "Unclear project scope",
  "Wrong site measurements",
  "MEP conflicts mid-execution",
  "Approval delays",
  "Poor material selection",
  "Weak site supervision",
];

export default function Risks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              What We Help You Avoid
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">
              Renovation projects go wrong in predictable ways.
            </h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">
            Here&apos;s what we watch for on every project, before it becomes a problem.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 border-l border-t border-stone sm:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk} className="border-b border-r border-stone px-[30px] py-[26px] text-[15px] font-medium">
              {risk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
