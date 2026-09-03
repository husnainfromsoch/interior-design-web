import { getTranslations } from "next-intl/server";
import { ClipboardList, Ruler, HardHat, Stamp, Palette, UserCheck } from "lucide-react";

const RISK_IDS = ["scope", "measurements", "mep", "approvals", "materials", "supervision"] as const;

const RISK_ICONS: Record<(typeof RISK_IDS)[number], typeof ClipboardList> = {
  scope: ClipboardList,
  measurements: Ruler,
  mep: HardHat,
  approvals: Stamp,
  materials: Palette,
  supervision: UserCheck,
};

function RiskIcon({ id }: { id: (typeof RISK_IDS)[number] }) {
  const Icon = RISK_ICONS[id];
  return <Icon width={22} height={22} strokeWidth={1.6} aria-hidden />;
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
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-red-900/25 bg-red-900/[0.05] text-red-900/70">
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
