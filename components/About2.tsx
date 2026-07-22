import Image from "next/image";
import { config } from "../config";

export default function About() {
  const { business, about } = config;

  return (
    <section className="py-24 bg-[#F1F1EC]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E8A33D]" />
            <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
              À propos
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-3">
            {about.heading}
          </h2>

          <div className="w-24 border-t border-dashed border-[#12222E]/25 mb-6" />

          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-[#3E4A52] leading-relaxed ${
                index === about.paragraphs.length - 1 ? "mb-8" : "mb-6"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Points clés */}
          <div className="space-y-3 text-[#12222E]">
            {about.bullets.map((bullet, index) => (
              <p key={index} className="flex gap-3">
                <span className="font-mono text-[#E8A33D]">▪</span>
                {bullet}
              </p>
            ))}
          </div>

          {/* CTA */}
          <a
            href={business.phone.href}
            className="inline-block mt-8 bg-[#E8A33D] text-[#12222E] px-6 py-3 rounded-md font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#CE8A2A] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12222E]/40 focus-visible:ring-offset-2"
          >
            {about.ctaLabel}
          </a>
        </div>

        {/* Right visual */}
        <div className="relative h-[400px] overflow-hidden rounded-md border border-[#12222E]/10">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E8A33D]" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E8A33D]" />
        </div>

      </div>
    </section>
  );
}
