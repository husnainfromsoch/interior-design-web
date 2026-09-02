import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";

export default async function ApprovalsTeaser() {
  const t = await getTranslations("ApprovalsTeaser");
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal-left order-2 lg:order-1">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">{t("title")}</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            {t("body")}
          </p>
          <div className="mt-6">
            <Button href="/services/approvals-noc-permits" variant="outline">
              {t("cta")}
            </Button>
          </div>
        </div>
        <div className="reveal-right group relative order-1 aspect-[16/11] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)] lg:order-2">
          <Image
            src="/images/imgi_3_5ec2bdbdede983e2b0bff75f_UWS_001.jpg"
            alt="Interior documentation and approvals reference"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
