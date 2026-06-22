export default function Services() {
  return (
    <main>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-4xl">

          <span className="inline-block bg-blue-50 text-blue-700 px-10 py-4 rounded-full font-semibold uppercase tracking-wide">
            Strategic Advisory Services
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Strategic Advisory Services for
            Telecommunications, AI, and
            Digital Transformation
          </h1>

            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mt-8 max-w-3xl leading-relaxed">
              Helping telecommunications operators and critical
              infrastructure providers deploy trustworthy AI,
              optimize network performance, and modernize
              operations through practical, measurable solutions.
            </p>
          
          <div className="flex gap-4 mt-10">

            <a
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Schedule Consultation
            </a>

            <a
              href="/about"
              className="border px-6 py-3 rounded-lg"
            >
              Learn More
            </a>

          </div>
          <div className="flex flex-wrap gap-4 mt-8">

             <span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm">
               ✓ PhD Communication Engineering
             </span>

             <span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm">
               ✓ 14+ Years Telecom Experience
             </span>

             <span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm">
               ✓ AI Governance & Responsible AI
              </span>

              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm">
               ✓ Telecom Network Performance Optimization
              </span>

          </div>
          
          {/* INSERT NEW POSITIONING STATEMENT HERE */}

             <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-4xl">
               <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  Trusted advisor helping telecommunications and critical infrastructure
                  organizations deploy trustworthy AI, optimize networks, and accelerate
                  digital transformation.
                </p>
              </div>

        </div>

      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold">
            Strategic Service Areas
          </h2>

                    
          <p className="mt-6 text-slate-600">
            Delivering practical telecommunications,
            artificial intelligence, and digital
            transformation solutions that improve
            performance, resilience, and business outcomes.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Telecom Intelligence & Network Optimization
            </h3>

            <p className="text-slate-600 mb-6">
              Improve network performance,
              operational resilience, and service
              quality using analytics, predictive
              maintenance, fault analytics, and
              intelligent automation.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ Network Optimization</li>
              <li>✓ Predictive Maintenance</li>
              <li>✓ Fault Analytics</li>
              <li>✓ Capacity Forecasting</li>
              <li>✓ SLA Monitoring</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              AI & Data Science Solutions
            </h3>

            <p className="text-slate-600 mb-6">
              Design and implement practical AI
              solutions that generate measurable
              operational and business value.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ Machine Learning Solutions</li>
              <li>✓ Predictive Analytics</li>
              <li>✓ Business Intelligence</li>
              <li>✓ AI Engineering</li>
              <li>✓ Generative AI Applications</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              AI Governance & Responsible AI
            </h3>

            <p className="text-slate-600 mb-6">
              Develop governance frameworks that
              ensure AI systems remain compliant,
              trustworthy, transparent, and aligned
              with organizational objectives.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ AI Governance Frameworks</li>
              <li>✓ ISO/IEC 42001 Readiness</li>
              <li>✓ Risk Management</li>
              <li>✓ Compliance Assessments</li>
              <li>✓ Responsible AI Programs</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Wireless Communications & Research
            </h3>

            <p className="text-slate-600 mb-6">
              Provide strategic advisory services
              around emerging wireless technologies
              and future network architectures.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ 5G Advanced</li>
              <li>✓ 6G Readiness</li>
              <li>✓ Massive MIMO</li>
              <li>✓ Beamforming Optimization</li>
              <li>✓ Semantic Communications</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Digital Transformation Strategy
            </h3>

            <p className="text-slate-600 mb-6">
              Guide organizations through technology
              modernization, innovation programs,
              operational excellence, and strategic
              transformation initiatives.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ Technology Strategy</li>
              <li>✓ Trainings & Facilitations</li>
              <li>✓ Innovation Programs</li>
              <li>✓ Process Optimization</li>
              <li>✓ Executive Advisory</li>
              <li>✓ Transformation Roadmaps</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Sustainability & Energy Optimization
            </h3>

            <p className="text-slate-600 mb-6">
              Support sustainability initiatives
              through energy analytics, renewable
              integration, and infrastructure
              optimization.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✓ Energy Analytics</li>
              <li>✓ Renewable Integration</li>
              <li>✓ Carbon Reduction</li>
              <li>✓ Infrastructure Efficiency</li>
              <li>✓ ESG Support</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Credibility Section */}
      <section className="bg-slate-50 py-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-14">
              Why Organizations Engage Dr. Uche Agwu
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-700">14+</h3>
            <p className="mt-2 text-slate-600">
              Years Telecom Experience
            </p>
          </div>

          <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-700">PhD</h3>
            <p className="mt-2 text-slate-600">
              Communication Engineering
            </p>
          </div>

        <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
           <h3 className="text-4xl font-bold text-blue-700">AI</h3>
           <p className="mt-2 text-slate-600">
             Governance & Responsible AI
          </p>
       </div>

      <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-semibold">
          Telecommunications Network Optimization
        </h3>
      </div>

      <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-semibold">
          Wireless Systems Research
        </h3>
      </div>

      <div className="border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-semibold">
          Digital Transformation Advisory
        </h3>
      </div>
      </div>

    </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Improve Network Performance
            and Accelerate AI Adoption?
          </h2>

          <p className="mt-8 text-xl text-blue-100">
            Let's discuss how trustworthy AI,
            advanced analytics, and digital
            transformation can create measurable
            outcomes for your organization.
          </p>

          <div className="flex justify-center gap-4 mt-10">

            <a
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Schedule Consultation
            </a>

            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}