import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/"><a className="text-xl font-bold text-navy">OMONIGHOXX</a></Link>
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/businesses"><a>Our Businesses</a></Link>
            <Link href="/what-we-do"><a>What We Do</a></Link>
            <Link href="/careers"><a>Careers</a></Link>
            <Link href="/news"><a>News</a></Link>
            <Link href="/investors"><a>Investor Relations</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <a className="text-sm px-3 py-2 border rounded-md" href="/careers">Join Our Team</a>
        </div>
      </div>
    </header>
  );
}