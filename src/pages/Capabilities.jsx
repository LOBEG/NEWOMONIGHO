import { Link } from "react-router-dom";

const technicalCapabilities = [
  {
    icon: "⚙️",
    title: "Engineering",
    description:
      "World-class engineering teams designing next-generation defense and aerospace systems with precision and innovation.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "State-of-the-art manufacturing facilities producing complex platforms and subsystems at scale with unmatched quality.",
  },
  {
    icon: "🔬",
    title: "Research & Development",
    description:
      "Pioneering R&D programs that push the boundaries of science and technology to solve the most challenging problems.",
  },
  {
    icon: "🔗",
    title: "Systems Integration",
    description:
      "Seamlessly integrating hardware, software, and services into cohesive mission-critical systems for our customers.",
  },
];

const industries = [
  {
    title: "Government & Defense",
    description:
      "Partnering with governments worldwide to deliver advanced defense solutions that ensure national security and mission success.",
    offerings: [
      "Electronic warfare systems",
      "Intelligence & surveillance",
      "Command & control platforms",
      "Secure communications",
    ],
  },
  {
    title: "Military",
    description:
      "Equipping military forces with cutting-edge platforms and technologies that provide decisive advantages on the battlefield.",
    offerings: [
      "Combat vehicles & weapons",
      "Fighter aircraft & UAVs",
      "Naval vessels & submarines",
      "Soldier modernization",
    ],
  },
  {
    title: "Commercial",
    description:
      "Applying defense-grade technology and expertise to commercial markets, delivering solutions for aviation, cybersecurity, and beyond.",
    offerings: [
      "Commercial avionics",
      "Cybersecurity services",
      "Airport security systems",
      "Space & satellite solutions",
    ],
  },
];

const innovations = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Leveraging artificial intelligence to enhance decision-making, automate complex processes, and unlock new operational capabilities.",
  },
  {
    icon: "🛩️",
    title: "Autonomous Systems",
    description:
      "Developing unmanned and autonomous platforms across air, land, and sea domains for safer, more effective missions.",
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    description:
      "Investing in quantum technologies to solve previously intractable problems in cryptography, optimization, and simulation.",
  },
  {
    icon: "🧬",
    title: "Advanced Materials",
    description:
      "Engineering next-generation materials that are lighter, stronger, and more resilient for demanding defense applications.",
  },
];

const techStack = [
  "Cloud Computing",
  "Cybersecurity",
  "Data Analytics",
  "IoT",
  "Digital Twin Technology",
];

const qualityItems = [
  "ISO 9001, ISO 27001, and AS9100 certified processes",
  "Rigorous testing and validation at every stage of development",
  "Continuous improvement culture driven by data and feedback",
];

export default function Capabilities() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h1>
          <p className="max-w-2xl mx-auto text-lg text-navy-200">
            From advanced engineering to cutting-edge research, BAE Systems
            delivers the capabilities that keep nations safe and drive
            technological progress across defense, aerospace, and security.
          </p>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl block mb-4">{cap.icon}</span>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-steel-700">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 px-4 lg:px-8 bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Solutions by Industry
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {ind.title}
                </h3>
                <p className="text-steel-700 mb-4">{ind.description}</p>
                <ul className="space-y-2">
                  {ind.offerings.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-steel-700"
                    >
                      <span className="text-accent-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Hub */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Innovation Hub
          </h2>
          <p className="max-w-2xl mx-auto text-center text-steel-700 mb-12">
            We invest in emerging technologies that will define the future of
            defense and security, turning breakthrough ideas into operational
            advantage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-steel-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 lg:px-8 bg-steel-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-navy-900 text-white rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Quality Assurance
          </h2>
          <p className="max-w-2xl mx-auto text-center text-steel-700 mb-10">
            Quality is embedded in everything we do. Our rigorous standards
            ensure every product and service meets the highest benchmarks of
            reliability and performance.
          </p>
          <ul className="max-w-2xl mx-auto space-y-4">
            {qualityItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-steel-700">
                <span className="text-accent-500 text-xl leading-none">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-20 px-4 lg:px-8 bg-navy-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Global Supply Chain
          </h2>
          <p className="text-steel-700">
            Our global manufacturing footprint and robust logistics network
            ensure we deliver complex programs on time and on budget. We work
            with thousands of suppliers across 40+ countries, maintaining the
            highest standards of quality and security throughout the supply
            chain.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-navy-900 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="max-w-xl mx-auto text-navy-200 mb-8">
            Join a team that builds the technology shaping the future of defense
            and security worldwide.
          </p>
          <Link
            to="/careers"
            className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            Explore Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
