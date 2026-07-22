"use client";

import Link from "next/link";
import { config } from "../config";

export default function Header() {
  const { business, nav } = config;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F1F1EC]/90 backdrop-blur-md border-b border-[#12222E]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-[#12222E]">
          {business.brandFirst} <span className="text-[#E8A33D]">{business.brandAccent}</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wide text-[#3E4A52]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#E8A33D] transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={business.phone.href}
          className="hidden md:inline-flex items-center bg-[#E8A33D] text-[#12222E] px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#CE8A2A] hover:shadow-md active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12222E]/30 focus-visible:ring-offset-2"
        >
          📞 <span className="font-mono ml-1">{business.phone.display}</span>
        </a>

        {/* Mobile button */}
        <a
          href={business.phone.href}
          className="md:hidden bg-[#E8A33D] text-[#12222E] px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12222E]/30 focus-visible:ring-offset-2"
        >
          Appeler
        </a>
      </div>
    </header>
  );
}
