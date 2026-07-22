import { config } from "../config";

export default function Zone() {
  const { zone } = config;

  return (
    <section id="zone" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {zone.heading}
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed">
          {zone.intro}
        </p>

        {/* Villes */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {zone.cities.map((city) => (
            <span
              key={city}
              className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary-light)] hover:text-[var(--color-primary)] hover:shadow-md"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Texte SEO */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {zone.seoText}
        </p>

      </div>
    </section>
  );
}
