export default function ExecutiveProfile() {
  return (
    <section className="bg-slate-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-wide">
              Executive Profile
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Why Organizations Work With Dr. Uche Agwu
            </h2>

            <p className="mt-8 text-lg text-slate-700 leading-relaxed">
              Dr. Uche Agwu is a Telecommunications Engineer,
              AI strategist, researcher, and founder of Aethergion.
              He helps Mobile Network Operators and Critical
              Network Infrastructure Providers deploy trustworthy AI,
              improve network performance, and accelerate
              digital transformation initiatives.
            </p>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              With more than 14 years of experience spanning
              telecommunications, advanced analytics,
              wireless communications, AI governance,
              and operational excellence,
              he combines deep technical expertise
              with executive-level strategic advisory.
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="grid gap-4">

            <div className="bg-white border rounded-xl p-5">
              ✓ PhD in Communication Engineering
            </div>

            <div className="bg-white border rounded-xl p-5">
              ✓ MSc Information & Telecommunication Engineering
            </div>

            <div className="bg-white border rounded-xl p-5">
              ✓ Founder & Chief Visionary Officer, Aethergion
            </div>

            <div className="bg-white border rounded-xl p-5">
              ✓ Telecommunications & Network Optimization Specialist
            </div>

            <div className="bg-white border rounded-xl p-5">
              ✓ AI Governance & Responsible AI Advisor
            </div>

            <div className="bg-white border rounded-xl p-5">
              ✓ Data Science & Digital Transformation Expert
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}