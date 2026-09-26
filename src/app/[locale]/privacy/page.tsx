import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { company } from "@/data/company";
import { sc } from "@/lib/spec";

// Spec §15.20 P23 Privacy Notice: single column ≤ 800 px, anchored table of contents,
// no hero image. Copy is C-P23 verbatim. A section whose square-bracket values the
// company has not supplied yet is left out rather than published with brackets.

const LAST_UPDATED = { en: "26 September 2026", ru: "26 сентября 2026 г." };

const SECTIONS = [
  { key: "Who we are", id: "who-we-are", ru: "Кто мы" },
  { key: "Information you provide", id: "information", ru: "Какие сведения вы передаёте" },
  { key: "How we use it", id: "use", ru: "Как мы их используем" },
  { key: "Service providers", id: "providers", ru: "Поставщики услуг" },
  { key: "Retention", id: "retention", ru: "Сроки хранения" },
  { key: "Your choices", id: "choices", ru: "Ваши возможности" },
  { key: "External services", id: "external", ru: "Внешние сервисы" },
  { key: "Changes", id: "changes", ru: "Изменения" },
];

function fill(text: string): string | null {
  const values: Record<string, string | null> = {
    "[LEGAL ENTITY]": company.legal.entityName,
    "[ЮРИДИЧЕСКОЕ ЛИЦО]": company.legal.entityName,
    "[CONTACT EMAIL]": company.privacy.contactEmail,
    "[LEGAL ADDRESS]": company.legal.registeredAddress,
    "[ЮРИДИЧЕСКИЙ АДРЕС]": company.legal.registeredAddress,
    "[ACTUAL PROVIDERS AND LOCATIONS]": company.privacy.providers.en,
    "[ФАКТИЧЕСКИЕ ПОСТАВЩИКИ И ГЕОГРАФИЯ]": company.privacy.providers.ru,
    "[APPROVED RETENTION SCHEDULE]": company.privacy.retention.en,
    "[УТВЕРЖДЁННЫЙ ПОРЯДОК ХРАНЕНИЯ]": company.privacy.retention.ru,
  };
  let out = text;
  for (const [token, value] of Object.entries(values)) {
    if (!out.includes(token)) continue;
    if (!value) return null;
    out = out.split(token).join(value);
  }
  return /\[[^\]]+\]/.test(out) ? null : out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${locale === "ru" ? "Обработка персональных данных" : "Privacy Notice"} | Bellvero Group`,
    description: sc("C-P23", "Information you provide", locale),
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ru = locale === "ru";
  const sections = SECTIONS.map((s) => ({ ...s, title: ru ? s.ru : s.key, body: fill(sc("C-P23", s.key, locale)) })).filter(
    (s): s is typeof s & { body: string } => s.body !== null
  );

  return (
    <section className="bv-flow bg-bv-background pb-14 pt-10 md:pb-[72px] lg:pb-[104px] lg:pt-16">
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-8">
        <h1 className="font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
          {ru ? "Обработка персональных данных" : "Privacy Notice"}
        </h1>
        <p className="mt-4 text-[15px] text-bv-muted">
          {ru ? "Дата редакции" : "Last updated"}: {LAST_UPDATED[ru ? "ru" : "en"]}
        </p>

        <nav aria-label={ru ? "Содержание" : "Contents"} className="mt-8 border-y border-bv-line py-4">
          <ol className="grid gap-1 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex min-h-11 items-center text-[16px] text-bv-ink underline-offset-4 hover:text-bv-accent hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-[88px] pt-10 lg:scroll-mt-[104px]">
            <h2 className="font-bv-heading text-[26px] font-medium leading-[1.2] text-bv-ink lg:text-[30px]">{s.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-bv-ink lg:text-[17px]">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
