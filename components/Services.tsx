import { config } from "../config";

export default function Services() {
  const { services } = config;

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {services.heading}
          </h2>
          <p className="text-gray-600">
            {services.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-[var(--color-primary)] text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <p className="text-sm text-gray-500">
                {service.bullets}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
