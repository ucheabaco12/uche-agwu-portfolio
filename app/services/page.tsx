export default function Services() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold">
        Consulting Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">
            Telecom Intelligence & Network Optimization
          </h2>

          <p className="mt-4">
            Predictive maintenance, fault analytics,
            network optimization, capacity forecasting,
            and SLA monitoring.
          </p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">
            AI & Data Science Solutions
          </h2>

          <p className="mt-4">
            Machine learning, predictive analytics,
            generative AI, business intelligence,
            and data engineering.
          </p>
        </div>

      </div>

    </main>
  );
}