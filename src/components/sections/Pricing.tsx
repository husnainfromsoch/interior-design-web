import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PLAN_IDS = [
  { id: "basic", price: "AED 4,900", highlight: false },
  { id: "standard", price: "AED 12,000", highlight: true },
  { id: "premium", price: "AED 22,000", highlight: false },
] as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path
        d="M4 10.5L8 14.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function Pricing() {
  const t = await getTranslations("Pricing");
  const pricingPlans = PLAN_IDS.map((plan) => ({
    ...plan,
    name: t(`plans.${plan.id}.name`),
    description: t(`plans.${plan.id}.description`),
    features: t.raw(`plans.${plan.id}.features`) as string[],
  }));
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px]">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={`reveal-scale relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-soft-black text-ivory shadow-[0_24px_48px_-20px_rgba(28,25,22,0.45)] lg:-translate-y-3"
                  : "border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)]"
              }`}
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-8 rounded-full bg-wood px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory">
                  {t("popular")}
                </span>
              )}

              <h3 className="text-[19px] font-medium">{plan.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlight ? "text-stone" : "text-warm-grey"
                }`}
              >
                {plan.description}
              </p>

              <p className="mt-6 font-serif text-4xl">
                {plan.price}
                <span
                  className={`ml-1 text-sm font-sans ${
                    plan.highlight ? "text-stone" : "text-warm-grey"
                  }`}
                >
                  {t("perPackage")}
                </span>
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${
                      plan.highlight ? "text-stone" : "text-warm-grey"
                    }`}
                  >
                    <span className={plan.highlight ? "text-champagne" : "text-wood"}>
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlight
                    ? "bg-ivory text-soft-black hover:bg-champagne"
                    : "border border-charcoal/70 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                }`}
              >
                {t("selectPlan")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
