import { config } from "../config";

export default function Contact() {
  const { business, contact } = config;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {contact.heading}
        </h2>

        <p className="text-gray-600 mb-10">
          {contact.subtitle}
        </p>

        {/* CTA URGENCE */}
        <a
          href={business.phone.href}
          className="inline-block mb-12 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2"
        >
          {contact.urgentCtaPrefix} {business.phone.display}
        </a>

        {/* FORM */}
        <form className="grid gap-6 text-left max-w-2xl mx-auto">

          <input
            type="text"
            placeholder="Nom"
            className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <select
            defaultValue=""
            className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
            className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <button
            type="submit"
            className="bg-[var(--color-primary)] text-white py-4 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2"
          >
            Envoyer la demande
          </button>
        </form>

        {/* Réassurance */}
        <p className="text-sm text-gray-500 mt-6">
          {contact.reassuranceLine}
        </p>

      </div>
    </section>
  );
}
