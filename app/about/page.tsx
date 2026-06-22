import Image from "next/image";

export default function About() {
  return (
    <main>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-blue-700 text-3xl font-bold mb-6">
              About Dr. Uche Agwu
            </h1>

            <h2 className="text-5xl font-bold leading-tight">
              Telecommunications Engineer,
              AI Strategist, Researcher,
              and Founder of Aethergion.
            </h2>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
               <p className="text-slate-700 leading-relaxed font-medium">
                One of the few professionals combining Telecommunication
                Engineering, AI governance, Data Science, and Digital 
                Transformation expertise to help network operators deploy 
                trustworthy AI and achieve measurable operational outcomes.
              </p>
            </div>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Dr. Uche Agwu helps telecommunications operators,
              critical network infrastructure providers, and technology
              organizations deploy trustworthy AI, optimize
              network performance, and accelerate digital
              transformation initiatives.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
                ✓ PhD Communication Engineering
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
                ✓ 14+ Years Industry Experience
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
                ✓ AI Governance Advisor
              </span>

              <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
                ✓ Wireless Systems Researcher
              </span>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/phd.png"
              alt="Dr. Uche Agwu"
              width={520}
              height={620}
              className="rounded-2xl shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* Executive Biography */}
      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <span className="text-blue-700 font-semibold uppercase tracking-wide">
                Executive Biography
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-8">
                Why Organizations Work With Dr. Uche Agwu
              </h2>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">

                <p>
                  Dr. Uche Agwu is a Telecommunications Engineer,
                  AI Strategist, Researcher, and Founder of
                  Aethergion. He helps Mobile Network Operators
                  and Critical Network Infrastructure Providers
                  deploy trustworthy AI, improve network
                  performance, and accelerate digital
                  transformation initiatives.
                </p>

                <p>
                  With more than 14 years of experience spanning
                  telecommunications, advanced analytics,
                  artificial intelligence, wireless communication systems,
                  and technology strategy, he combines deep
                  technical expertise with executive-level
                  advisory capabilities.
                </p>

                <p>
                  His work focuses on helping organizations
                  achieve measurable operational improvements,
                  strengthen resilience, modernize technology
                  ecosystems, and prepare for the future of
                  intelligent network operations.
                </p>

              </div>

            </div>

            <div className="space-y-4">

              <div className="border rounded-xl p-5 bg-white">
                ✓ PhD in Communication Engineering
              </div>

              <div className="border rounded-xl p-5 bg-white">
                ✓ MSc Information & Telecommunication Engineering
              </div>

              <div className="border rounded-xl p-5 bg-white">
                ✓ Founder & Chief Visionary Officer | Aethergion
              </div>

              <div className="border rounded-xl p-5 bg-white">
                ✓ Telecommunications & Network Optimization Specialist
              </div>

              <div className="border rounded-xl p-5 bg-white">
                ✓ AI Governance & Responsible AI Advisor
              </div>

              <div className="border rounded-xl p-5 bg-white">
                ✓ Data Science & Digital Transformation Expert
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Research & Thought Leadership */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Research, Innovation & Thought Leadership
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Dr. Agwu's work spans telecommunications,
            artificial intelligence, wireless communications,
            digital transformation, and emerging technologies
            shaping the future of intelligent network systems.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="border rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">
              AI Governance
            </h3>
            <p className="text-slate-600">
              Responsible AI frameworks, compliance,
              risk management, and AI readiness
              strategies for telecom operators.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">
              Advanced Wireless Communication Systems
            </h3>
            <p className="text-slate-600">
              5G Advanced, 6G, Massive MIMO,
              semantic communications, and
              next-generation wireless architectures.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">
              Network Intelligence
            </h3>
            <p className="text-slate-600">
              Predictive maintenance, analytics,
              optimization, automation, and
              AI-driven network operations.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}