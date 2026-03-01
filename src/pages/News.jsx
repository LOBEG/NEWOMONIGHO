import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Innovation", "Partnerships", "Expansions", "Awards"];

const articles = [
  {
    category: "Innovation",
    title: "BAE Systems Unveils Next-Generation Electronic Warfare Suite",
    date: "December 15, 2024",
    excerpt:
      "A breakthrough in electronic warfare technology promises to redefine how allied forces detect and counter emerging threats across the electromagnetic spectrum.",
  },
  {
    category: "Partnerships",
    title: "Strategic Alliance Formed with Leading AI Research Lab",
    date: "November 28, 2024",
    excerpt:
      "BAE Systems partners with a world-renowned artificial intelligence research institute to accelerate autonomous defence capabilities.",
  },
  {
    category: "Expansions",
    title: "New Advanced Manufacturing Facility Opens in Alabama",
    date: "November 10, 2024",
    excerpt:
      "A state-of-the-art manufacturing centre will create over 500 jobs and bolster production of next-generation combat vehicles.",
  },
  {
    category: "Awards",
    title: "BAE Systems Recognised as Top Defence Employer",
    date: "October 22, 2024",
    excerpt:
      "The company receives a prestigious industry award for its commitment to workforce development and employee well-being.",
  },
  {
    category: "Innovation",
    title: "Quantum Computing Programme Achieves Key Milestone",
    date: "October 5, 2024",
    excerpt:
      "Researchers within BAE Systems' Applied Intelligence division demonstrate a quantum advantage in cryptographic analysis.",
  },
  {
    category: "Partnerships",
    title: "Multi-Nation Collaboration on Future Combat Air System",
    date: "September 18, 2024",
    excerpt:
      "BAE Systems joins a landmark international consortium to design and build a sixth-generation fighter aircraft for allied air forces.",
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            News &amp; Press Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The latest announcements, press releases, and media resources from
            BAE Systems.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-dark-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="inline-block bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to="#"
                  className="text-accent-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Kit */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Press Kit</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download our media resources including logos, executive bios, and
            fact sheets. For media enquiries, reach out to our communications
            team.
          </p>
          <a
            href="#"
            className="inline-block bg-dark-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors mb-6"
          >
            Download Press Kit
          </a>
          <p className="text-gray-600">
            Media Contact:{" "}
            <a
              href="mailto:media@baesystems.com"
              className="text-accent-500 hover:underline"
            >
              media@baesystems.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
