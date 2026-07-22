import { config } from "../config";

export default function Zone() {
  const { zone } = config;

  return (
    <section id="zone" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-2 h-2 bg-[#E8A33D]" />
          <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
            Zone d'intervention
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-3">
          {zone.heading}
        </h2>

        <div className="w-24 border-t border-dashed border-[#12222E]/25 mx-auto mb-6" />

        <p className="text-[#3E4A52] mb-10 leading-relaxed">
          {zone.intro}
        </p>

        {/* Villes */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {zone.cities.map((city) => (
            <span
              key={city}
              className="bg-[#F1F1EC] border border-[#12222E]/15 px-4 py-2 rounded-md text-sm font-mono transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8A33D] hover:text-[#12222E] hover:shadow-sm"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Texte SEO */}
        <p className="text-[#3E4A52] max-w-3xl mx-auto leading-relaxed">
          {zone.seoText}
        </p>

      </div>
    </section>
  );
}
