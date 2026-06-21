export default function CallToAction() {
  return (
    <section className="bg-blue-700 text-white py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Transform Your Network Operations?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Whether you need AI strategy, network optimization,
          digital transformation advisory, or executive consulting,
          let's discuss how we can achieve measurable outcomes.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Schedule Consultation
          </a>

          <a
            href="/services"
            className="border border-white px-8 py-4 rounded-lg"
          >
            View Services
          </a>

        </div>

      </div>

    </section>
  );
}