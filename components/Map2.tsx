import { config } from "../config";

export default function Map() {
  const { business, map } = config;

  const mapQuery = encodeURIComponent(business.address);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E8A33D]" />
            <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
              Localisation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-4">
            {map.heading}
          </h2>
          <p className="text-[#3E4A52]">
            {map.subtitle}
          </p>
        </div>

        {/* Google Map */}
        <div className="relative rounded-md overflow-hidden border border-[#12222E]/10 shadow-sm">
          <iframe
            title={`Carte — ${business.address}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E8A33D] pointer-events-none" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E8A33D] pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
