export default function Industries() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center">
        Industries We Serve
      </h2>

      <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto">
        Helping Mobile Network Operators and Critical Network Infrastructure
        Providers deploy AI, optimize operations, and accelerate innovation.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            Mobile Network Operators
          </h3>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            Internet Service Providers
          </h3>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            MVNOs
          </h3>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            Fixed Network Operators
          </h3>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            Wholesale Carriers
          </h3>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-xl">
            Critical Infrastructure Providers
          </h3>
        </div>

      </div>

    </section>
  );
}