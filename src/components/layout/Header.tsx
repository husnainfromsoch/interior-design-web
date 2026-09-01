import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-beige-dark/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-charcoal"
        >
          Studio Interiors
        </Link>

        <nav className="hidden gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-gold px-5 py-2 text-sm tracking-wide text-gold transition-colors hover:bg-gold hover:text-white md:inline-block"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
