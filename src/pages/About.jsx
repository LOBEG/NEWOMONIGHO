import { Link } from "react-router-dom";

const milestones = [
  {
    year: "1999",
    title: "Founded",
    description:
      "BAE Systems was formed through the merger of British Aerospace and Marconi Electronic Systems, creating one of the world's largest defence companies.",
  },
  {
    year: "2000",
    title: "First Major Contract",
    description:
      "Secured a landmark multi-billion pound defence contract, establishing the company as a trusted partner to governments worldwide.",
  },
  {
    year: "2005",
    title: "Global Expansion",
    description:
      "Expanded operations across the Americas, Asia-Pacific, and the Middle East, building a truly international defence and security business.",
  },
  {
    year: "2010",
    title: "Cyber Division Launch",
    description:
      "Launched a dedicated cyber security division to address the growing threat landscape in the digital domain.",
  },
  {
    year: "2015",
    title: "Space Technology Entry",
    description:
      "Entered the space technology sector with advanced satellite systems and space-based intelligence capabilities.",
  },
  {
    year: "2020",
    title: "AI & Autonomous Systems",
    description:
      "Pioneered artificial intelligence and autonomous systems programmes, shaping the future of defence technology.",
  },
];

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Pushing the boundaries of technology to develop solutions that keep people safe and nations secure.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "Upholding the highest ethical standards in everything we do, earning the trust of our customers and communities.",
  },
  {
    icon: "⭐",
    title: "Excellence",
    description:
      "Striving for the highest quality in our products, services, and the way we work together every day.",
  },
  {
    icon: "🔗",
    title: "Collaboration",
    description:
      "Working together across teams, borders, and industries to deliver the best outcomes for our stakeholders.",
  },
  {
    icon: "🌍",
    title: "Responsibility",
    description:
      "Acting responsibly towards our people, communities, and the environment to create a sustainable future.",
  },
];

const leaders = [
  {
    initials: "CM",
    name: "Charles Morrison",
    title: "Chief Executive Officer",
    color: "bg-navy-700",
    bio: "Over 25 years of leadership in the defence industry, driving strategic growth and operational excellence.",
  },
  {
    initials: "SR",
    name: "Sarah Richardson",
    title: "Chief Technology Officer",
    color: "bg-accent-500",
    bio: "A visionary technologist leading R&D across cyber, AI, and next-generation defence platforms.",
  },
  {
    initials: "JP",
    name: "James Patterson",
    title: "Chief Financial Officer",
    color: "bg-steel-600",
    bio: "Expert in global finance and capital strategy, ensuring sustainable growth and shareholder value.",
  },
  {
    initials: "AW",
    name: "Amara Williams",
    title: "Chief Operating Officer",
    color: "bg-navy-600",
    bio: "Oversees worldwide operations and programme delivery, optimising performance across all business units.",
  },
  {
    initials: "DK",
    name: "David Kim",
    title: "VP Engineering",
    color: "bg-accent-600",
    bio: "Leads engineering teams building cutting-edge systems in aerospace, naval, and land defence domains.",
  },
  {
    initials: "LT",
    name: "Laura Thompson",
    title: "VP Human Resources",
    color: "bg-steel-500",
    bio: "Champions a diverse and inclusive workplace, attracting and developing top talent globally.",
  },
];

const offices = [
  { city: "London HQ", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Washington DC", country: "United States", flag: "🇺🇸" },
  { city: "San Diego", country: "United States", flag: "🇺🇸" },
  { city: "Adelaide", country: "Australia", flag: "🇦🇺" },
  { city: "Warton", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Barrow-in-Furness", country: "United Kingdom", flag: "🇬🇧" },
];

const benefits = [
  {
    icon: "📚",
    title: "Professional Development",
    description:
      "Continuous learning opportunities, mentorship programmes, and tuition assistance to advance your career.",
  },
  {
    icon: "❤️",
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and mental health support to keep you and your family healthy.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description:
      "Flexible working arrangements, generous leave policies, and family-friendly benefits.",
  },
  {
    icon: "💰",
    title: "Competitive Compensation",
    description:
      "Industry-leading salaries, performance bonuses, and retirement plans that reward your contributions.",
  },
];

const certifications = ["ISO 9001", "ISO 27001", "AS9100", "CMMI Level 5"];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            About BAE Systems
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-navy-200 leading-relaxed">
            We are a global defence, aerospace, and security company delivering
            a full range of products and services for air, land, and naval
            forces, as well as advanced electronics, security, information
            technology solutions, and support services.
          </p>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-14">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center text-xs font-bold z-10">
                  {m.year}
                </div>
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="bg-white rounded-lg shadow p-5 border border-steel-100">
                    <h3 className="text-lg font-heading font-semibold text-navy-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-navy-50 py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Our Vision &amp; Values
          </h2>
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            Our values define who we are and guide every decision we make.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl" role="img" aria-label={v.title}>
                  {v.icon}
                </span>
                <h3 className="mt-4 text-xl font-heading font-semibold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="bg-steel-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${l.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto`}
                >
                  {l.initials}
                </div>
                <h3 className="mt-4 text-lg font-heading font-semibold text-navy-900">
                  {l.name}
                </h3>
                <p className="text-accent-500 text-sm font-medium">
                  {l.title}
                </p>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-steel-50 py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Global Presence
          </h2>
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            With offices and operations around the world, we deliver critical
            capabilities wherever they are needed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div
                key={o.city}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
              >
                <span className="text-3xl" role="img" aria-label={o.country}>
                  {o.flag}
                </span>
                <div>
                  <p className="font-heading font-semibold text-navy-900">
                    {o.city}
                  </p>
                  <p className="text-sm text-steel-600">{o.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-4">
            Culture &amp; Benefits
          </h2>
          <p className="text-center text-steel-700 mb-12 max-w-2xl mx-auto">
            Discover what it's like to work at BAE Systems and the benefits that
            support your career and wellbeing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl" role="img" aria-label={b.title}>
                  {b.icon}
                </span>
                <h3 className="mt-3 text-lg font-heading font-semibold text-navy-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy-900 py-14 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Certifications &amp; Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <span
                key={c}
                className="bg-navy-700/60 rounded-lg px-5 py-3 text-sm font-medium text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 lg:px-8 text-center">
        <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">
          Ready to join us?
        </h2>
        <Link
          to="/careers"
          className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
        >
          View Open Positions
        </Link>
      </section>
    </main>
  );
}
