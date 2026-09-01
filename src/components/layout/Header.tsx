import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="font-serif text-xl tracking-wide text-charcoal">
          G.A.G <span className="text-wood">Interiors</span>
        </Link>

        <div className="hidden gap-9 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/75 transition-opacity hover:opacity-100 hover:text-wood"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <span className="flex gap-1.5 text-xs tracking-wider text-warm-grey">
            <span className="font-semibold text-charcoal">EN</span>
            <span>&middot;</span>
            <span>RU</span>
          </span>
          <Link
            href="/contact"
            className="rounded bg-wood px-5 py-2.5 text-[13px] font-semibold text-ivory transition-colors hover:bg-wood-dark"
          >
            Request a Quote
          </Link>
        </div>

        <Link
          href="/contact"
          className="rounded bg-wood px-4 py-2 text-[13px] font-semibold text-ivory md:hidden"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
