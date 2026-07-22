import { config } from "../config";

export default function Reviews() {
  const { reviews } = config;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {reviews.heading}
          </h2>
          <p className="text-gray-600">
            {reviews.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.items.map((review) => (
            <div
              key={review.name}
              className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* étoiles */}
              <div className="text-yellow-500 text-lg mb-3">
                ★★★★★
              </div>

              {/* texte */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{review.text}”
              </p>

              {/* auteur */}
              <div className="font-semibold text-gray-900">
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
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          >
            {reviews.ctaLabel}
          </a>
        </div>

      </div>
    </section>
  );
}
