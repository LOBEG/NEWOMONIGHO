import { Link } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

const stats = [
  { value: "90,000+", label: "Employees Worldwide" },
  { value: "40+", label: "Countries" },
  { value: "$25.3B", label: "Annual Revenue" },
  { value: "2,000+", label: "Active Projects" },
];

const domains = [
  {
    title: "Air",
    description:
      "Combat aircraft, avionics, and flight training systems for allied nations.",
    gradient: "from-navy-800 to-navy-900",
  },
  {
    title: "Land",
    description:
      "Armored vehicles, weapons systems, and munitions for ground forces.",
    gradient: "from-navy-700 to-navy-800",
  },
  {
    title: "Sea",
    description:
      "Submarines, surface ships, and naval combat systems worldwide.",
    gradient: "from-navy-800 to-navy-900",
  },
  {
    title: "Space",
    description:
      "Satellite systems, space electronics, and orbital defense capabilities.",
    gradient: "from-navy-700 to-navy-800",
  },
  {
    title: "Cyber",
    description:
      "Cybersecurity, intelligence, and information technology services.",
    gradient: "from-navy-800 to-navy-900",
  },
];

const newsItems = [
  {
    title: "BAE Systems Awarded Next-Gen Fighter Contract",
    date: "June 15, 2025",
    excerpt:
      "A landmark agreement to develop sixth-generation combat aircraft in partnership with allied nations.",
    category: "Defense",
  },
  {
    title: "New Cyber Defense Center Opens in London",
    date: "May 28, 2025",
    excerpt:
      "State-of-the-art facility will bolster national cyber resilience and support allied intelligence operations.",
    category: "Cyber",
  },
  {
    title: "Autonomous Naval Systems Trial Success",
    date: "May 10, 2025",
    excerpt:
      "Successful sea trials of unmanned surface vessel demonstrate future of maritime defense technology.",
    category: "Naval",
  },
];

const featuredJobs = jobs.slice(0, 3);

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-dark-900 text-white overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(237,26,59,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.2) 0%, transparent 50%)',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent-500/20 border border-accent-500/40 rounded-full px-4 py-1.5 text-sm font-medium text-accent-400 mb-6">
              Defense • Aerospace • Security
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Advancing the Future of
              <span className="text-accent-400"> Defense</span> &amp;{" "}
              <span className="text-accent-400">Aerospace</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 mb-10 leading-relaxed">
              We protect those who protect us — delivering the technology and
              solutions that keep nations safe and secure around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors text-base"
              >
                Explore Careers
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom red accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500" />
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-xl lg:text-2xl leading-relaxed text-navy-800 font-medium">
            Our mission is to provide advanced defense, aerospace, and security
            solutions that protect and strengthen the nations we serve.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-navy-900 py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-3xl sm:text-4xl font-heading font-bold text-white group-hover:text-accent-400 transition-colors">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domain Tiles - BAE Systems style */}
      <section className="py-20 px-4 lg:px-8 bg-steel-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Domains
            </h2>
            <div className="w-12 h-1 bg-accent-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {domains.map((domain) => (
              <Link
                key={domain.title}
                to="/businesses"
                className={`group relative bg-gradient-to-br ${domain.gradient} rounded-lg p-6 min-h-[200px] flex flex-col justify-end overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {domain.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {domain.description}
                </p>
                <span className="inline-flex items-center text-accent-400 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy-900">
                Latest News
              </h2>
              <div className="w-12 h-1 bg-accent-500 mt-3" />
            </div>
            <Link to="/news" className="hidden sm:inline-flex items-center text-accent-500 hover:text-accent-600 font-semibold text-sm transition-colors">
              View All News
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Colored accent bar at top of card */}
                <div className="h-1 bg-accent-500" />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-accent-500 uppercase tracking-wide mb-2">
                    {item.category}
                  </span>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-3 group-hover:text-accent-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link to="/news" className="text-accent-500 hover:text-accent-600 font-semibold text-sm">
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-dark-900 text-white py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent-500" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Build a career that matters. We offer opportunities across
            engineering, technology, and business — shaping the future of
            defense and security.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/careers/jobs/${job.id}`}
                className="bg-dark-800 border border-gray-700 hover:border-accent-500 rounded-lg px-5 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-dark-800/80"
              >
                {job.title}
              </Link>
            ))}
          </div>
          <Link
            to="/careers/jobs"
            className="inline-flex items-center px-8 py-3.5 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
          >
            View All Positions
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-3">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-6">
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
              className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
