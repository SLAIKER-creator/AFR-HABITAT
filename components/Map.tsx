import { config } from "../config";

export default function Map() {
  const { business, map } = config;

  const mapQuery = encodeURIComponent(business.address);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {map.heading}
          </h2>
          <p className="text-gray-600">
            {map.subtitle}
          </p>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title={`Carte — ${business.address}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
