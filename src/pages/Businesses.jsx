import { Link } from "react-router-dom";

const divisions = [
  {
    id: "air",
    title: "Air & Aerospace",
    description:
      "Our Air & Aerospace division is at the forefront of military and commercial aviation, delivering next-generation fighter jets, advanced aircraft systems, and cutting-edge avionics. We design, manufacture, and support some of the world's most capable combat aircraft, providing air forces with decisive advantage in contested environments. From electronic warfare suites to flight control systems, our expertise spans the full spectrum of aerospace engineering.",
    programs: [
      "Tempest — Next-generation stealth combat air system",
      "Typhoon — Multi-role combat aircraft platform",
      "F-35 Lightning II — Advanced stealth fighter components",
      "Hawk — Advanced jet trainer and light combat aircraft",
    ],
    highlights: [
      "Autonomous flight control and AI-driven mission systems",
      "Advanced radar and electronic warfare capabilities",
      "Sustainable aviation fuel integration and reduced-emission propulsion",
    ],
  },
  {
    id: "land",
    title: "Land Systems",
    description:
      "Our Land Systems division engineers and produces world-class combat vehicles, armoured platforms, and integrated ground defence solutions. We equip armed forces with the mobility, protection, and firepower they need to succeed across the full range of land operations. Our portfolio extends from heavy armour to lightweight tactical vehicles, all designed for survivability and mission flexibility in the most demanding environments.",
    programs: [
      "Armoured Multi-Purpose Vehicle (AMPV) — Next-gen troop transport",
      "CV90 — Infantry fighting vehicle family",
      "M109 Self-Propelled Howitzer — Precision artillery platform",
      "Bradley Fighting Vehicle upgrades — Enhanced lethality and protection",
    ],
    highlights: [
      "Active protection systems and advanced composite armour",
      "Autonomous ground vehicle research and robotics integration",
      "Digital battlefield networking and command systems",
    ],
  },
  {
    id: "naval",
    title: "Naval Systems",
    description:
      "Our Naval Systems division delivers advanced warship design, submarine technology, and integrated maritime combat systems. We partner with navies around the world to build, maintain, and upgrade surface combatants, submarines, and amphibious vessels. Our capabilities span hull design and propulsion to weapons integration and mission systems, ensuring maritime forces maintain superiority across open oceans and littoral waters.",
    programs: [
      "Type 26 Global Combat Ship — Anti-submarine warfare frigate",
      "Dreadnought-class submarines — Strategic nuclear deterrent",
      "Hunter-class frigates — Multi-mission surface combatant",
      "Astute-class submarines — Nuclear-powered attack submarine",
    ],
    highlights: [
      "Integrated sonar and underwater warfare systems",
      "Nuclear propulsion engineering and reactor design",
      "Autonomous underwater vehicle development",
    ],
  },
  {
    id: "space",
    title: "Space Technology",
    description:
      "Our Space Technology division develops advanced satellite systems, space exploration platforms, and orbital infrastructure. We provide critical capabilities for communications, navigation, earth observation, and national security from space. Working at the intersection of aerospace engineering and digital innovation, we help our customers maintain strategic advantage in an increasingly contested space domain.",
    programs: [
      "PHASA-35 — Solar-powered high-altitude pseudo-satellite",
      "Military satellite communication systems — Secure orbital comms",
      "Space situational awareness platforms — Orbital tracking and monitoring",
      "Earth observation payloads — High-resolution imaging systems",
    ],
    highlights: [
      "Small satellite constellations and rapid-launch capabilities",
      "Space-based cyber-resilient communication networks",
      "On-orbit servicing and debris mitigation technology",
    ],
  },
  {
    id: "cyber",
    title: "Cyber & Intelligence",
    description:
      "Our Cyber & Intelligence division safeguards governments, critical infrastructure, and enterprises against sophisticated digital threats. We deliver end-to-end cybersecurity solutions, advanced data analytics, and intelligence services that enable our customers to detect, protect, and respond in an evolving threat landscape. Our experts combine deep domain knowledge with AI and machine learning to stay ahead of adversaries in the cyber domain.",
    programs: [
      "National cyber defence programmes — Sovereign security solutions",
      "Threat intelligence platforms — Real-time adversary tracking",
      "Secure communications systems — Encrypted government networks",
      "AI-driven analytics — Automated threat detection and response",
    ],
    highlights: [
      "Zero-trust architecture and quantum-safe cryptography",
      "Machine learning for anomaly detection and predictive analytics",
      "Digital forensics and incident response capabilities",
    ],
  },
];

export default function Businesses() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-navy-900 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Businesses
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-navy-100 leading-relaxed">
            BAE Systems operates a diverse portfolio of businesses spanning air,
            land, sea, space, and cyberspace. Each division brings world-class
            expertise and innovation to address the most complex defence,
            security, and aerospace challenges of our time.
          </p>
        </div>
      </section>

      {/* Business Division Sections */}
      {divisions.map((division, index) => (
        <section
          key={division.id}
          className={index % 2 === 0 ? "bg-white" : "bg-steel-50"}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 border-l-4 border-accent-500 pl-4 mb-6">
              {division.title}
            </h2>

            <p className="text-steel-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {division.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Key Programs */}
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-800 mb-4">
                  Key Programs
                </h3>
                <ul className="space-y-3">
                  {division.programs.map((program) => (
                    <li
                      key={program}
                      className="flex items-start gap-3 text-steel-700"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Highlights */}
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-800 mb-4">
                  Technology Highlights
                </h3>
                <ul className="space-y-3">
                  {division.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-steel-700"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="max-w-2xl mx-auto text-navy-100 text-lg mb-8">
            Whether you are a government, enterprise, or innovator, we welcome
            the opportunity to collaborate and build the future of defence and
            security together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
