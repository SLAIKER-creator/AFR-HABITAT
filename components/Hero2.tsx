import { config } from "../config";

export default function Hero() {
  const { business, hero } = config;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12222E] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(232,163,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,163,61,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12222E]/40 via-transparent to-[#12222E]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Badge confiance */}
        <div className="mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#E8A33D] border border-[#E8A33D]/30 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 bg-[#E8A33D] rounded-full" />
          {hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {hero.titleLine1}{" "}
          <span className="text-[#E8A33D]">
            {hero.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#C7CDD1] mb-8 leading-relaxed">
          {hero.subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary */}
          <a
            href={business.phone.href}
            className="bg-[#E8A33D] text-[#12222E] px-8 py-4 rounded-md text-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#CE8A2A] hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12222E]"
          >
            {hero.primaryCtaLabel}
          </a>

          {/* Secondary */}
          <a
            href={hero.secondaryCtaHref}
            className="border border-white/25 px-8 py-4 rounded-md text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:border-white/40 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12222E]"
          >
            {hero.secondaryCtaLabel}
          </a>

        </div>

        {/* Proof */}
        <div className="mt-10 font-mono text-sm text-[#8A97A0]">
          {hero.proofLine}
        </div>

      </div>
    </section>
  );
}
