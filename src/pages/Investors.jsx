import { useState } from "react";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "Annual Report 2023",
    description:
      "Comprehensive overview of BAE Systems' financial performance, strategic initiatives, and outlook for the coming year.",
    type: "Annual Report",
  },
  {
    title: "Q4 2023 Earnings",
    description:
      "Fourth quarter results highlighting revenue growth, operating margins, and order backlog across all segments.",
    type: "Quarterly Report",
  },
  {
    title: "Q3 2023 Earnings",
    description:
      "Third quarter financial results with segment performance details and updated full-year guidance.",
    type: "Quarterly Report",
  },
];

const boardMembers = [
  { name: "Sir Charles Woodburn", title: "Chief Executive Officer" },
  { name: "Brad Greve", title: "Chief Financial Officer" },
  { name: "Sir Roger Carr", title: "Chairman of the Board" },
  { name: "Tom Mayfield", title: "Chief Operating Officer" },
];

const faqs = [
  {
    question: "How can I purchase BAE Systems shares?",
    answer:
      "BAE Systems shares are listed on the London Stock Exchange (ticker: BA.) and can be purchased through any authorised stockbroker, investment platform, or financial advisor. Shares are also available as American Depositary Shares (ADSs) on the OTC market in the United States.",
  },
  {
    question: "When does BAE Systems pay dividends?",
    answer:
      "BAE Systems typically pays dividends twice a year. The interim dividend is usually paid in November, and the final dividend is paid in June following approval at the Annual General Meeting.",
  },
  {
    question: "Where can I find historical financial data?",
    answer:
      "Historical financial data, including past annual reports, earnings releases, and investor presentations, is available in the Financial Reports section of our Investor Relations page. You may also request information directly from our Investor Relations team.",
  },
  {
    question: "How do I contact the Investor Relations team?",
    answer:
      "You can reach our Investor Relations team by email at investors@baesystems.com or by calling +44 (0) 20 7834 7000. Our team is available during normal business hours, Monday through Friday.",
  },
];

export default function Investors() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Financial performance, governance, and shareholder information for
            BAE Systems plc.
          </p>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Financial Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {report.type}
              </span>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600 mb-4">{report.description}</p>
              <a
                href="#"
                className="text-accent-500 font-semibold hover:underline"
              >
                Download PDF →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Stock Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
            Stock Information
          </h2>
          <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-500">Ticker</p>
                <p className="text-2xl font-bold text-navy-900">BA. (LSE)</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Share Price</p>
                <p className="text-2xl font-bold text-navy-900">£13.42</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Market Cap</p>
                <p className="text-2xl font-bold text-navy-900">£38.7B</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">52-Week Range</p>
                <p className="text-2xl font-bold text-navy-900">
                  £9.80 – £14.10
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">
              Data shown is illustrative and may not reflect current market
              values.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Corporate Governance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shareholder Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
            Shareholder Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Annual General Meeting
              </h3>
              <p className="text-gray-600">
                The 2024 Annual General Meeting is scheduled for{" "}
                <span className="font-semibold">May 9, 2024</span> at the QEII
                Centre, London. Shareholders may attend in person or vote by
                proxy.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Dividend Information
              </h3>
              <p className="text-gray-600">
                The final dividend for 2023 of{" "}
                <span className="font-semibold">16.0p per share</span> was paid
                on 28 June 2024. The interim dividend of 11.4p per share was
                paid in November 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
          Investor FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-navy-900 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-xl ml-4">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Investor Relations Contact
          </h2>
          <p className="text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:investors@baesystems.com"
              className="text-accent-400 hover:underline"
            >
              investors@baesystems.com
            </a>
          </p>
          <p className="text-gray-300">Phone: +44 (0) 20 7834 7000</p>
        </div>
      </section>
    </div>
  );
}
