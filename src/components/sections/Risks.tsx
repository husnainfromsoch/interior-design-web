const risks = [
  {
    title: "Unclear project scope",
    prevention: "A signed scope document before any contract is issued.",
  },
  {
    title: "Wrong site measurements",
    prevention: "Laser-verified site survey ahead of every design drawing.",
  },
  {
    title: "MEP conflicts mid-execution",
    prevention: "MEP drawings cross-checked with design before work starts.",
  },
  {
    title: "Approval delays",
    prevention: "Authority submissions handled in-house, tracked end to end.",
  },
  {
    title: "Poor material selection",
    prevention: "Samples approved on-site before any order is placed.",
  },
  {
    title: "Weak site supervision",
    prevention: "A dedicated supervisor on-site through every phase.",
  },
];

function RiskIcon({ title }: { title: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (title) {
    case "Unclear project scope":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l4 4V20.5H7V3.5Z" />
          <path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" />
        </svg>
      );
    case "Wrong site measurements":
      return (
        <svg {...common}>
          <rect x="3.5" y="9" width="17" height="6" rx="1" transform="rotate(-45 12 12)" />
          <path d="m8.5 8.5 1.6 1.6M11.5 5.5l1.6 1.6M14.5 2.5l1.6 1.6" />
        </svg>
      );
    case "MEP conflicts mid-execution":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a3 3 0 0 1 4.24 4.24l-8.3 8.3a2 2 0 0 1-2.83 0l-1.4-1.4a2 2 0 0 1 0-2.83l8.3-8.3Z" />
          <path d="m13 8 3 3M4 20l3.5-1 8-8-2.5-2.5-8 8L4 20Z" />
        </svg>
      );
    case "Approval delays":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l2.8 1.8" />
        </svg>
      );
    case "Poor material selection":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
          <path d="m17 13.8 3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2Z" />
        </svg>
      );
    case "Weak site supervision":
      return (
        <svg {...common}>
          <path d="M12 3.5c4 1.3 7 1.3 7 1.3v6.4c0 4.6-3 7.6-7 9.3-4-1.7-7-4.7-7-9.3V4.8s3 0 7-1.3Z" />
          <path d="m9 12 2 2 4-4.2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Risks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              What We Help You Avoid
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">
              Renovation projects go wrong in predictable ways.
            </h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">
            Here&apos;s what we watch for on every project, before it becomes a problem — and
            exactly how we prevent it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map((risk, i) => (
            <div
              key={risk.title}
              className="reveal group flex flex-col rounded-2xl border border-stone/60 bg-ivory p-7 shadow-[0_2px_10px_-6px_rgba(46,42,37,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_20px_36px_-20px_rgba(46,42,37,0.25)]"
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-wood/10 text-wood transition-colors duration-300 group-hover:bg-wood group-hover:text-ivory">
                <RiskIcon title={risk.title} />
              </span>

              <h3 className="mt-5 text-[17px] font-semibold leading-snug text-charcoal">
                {risk.title}
              </h3>

              <div className="mt-4 border-t border-stone/50 pt-4">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-wood/80">
                  How we prevent it
                </span>
                <p className="mt-1.5 text-[14px] leading-relaxed text-warm-grey">
                  {risk.prevention}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
