import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center gap-2 rounded-[2px] px-[28px] py-[14px] text-sm font-semibold tracking-wide transition-all duration-200 ease-out active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "border border-bv-accent bg-bv-accent text-bv-background  hover:border-bv-accent-hover hover:bg-bv-accent-hover ",
  outline:
    "border border-bv-ink/70 text-bv-ink hover:border-bv-ink hover:bg-bv-ink hover:text-bv-background ",
  "outline-light":
    "border border-bv-background/70 text-bv-background hover:border-bv-background hover:bg-bv-background hover:text-bv-ink ",
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
