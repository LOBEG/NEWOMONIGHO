import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[420px] flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-bold">Advanced Defense & Aerospace Technology</h1>
            <p className="mt-4 max-w-xl">Engineering the future of aerospace, land, naval, and space systems with secure, reliable solutions.</p>
            <div className="mt-6">
              <Link href="/careers"><a className="bg-accent text-white px-4 py-2 rounded">Join Our Team</a></Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto p-6">
          <h2 className="text-2xl font-semibold">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <article className="p-4 border rounded">
              <h3 className="font-bold">Air & Aerospace</h3>
              <p className="text-sm mt-2">Aircraft systems, avionics, and airframe solutions.</p>
            </article>
            <article className="p-4 border rounded">
              <h3 className="font-bold">Cyber & Intelligence</h3>
              <p className="text-sm mt-2">Cybersecurity, data analytics, and intelligence software.</p>
            </article>
            <article className="p-4 border rounded">
              <h3 className="font-bold">Space Technology</h3>
              <p className="text-sm mt-2">Satellite systems and mission-critical platforms.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}