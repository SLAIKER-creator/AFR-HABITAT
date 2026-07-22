import Image from "next/image";
import { config } from "../config";

export default function About() {
  const { business, about } = config;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {about.heading}
          </h2>

          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-gray-600 leading-relaxed ${
                index === about.paragraphs.length - 1 ? "mb-8" : "mb-6"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Points clés */}
          <div className="space-y-3 text-gray-700">
            {about.bullets.map((bullet, index) => (
              <p key={index}>{bullet}</p>
            ))}
          </div>

          {/* CTA */}
          <a
            href={business.phone.href}
            className="inline-block mt-8 bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2"
          >
            {about.ctaLabel}
          </a>
        </div>

        {/* Right visual */}
        <div className="relative h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

      </div>
    </section>
  );
}
