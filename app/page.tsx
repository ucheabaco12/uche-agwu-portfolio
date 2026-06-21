import Stats from "../components/Stats";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <section className="max-w-7xl mx-auto px-6 py-32">

        <span className="text-blue-700 font-semibold">
          Founder & Chief Vision Officer | Aethergion
        </span>

        <h1 className="text-6xl font-bold mt-4">
          Dr. Uche Agwu
        </h1>

        <h2 className="text-2xl text-slate-700 mt-4">
          AI • Telecommunications • Wireless Systems • Digital Transformation
        </h2>

        <p className="mt-8 text-lg max-w-3xl">
          Helping telecom and critical infrastructure organizations
          deploy trustworthy AI, advanced analytics,
          intelligent automation, and next-generation
          wireless technologies.
        </p>

        <div className="mt-10 flex gap-4">

          <a
            href="/services"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg"
          >
            Contact Me
          </a>

        </div>

      </section>

    </main>
  );
}