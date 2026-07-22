import Link from "next/link";
import { config } from "../config";

export default function Footer() {
  const { business, footer } = config;

  return (
    <footer className="bg-[#12222E] text-[#C7CDD1] py-16 border-t-2 border-[#E8A33D]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Entreprise */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-tight">
            {business.brandFirst} <span className="text-[#E8A33D]">{business.brandAccent}</span>
          </h3>
          <p className="text-sm leading-relaxed">
            {footer.description}
          </p>
        </div>

        {/* Coordonnées */}
        <div>
          <h3 className="text-white text-sm font-mono tracking-widest uppercase mb-4">
            Contact
          </h3>
          <p className="text-sm mb-1">📍 {business.address}</p>
          <p className="text-sm font-mono mb-1">📞 {business.phone.display}</p>
          <p className="text-sm">✉️ {business.email}</p>
        </div>

        {/* Légal */}
        <div>
          <h3 className="text-white text-sm font-mono tracking-widest uppercase mb-4">
            Informations légales
          </h3>
          <p className="text-sm font-mono mb-3">SIRET : {business.siret}</p>
          <ul className="space-y-2">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block text-sm underline decoration-[#55636B] transition-all duration-200 hover:translate-x-0.5 hover:text-[#E8A33D] hover:decoration-[#E8A33D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs font-mono text-[#55636B] mt-12 pt-8 border-t border-dashed border-white/10">
        © {new Date().getFullYear()} {business.brandFirst} {business.brandAccent} — Tous droits réservés
      </div>
    </footer>
  );
}
