export default function ServicePillars() {
  const services = [
    {
      title: "Telecom Intelligence & Network Optimization",
      description:
        "AI-driven network performance optimization, predictive maintenance, fault analytics, capacity forecasting, and SLA management.",
    },
    {
      title: "AI & Data Science Solutions",
      description:
        "Machine learning, predictive analytics, data engineering, business intelligence, and generative AI solutions.",
    },
    {
      title: "AI Governance & Responsible AI",
      description:
        "AI governance frameworks, ISO/IEC 42001 readiness, risk management, compliance, and model governance.",
    },
    {
      title: "Wireless Communications & Research",
      description:
        "5G Advanced, 6G advisory, Massive MIMO optimization, beamforming, semantic communications, and wireless systems research.",
    },
    {
      title: "Digital Transformation Strategy",
      description:
        "Technology modernization, operational excellence, innovation strategy, process optimization, and executive advisory.",
    },
    {
      title: "Sustainability & Energy Optimization",
      description:
        "Energy analytics, renewable integration, infrastructure efficiency, carbon reduction, and ESG support.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center">
        Strategic Service Areas
      </h2>

      <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto">
        Delivering practical AI, telecommunications, and digital transformation
        solutions that improve performance, resilience, and business outcomes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="border rounded-xl p-8 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}