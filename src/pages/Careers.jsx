import { Link } from "react-router-dom";
import jobs from "../data/jobs";

const whyCards = [
  {
    icon: "🚀",
    title: "Innovative Projects",
    description:
      "Work on cutting-edge defence and security programmes that push the boundaries of technology.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    description:
      "Structured development pathways, mentorship, and opportunities to advance across global teams.",
  },
  {
    icon: "💎",
    title: "Competitive Benefits",
    description:
      "Industry-leading compensation packages, bonuses, and comprehensive health and retirement plans.",
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description:
      "Contribute to projects that protect nations and communities around the world.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description:
      "Flexible working arrangements, generous leave policies, and family-friendly benefits.",
  },
  {
    icon: "🤝",
    title: "Diverse & Inclusive",
    description:
      "A welcoming culture where every background and perspective is valued and celebrated.",
  },
];

const testimonials = [
  {
    quote:
      "Joining BAE Systems was the best career decision I ever made. The projects are genuinely world-class and the support for professional development is outstanding.",
    name: "Rebecca Hartley",
    role: "Principal Systems Engineer, 7 years",
  },
  {
    quote:
      "I started as a graduate and now lead a team of 20 cyber analysts. The growth opportunities here are real — leadership actively invests in your future.",
    name: "Marcus Chen",
    role: "Cyber Operations Lead, 5 years",
  },
  {
    quote:
      "The collaborative culture is what sets this company apart. Engineers, analysts, and programme managers all work together seamlessly across borders.",
    name: "Priya Kapoor",
    role: "Software Architect, 4 years",
  },
];

const benefitsHighlight = [
  { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: "💰", title: "401k / Pension", description: "Generous employer-matched retirement plans to secure your future." },
  { icon: "📚", title: "Training Programs", description: "Funded certifications, courses, and conferences to keep your skills sharp." },
  { icon: "🏠", title: "Remote Work Options", description: "Flexible hybrid and remote arrangements to fit your lifestyle." },
  { icon: "🌴", title: "Paid Time Off", description: "Generous annual leave, public holidays, and additional wellbeing days." },
  { icon: "✈️", title: "Relocation Support", description: "Full relocation packages including housing assistance and travel costs." },
];

const featuredJobs = jobs.slice(0, 5);

export default function Careers() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Build your career at one of the world's most innovative defence and security companies. We're looking for passionate people ready to make a difference.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">What Our People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
                <p className="text-gray-700 italic flex-1 mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Highlight */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsHighlight.map((b) => (
              <div key={b.title} className="bg-white rounded-lg shadow p-6 text-center">
                <span className="text-3xl mb-3 block">{b.icon}</span>
                <h3 className="text-lg font-semibold text-navy-900 mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Featured Positions</h2>
          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/careers/jobs/${job.id}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-navy-900">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span>📂 {job.department}</span>
                  <span>📍 {job.location}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/careers/jobs"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
