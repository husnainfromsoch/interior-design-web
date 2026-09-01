const steps = [
  "Consultation",
  "Site Visit",
  "Design",
  "Approvals",
  "Quotation",
  "Execution",
  "Production",
  "Installation",
  "Handover",
];

export default function Process() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            Process
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px]">How a project moves, start to finish.</h2>
        </div>
        <div className="reveal grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-9">
          {steps.map((step, i) => (
            <div key={step} className="relative pt-5 text-center before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-stone">
              <span className="mb-2.5 block font-serif text-[22px] text-wood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[13px] font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
