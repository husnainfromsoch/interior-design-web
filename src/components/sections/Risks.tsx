import { getTranslations } from "next-intl/server";

const RISK_IDS = ["scope", "measurements", "mep", "approvals", "materials", "supervision"] as const;

function RiskIcon({ id }: { id: string }) {
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
  switch (id) {
    case "scope":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l4 4V20.5H7V3.5Z" />
          <path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" />
        </svg>
      );
    case "measurements":
      return (
        <svg {...common}>
          <rect x="3.5" y="9" width="17" height="6" rx="1" transform="rotate(-45 12 12)" />
          <path d="m8.5 8.5 1.6 1.6M11.5 5.5l1.6 1.6M14.5 2.5l1.6 1.6" />
        </svg>
      );
    case "mep":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a3 3 0 0 1 4.24 4.24l-8.3 8.3a2 2 0 0 1-2.83 0l-1.4-1.4a2 2 0 0 1 0-2.83l8.3-8.3Z" />
          <path d="m13 8 3 3M4 20l3.5-1 8-8-2.5-2.5-8 8L4 20Z" />
        </svg>
      );
    case "approvals":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l2.8 1.8" />
        </svg>
      );
    case "materials":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
          <path d="m17 13.8 3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2Z" />
        </svg>
      );
    case "supervision":
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

function FlowArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className="h-6 w-full shrink-0 text-stone group-hover:text-wood/40"
    >
      <line
        x1="0"
        y1="12"
        x2="88"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="transition-colors duration-500"
      />
      <path
        d="M84 6.5 92 12 84 17.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-500"
      />
    </svg>
  );
}

export default async function Risks() {
  const t = await getTranslations("Risks");
  const risks = RISK_IDS.map((id) => ({
    id,
    title: t(`items.${id}.title`),
    prevention: t(`items.${id}.prevention`),
  }));
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map((risk, i) => (
            <div
              key={risk.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-stone/60 bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_24px_44px_-24px_rgba(46,42,37,0.3)]"
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <span className="mb-4 block font-serif text-[13px] text-warm-grey/45">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Before → After visualization */}
              <div className="mb-5 flex items-center gap-1.5">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-warm-grey/35 bg-warm-grey/[0.05] text-warm-grey/70">
                  <span className="flex h-6 w-6 items-center justify-center">
                    <RiskIcon id={risk.id} />
                  </span>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.1em]">
                    {t("riskLabel")}
                  </span>
                </div>

                <FlowArrow />

                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-wood text-ivory shadow-[0_10px_20px_-10px_rgba(122,92,58,0.65)] transition-transform duration-300 group-hover:scale-[1.04]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
                  </svg>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.1em]">
                    {t("solvedLabel")}
                  </span>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold leading-snug text-charcoal">
                {risk.title}
              </h3>

              <div className="mt-3 flex-1 border-t border-stone/50 pt-3">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-wood">
                  {t("preventLabel")}
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
