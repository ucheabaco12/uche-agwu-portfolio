export default function FeaturedInsights() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Featured Research & Insights
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Research, publications, and thought leadership
            focused on telecommunications, artificial intelligence,
            digital transformation, and next-generation wireless systems.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6 hover:shadow-lg transition">

            <h3 className="text-xl font-bold">
              AI Governance in Telecommunications
            </h3>

            <p className="mt-4 text-slate-600">
              Building responsible AI frameworks for telecom operators
              and critical infrastructure organizations.
            </p>

          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">

            <h3 className="text-xl font-bold">
              Predictive Maintenance Using AI
            </h3>

            <p className="mt-4 text-slate-600">
              Leveraging analytics and machine learning
              to reduce network downtime and improve resilience.
            </p>

          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">

            <h3 className="text-xl font-bold">
              Preparing Networks for 6G
            </h3>

            <p className="mt-4 text-slate-600">
              Exploring emerging wireless technologies,
              semantic communications, and future architectures.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}