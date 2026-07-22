import { config } from "../config";

export default function Reviews() {
  const { reviews } = config;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E8A33D]" />
            <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
              Avis clients
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-4">
            {reviews.heading}
          </h2>
          <p className="text-[#3E4A52]">
            {reviews.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.items.map((review) => (
            <div
              key={review.name}
              className="relative bg-[#F1F1EC] p-6 rounded-md border border-[#12222E]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E8A33D]/40"
            >
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E8A33D]" />

              {/* étoiles */}
              <div className="text-[#E8A33D] text-lg mb-3 tracking-wider">
                ★★★★★
              </div>

              {/* texte */}
              <p className="text-[#3E4A52] mb-6 leading-relaxed">
                “{review.text}”
              </p>

              {/* auteur */}
              <div className="font-mono text-sm font-semibold text-[#12222E]">
                {review.name}
              </div>
            </div>
          ))}

        </div>

        {/* bouton */}
        <div className="text-center mt-12">
          <a
            href={reviews.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#12222E] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1C3547] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] focus-visible:ring-offset-2"
          >
            {reviews.ctaLabel}
          </a>
        </div>

      </div>
    </section>
  );
}
