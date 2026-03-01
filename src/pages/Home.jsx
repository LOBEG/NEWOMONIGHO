import { Link } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

const stats = [
  { value: "90,000+", label: "Employees" },
  { value: "40+", label: "Countries" },
  { value: "1999", label: "Founded" },
  { value: "2,000+", label: "Projects" },
];

const businesses = [
  {
    icon: "✈️",
    title: "Air & Aerospace",
    description:
      "Advanced combat air systems, military aircraft, and flight training solutions for allied nations.",
  },
  {
    icon: "🛡️",
    title: "Land Systems",
    description:
      "Armored combat vehicles, weapons systems, and munitions for modern ground forces.",
  },
  {
    icon: "🚢",
    title: "Naval Systems",
    description:
      "Submarines, surface ships, and naval weapons that protect maritime interests worldwide.",
  },
  {
    icon: "🛰️",
    title: "Space Technology",
    description:
      "Satellite systems, space electronics, and solutions that extend defense capabilities beyond Earth.",
  },
  {
    icon: "🔐",
    title: "Cyber & Intelligence",
    description:
      "Cyber security, intelligence analysis, and information technology services for national security.",
  },
];

const newsItems = [
  {
    title: "BAE Systems Awarded Next-Gen Fighter Contract",
    date: "June 15, 2025",
    excerpt:
      "A landmark agreement to develop sixth-generation combat aircraft in partnership with allied nations.",
  },
  {
    title: "New Cyber Defense Center Opens in London",
    date: "May 28, 2025",
    excerpt:
      "State-of-the-art facility will bolster national cyber resilience and support allied intelligence operations.",
  },
  {
    title: "Autonomous Naval Systems Trial Success",
    date: "May 10, 2025",
    excerpt:
      "Successful sea trials of unmanned surface vessel demonstrate future of maritime defense technology.",
  },
];

const featuredJobs = jobs.slice(0, 3);

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-navy-900 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Advancing the Future of
            <br />
            Defense &amp; Aerospace
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-navy-200 mb-10">
            We protect those who protect us — delivering the technology and
            solutions that keep nations safe and secure around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
            >
              Explore Careers
            </Link>
            <Link
              to="/about"
              className="inline-block px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 lg:px-8">
        <p className="max-w-3xl mx-auto text-center text-xl leading-relaxed text-navy-800 font-medium">
          Our mission is to provide advanced defense, aerospace, and security
          solutions that protect and strengthen the nations we serve.
        </p>
      </section>

      {/* Key Statistics */}
      <section className="bg-navy-50 py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-heading font-bold text-navy-700">
                {stat.value}
              </p>
              <p className="mt-2 text-steel-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-12">
            Our Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <div
                key={biz.title}
                className="bg-navy-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl">{biz.icon}</span>
                <h3 className="mt-4 text-xl font-heading font-semibold text-navy-900">
                  {biz.title}
                </h3>
                <p className="mt-2 text-steel-700 text-sm leading-relaxed">
                  {biz.description}
                </p>
                <Link
                  to="/businesses"
                  className="inline-block mt-4 text-accent-500 hover:text-accent-600 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 lg:px-8 bg-steel-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <p className="text-sm text-steel-500 mb-2">{item.date}</p>
                <h3 className="text-lg font-heading font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-steel-700 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-navy-800 text-white py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            Build a career that matters. We offer opportunities across
            engineering, technology, and business — shaping the future of
            defense and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {featuredJobs.map((job) => (
              <span
                key={job.id}
                className="bg-navy-700/60 rounded-lg px-5 py-3 text-sm font-medium"
              >
                {job.title}
              </span>
            ))}
          </div>
          <Link
            to="/careers/jobs"
            className="inline-block px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            View All Positions
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-3">
            Stay Informed
          </h2>
          <p className="text-steel-700 mb-6">
            Subscribe to receive the latest updates from BAE Systems.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-steel-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-navy-800 hover:bg-navy-900 text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
