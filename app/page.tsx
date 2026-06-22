import Image from "next/image";

import Stats from "../components/Stats";
import Industries from "../components/Industries";
import ServicePillars from "../components/ServicePillars";
import ExecutiveProfile from "../components/ExecutiveProfile";
import FeaturedInsights from "../components/FeaturedInsights";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>

            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Founder & Chief Visionary Officer | Aethergion
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Helping Telecom Operators Deploy Trustworthy AI,
              Optimize Networks, and Accelerate Digital
              Transformation.
            </h1>

            <p className="text-2xl text-slate-700 mt-8">
              Telecommunications, AI Governance, and Data Science Advisor
              helping organizations improve network performance,
              operational resilience, and AI readiness.
            </p>

            <p className="mt-8 text-lg text-slate-600">
              Leveraging more than 14 years of experience in
              telecommunications, advanced analytics,
              artificial intelligence, and next-generation wireless
              systems.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-4 mt-10">

              <a
                href="/contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Schedule Consultation
              </a>

              <a
                href="/resources"
                className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition"
              >
                Download Profile
              </a>

            </div>

            {/* CREDIBILITY BADGES */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700">

              <span className="bg-slate-100 px-4 py-2 rounded-full">
                ✓ PhD Communication Engineering
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full">
                ✓ 14+ Years Industry Experience
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full">
                ✓ AI Governance & Responsible AI Advisor
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full">
                ✓ Wireless Systems & Network Optimization Expert
              </span>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center">

            <Image
              src="/images/profile.jpg"
              alt="Dr. Uche Agwu"
              width={550}
              height={650}
              className="rounded-2xl shadow-xl"
              priority
            />

          </div>

        </div>

      </section>

      {/* STATS */}
      <Stats />

      {/* INDUSTRIES */}
      <Industries />

      {/* SERVICE AREAS */}
      <ServicePillars />

      {/* EXECUTIVE PROFILE */}
      <ExecutiveProfile />

      {/* RESEARCH & INSIGHTS */}
      <FeaturedInsights />

      {/* FINAL CTA */}
      <CallToAction />

    </main>
  );
}