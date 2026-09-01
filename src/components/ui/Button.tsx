import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center gap-2 rounded px-[26px] py-[14px] text-sm font-semibold tracking-wide transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-wood text-ivory hover:bg-wood-dark",
  outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
  "outline-light": "border border-ivory text-ivory hover:bg-ivory hover:text-soft-black",
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
