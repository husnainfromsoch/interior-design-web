import { getLocale, getTranslations } from "next-intl/server";
import PackageCta from "@/components/spec/PackageCta";

/** Main spec P03 D04: rates are stored net + tax rate; the VAT-inclusive total is calculated, never hand-duplicated. */
const TAX_RATE = 0.05;
const PACKAGES = [
  { key: "full", netAmount: 250 },
  { key: "procurement", netAmount: 310 },
] as const;

function formatAmount(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

export default async function ServiceFees() {
  const t = await getTranslations("ServiceFees");
  const locale = await getLocale();

  const rate = (n: number) =>
    locale === "ru" ? `${formatAmount(n)}${t("perM2")}` : `AED ${formatAmount(n)}${t("perM2")}`;

  return (
    <section id="fees" className="scroll-mt-[104px] bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <h2 className="font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
          {t("heading")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2">
          {PACKAGES.map(({ key, netAmount }) => {
            const gross = Math.round(netAmount * (1 + TAX_RATE) * 100) / 100;
            const features = t.raw(`${key}.features`) as string[];
            return (
              <div key={key} className="flex flex-col rounded-lg border border-bv-line bg-bv-background p-7 sm:p-9">
                <h3 className="font-bv-heading text-[26px] font-medium leading-[1.18] text-bv-ink sm:text-[28px] lg:text-[30px]">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-4 text-[17px] font-semibold leading-[1.5] text-bv-ink">
                  {t("from")} {rate(netAmount)}, {t("exclVat")}
                </p>
                <p className="text-[17px] font-semibold leading-[1.5] text-bv-ink">
                  ({rate(gross)} {t("inclVat")})
                </p>
                <p className="mt-4 text-[16px] leading-[1.65] text-bv-muted">{t(`${key}.description`)}</p>
                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[16px] leading-[1.6] text-bv-ink">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-none bg-bv-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PackageCta
                  packageName={t(`${key}.title`)}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-[15px] font-semibold text-bv-ink underline decoration-bv-accent underline-offset-4 transition-colors duration-200 hover:text-bv-accent"
                >
                  {t(`${key}.cta`)} →
                </PackageCta>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-[800px] text-[15px] leading-[1.6] text-bv-muted">{t("note")}</p>
      </div>
    </section>
  );
}
