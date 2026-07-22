import { config } from "../config";

export default function Hero() {
  const { business, hero } = config;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[var(--color-primary-dark)] text-white">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Badge confiance */}
        <div className="mb-6 text-sm text-gray-200">
          {hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {hero.titleLine1}{" "}
          <span className="text-[var(--color-primary-light)]">
            {hero.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          {hero.subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary */}
          <a
            href={business.phone.href}
            className="bg-[var(--color-primary)] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {hero.primaryCtaLabel}
          </a>

          {/* Secondary */}
          <a
            href={hero.secondaryCtaHref}
            className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {hero.secondaryCtaLabel}
          </a>

        </div>

        {/* Proof */}
        <div className="mt-10 text-sm text-gray-300">
          {hero.proofLine}
        </div>

      </div>
    </section>
  );
}
