import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-soft-black text-stone">
      <div className="mx-auto max-w-[1180px] px-6 py-11 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5 text-sm">
          <div>G.A.G Interiors &mdash; Dubai, UAE</div>
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="opacity-75 transition-opacity hover:opacity-100">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="tel:+971588099223" className="opacity-75 transition-opacity hover:opacity-100">
              +971 58 809 9223
            </a>
            <a href="mailto:info@gaginteriors.com" className="opacity-75 transition-opacity hover:opacity-100">
              info@gaginteriors.com
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-stone/60">
          &copy; {new Date().getFullYear()} G.A.G Interiors. All rights reserved. &mdash; Gohr Al Gillani Technical Services
        </div>
      </div>
    </footer>
  );
}
