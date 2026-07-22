import { config } from "../config";

export default function Services() {
  const { services } = config;

  return (
    <section id="services" className="py-24 bg-[#F1F1EC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#E8A33D]" />
            <span className="font-mono text-xs tracking-widest uppercase text-[#55636B]">
              Prestations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#12222E] mb-4">
            {services.heading}
          </h2>
          <p className="text-[#3E4A52]">
            {services.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white p-8 rounded-md border border-[#12222E]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E8A33D]/40"
            >
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E8A33D]" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E8A33D]" />

              <div className="text-[#E8A33D] text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#12222E] mb-3">
                {service.title}
              </h3>
              <p className="text-[#3E4A52] mb-4">
                {service.description}
              </p>
              <p className="text-sm font-mono text-[#55636B]">
                {service.bullets}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
