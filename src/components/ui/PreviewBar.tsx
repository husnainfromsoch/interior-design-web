import { getLocale } from "next-intl/server";

// Spec §15.22: staging shows a visible preview bar; production never does.
// Enabled with NEXT_PUBLIC_STAGING=1 on the staging deployment only.
export default async function PreviewBar() {
  if (process.env.NEXT_PUBLIC_STAGING !== "1") return null;
  const locale = await getLocale();
  return (
    <div className="bg-bv-ink px-4 py-2 text-center text-[13px] font-semibold text-bv-white">
      {locale === "ru" ? "Предпросмотр: тестовые обращения" : "Preview: test enquiries"}
    </div>
  );
}
