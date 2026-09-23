import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center gap-2 rounded-full px-[28px] py-[14px] text-sm font-semibold tracking-wide transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "border border-bv-accent bg-bv-accent text-bv-background shadow-[0_8px_20px_-8px_rgba(124,90,58,0.65)] hover:border-bv-accent-hover hover:bg-bv-accent-hover hover:shadow-[0_10px_24px_-8px_rgba(95,68,41,0.7)]",
  outline:
    "border border-bv-ink/70 text-bv-ink hover:border-bv-ink hover:bg-bv-ink hover:text-bv-background hover:shadow-[0_10px_24px_-10px_rgba(46,42,37,0.5)]",
  "outline-light":
    "border border-bv-background/70 text-bv-background hover:border-bv-background hover:bg-bv-background hover:text-bv-ink hover:shadow-[0_10px_24px_-10px_rgba(247,243,236,0.35)]",
};

export default function Button({
  href,
  variant = "primary",
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
}) {
  const className = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
