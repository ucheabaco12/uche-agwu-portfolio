import CallToAction from "../components/CallToAction";
import FeaturedInsights from "../components/FeaturedInsights";
import ExecutiveProfile from "../components/ExecutiveProfile";
import ServicePillars from "../components/ServicePillars";
import Industries from "../components/Industries";
import Image from "next/image";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>

            <span className="text-blue-750 font-semibold">
              Founder & Chief Visionary Officer | Aethergion
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Helping Mobile Network Operators and Critical Network Infrastructure Providers Deploy AI,
              Optimize Networks, and Accelerate
              Digital Transformation
            </h1>

            <p className="text-xl text-slate-700 mt-8">
              Telecommunications, AI Governance, and Data Science Advisor
              helping organizations improve network performance,
              operational resilience, and AI readiness.
            </p>

            <p className="mt-8 text-lg text-slate-600">
              Leveraging more than 14 years of experience in
              telecommunications, advanced analytics,
              artificial intelligence, and next-generation
              wireless systems.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
              >
                Schedule Consultation
              </a>

              <a
                href="/resources"
                className="border px-6 py-3 rounded-lg hover:bg-slate-100"
              >
                Download Profile
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center">

            <Image
              src="/images/profile.jpg"
              alt="Dr. Uche Agwu"
              width={450}
              height={550}
              className="rounded-2xl shadow-2xl"
              priority
            />

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <Stats />
      <Industries />
      <ServicePillars />
      <ExecutiveProfile />
      <FeaturedInsights />
      <CallToAction />

    </main>
  );
}