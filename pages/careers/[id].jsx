import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';

const jobs = {
  'senior-aerospace-engineer': {
    title: 'Senior Aerospace Engineer - Air Systems',
    dept: 'Air & Aerospace',
    location: 'Dallas, TX',
    description: 'Lead design and verification of flight-critical subsystems.'
  },
  'software-engineer-cyber': {
    title: 'Software Engineer - Cyber Defense Solutions',
    dept: 'Cyber & Intelligence',
    location: 'Remote (US)',
    description: 'Develop secure detection and response systems.'
  },
  'systems-integration-space': {
    title: 'Systems Integration Engineer - Space Technology',
    dept: 'Space Technology',
    location: 'Cape Canaveral, FL',
    description: 'Integrate satellite subsystems and support missions.'
  }
};

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  const job = jobs[id] || null;

  if (!job) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto p-6">Loading...</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto p-6 flex-1">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <div className="text-sm text-steel mt-2">{job.dept} • {job.location}</div>
        <section className="mt-6">
          <h2 className="font-semibold">About This Role</h2>
          <p className="mt-2">{job.description}</p>
        </section>

        <div className="mt-6">
          <Link href={`/apply?job=${encodeURIComponent(id)}`}><a className="bg-accent text-white px-4 py-2 rounded">Apply for This Position</a></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}