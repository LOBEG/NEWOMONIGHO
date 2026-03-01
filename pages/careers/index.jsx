import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const sampleJobs = [
  {
    id: 'senior-aerospace-engineer',
    title: 'Senior Aerospace Engineer - Air Systems',
    location: 'Dallas, TX',
    department: 'Air & Aerospace',
    level: 'Senior'
  },
  {
    id: 'software-engineer-cyber',
    title: 'Software Engineer - Cyber Defense Solutions',
    location: 'Remote (US)',
    department: 'Cyber & Intelligence',
    level: 'Mid'
  },
  {
    id: 'systems-integration-space',
    title: 'Systems Integration Engineer - Space Technology',
    location: 'Cape Canaveral, FL',
    department: 'Space Technology',
    level: 'Senior'
  }
];

export default function Careers() {
  const [query, setQuery] = useState('');
  const filtered = sampleJobs.filter(j => j.title.toLowerCase().includes(query.toLowerCase()) || j.department.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto p-6 flex-1">
        <h1 className="text-3xl font-semibold">Careers</h1>
        <p className="mt-2 text-sm">Join our team — innovate across aerospace, defense, and security.</p>

        <div className="mt-6">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search jobs or departments" className="border px-3 py-2 w-full md:w-1/2 rounded" />
        </div>

        <div className="mt-6 grid gap-4">
          {filtered.map(job => (
            <div key={job.id} className="p-4 border rounded flex justify-between items-center">
              <div>
                <h3 className="font-bold">{job.title}</h3>
                <div className="text-sm text-steel">{job.department} • {job.location} • {job.level}</div>
              </div>
              <div>
                <Link href={`/careers/${job.id}`}><a className="px-4 py-2 border rounded">View</a></Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}