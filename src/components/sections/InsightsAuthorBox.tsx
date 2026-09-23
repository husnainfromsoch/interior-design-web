import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AUTHOR } from "@/data/insights";

export default function InsightsAuthorBox({
  locale,
  linkLabel,
  srLabel,
}: {
  locale: string;
  linkLabel: string;
  srLabel: string;
}) {
  const role = locale === "ru" ? AUTHOR.role.ru : AUTHOR.role.en;
  const bio = locale === "ru" ? AUTHOR.bio.ru : AUTHOR.bio.en;

  return (
    <div id="author" className="scroll-mt-32 max-w-[720px] border-y border-bv-line py-8">
      <span className="sr-only">{srLabel}</span>
      <div className="flex items-start gap-4">
        {AUTHOR.photo && (
          <div className="relative h-24 w-24 flex-none overflow-hidden rounded-full">
            <Image src={AUTHOR.photo} alt={AUTHOR.name} fill sizes="96px" className="object-cover" />
          </div>
        )}
        <div>
          <h3 className="font-bv-heading text-[22px] font-medium text-bv-ink">{AUTHOR.name}</h3>
          <p className="mt-1 font-bv-body text-[15px] font-medium text-bv-accent">{role}</p>
          <p className="mt-3 text-[16px] leading-[1.65] text-bv-ink/80">{bio}</p>
          <Link
            href={AUTHOR.profileLink}
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-bv-ink underline underline-offset-4 decoration-bv-accent transition-colors duration-200 hover:text-bv-accent"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
