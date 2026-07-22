"use client";

import Link from "next/link";
import { config } from "../config";

export default function Header() {
  const { business, nav } = config;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold tracking-tight">
          {business.brandFirst} <span className="text-[var(--color-primary)]">{business.brandAccent}</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)] transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={business.phone.href}
          className="hidden md:inline-flex items-center bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2"
        >
          📞 {business.phone.display}
        </a>

        {/* Mobile button */}
        <a
          href={business.phone.href}
          className="md:hidden bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2"
        >
          Appeler
        </a>
      </div>
    </header>
  );
}
