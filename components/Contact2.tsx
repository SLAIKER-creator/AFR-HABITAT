import { config } from "../config";

export default function Contact() {
  const { business, contact } = config;

  return (
    <section id="contact" className="py-24 bg-[#F1F1EC]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-2 h-2 bg-[#E8A33D]" />
          <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
            Contact
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-3">
          {contact.heading}
        </h2>

        <div className="w-24 border-t border-dashed border-[#12222E]/25 mx-auto mb-6" />

        <p className="text-[#3E4A52] mb-10">
          {contact.subtitle}
        </p>

        {/* CTA URGENCE */}
        <a
          href={business.phone.href}
          className="inline-block mb-12 bg-[#C6432E] text-white px-8 py-4 rounded-md text-lg font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A83A28] hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6432E]/40 focus-visible:ring-offset-2"
        >
          <span className="font-mono">{contact.urgentCtaPrefix} {business.phone.display}</span>
        </a>

        {/* FORM */}
        <form className="grid gap-6 text-left max-w-2xl mx-auto bg-white border border-[#12222E]/10 rounded-md p-8">

          <input
            type="text"
            placeholder="Nom"
            className="border border-[#12222E]/15 rounded-md px-4 py-3 bg-[#F1F1EC] transition-all duration-200 hover:border-[#12222E]/30 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="border border-[#12222E]/15 rounded-md px-4 py-3 bg-[#F1F1EC] font-mono transition-all duration-200 hover:border-[#12222E]/30 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-[#12222E]/15 rounded-md px-4 py-3 bg-[#F1F1EC] transition-all duration-200 hover:border-[#12222E]/30 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          />

          <select
            defaultValue=""
            className="border border-[#12222E]/15 rounded-md px-4 py-3 bg-[#F1F1EC] transition-all duration-200 hover:border-[#12222E]/30 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          >
            <option value="" disabled>
              {contact.requestTypePlaceholder}
            </option>
            {contact.requestTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <textarea
            placeholder="Votre message"
            rows={5}
            className="border border-[#12222E]/15 rounded-md px-4 py-3 bg-[#F1F1EC] transition-all duration-200 hover:border-[#12222E]/30 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          />

          <button
            type="submit"
            className="bg-[#12222E] text-white py-4 rounded-md font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1C3547] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] focus-visible:ring-offset-2"
          >
            Envoyer la demande
          </button>
        </form>

        {/* Réassurance */}
        <p className="text-sm font-mono text-[#55636B] mt-6">
          {contact.reassuranceLine}
        </p>

      </div>
    </section>
  );
}
