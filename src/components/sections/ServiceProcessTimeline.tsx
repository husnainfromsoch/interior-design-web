import { getTranslations } from "next-intl/server";
import type { ServiceProcessStep } from "@/data/services";
import ServiceProcessSteps from "@/components/sections/ServiceProcessSteps";

export default async function ServiceProcessTimeline({ steps }: { steps: ServiceProcessStep[] }) {
  const t = await getTranslations("ServiceDetail");
  return <ServiceProcessSteps steps={steps} eyebrow={t("howItWorks")} heading={t("processHeading")} />;
}
