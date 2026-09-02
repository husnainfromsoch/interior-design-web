import { getTranslations } from "next-intl/server";

export default async function CapabilityStrip() {
  const t = await getTranslations("CapabilityStrip");
  const nodes = [
    { label: t("design"), sub: t("designSub") },
    { label: t("approvals"), sub: t("approvalsSub") },
    { label: t("renovation"), sub: t("renovationSub") },
    { label: t("fitOut"), sub: t("fitOutSub") },
    { label: t("furniture"), sub: t("furnitureSub") },
  ];
  return (
    <section className="bg-charcoal py-14 text-ivory">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.14em] text-champagne">
          {t("intro")}
        </p>
        <div className="reveal relative">
          <svg
            className="capability-line pointer-events-none absolute left-0 top-[29px] hidden w-full sm:block"
            height="2"
            preserveAspectRatio="none"
            viewBox="0 0 100 1"
          >
            <line x1="10" y1="0.5" x2="90" y2="0.5" pathLength="1" stroke="var(--champagne)" strokeWidth="1" />
          </svg>
          <span className="capability-runner pointer-events-none absolute top-[25px] hidden h-2 w-2 rounded-full bg-champagne sm:block" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:gap-3">
            {nodes.map((node, i) => (
              <div
                key={node.label}
                className="capability-node relative flex-1 rounded-xl border border-ivory/10 bg-ivory/[0.04] px-4 py-5 text-center transition-colors duration-200 hover:border-champagne/50 hover:bg-ivory/[0.07]"
                style={
                  {
                    "--node-delay": `${0.5 + i * 0.15}s`,
                    "--pulse-delay": `${1.3 + i * 0.9}s`,
                  } as React.CSSProperties
                }
              >
                <span className="capability-dot mx-auto mb-3.5 block h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-ivory">{node.label}</span>
                <span className="mt-1.5 block text-[10px] text-stone">{node.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
