import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-beige-dark/60 bg-charcoal text-beige">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-white">Studio Interiors</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige/70">
              Bespoke interior design for discerning clients across Dubai,
              Abu Dhabi and the UAE.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-white">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-beige/70">
              <li>Dubai Design District, Dubai, UAE</li>
              <li>+971 4 000 0000</li>
              <li>hello@studiointeriors.ae</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-beige/50">
          © {new Date().getFullYear()} Studio Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
