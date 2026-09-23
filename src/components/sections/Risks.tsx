import { getTranslations } from "next-intl/server";
import { ClipboardList, Ruler, HardHat, Stamp, Palette, UserCheck } from "lucide-react";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

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

export default async function Risks() {
  const t = await getTranslations("Risks");
  const risks = RISK_IDS.map((id) => ({
    id,
    title: t(`items.${id}.title`),
    prevention: t(`items.${id}.prevention`),
  }));
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("badge")}
            </span>
            <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] sm:text-[34px]">
                {t("title")}
              </h2>
            </TextBlockAnimation>
          </div>
          <p className="max-w-sm text-[17px] text-bv-muted">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map((risk, i) => (
            <div
              key={risk.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-none border border-bv-line/50 bg-gradient-to-b from-white to-bv-background p-7  transition-all duration-500 ease-out hover:border-transparent "
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              {/* Ambient hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-none bg-gradient-to-br from-bv-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bv-ink/20 bg-bv-ink/[0.08] text-bv-ink transition-all duration-500 group-hover:border-bv-ink/40 group-hover:bg-bv-ink group-hover:text-bv-background">
                  <RiskIcon id={risk.id} />
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-bv-ink/5 py-1.5 pl-2.5 pr-3 transition-colors duration-500 group-hover:bg-bv-accent/10">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-bv-accent"
                  >
                    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-bv-ink/70">
                    {t("solvedLabel")}
                  </span>
                </div>
              </div>

              <span className="relative mb-2 block font-bv-heading text-[13px] text-bv-muted/40">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="relative text-[18px] font-semibold leading-snug text-bv-ink transition-colors duration-500 group-hover:text-bv-accent">
                {risk.title}
              </h3>

              <div className="relative mt-4 flex-1 border-t border-bv-line/50 pt-4">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-bv-accent">
                  {t("preventLabel")}
                </span>
                <p className="mt-1.5 text-[14px] leading-relaxed text-bv-muted">
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
