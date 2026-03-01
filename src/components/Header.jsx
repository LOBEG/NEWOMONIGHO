import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Businesses', to: '/businesses' },
  { label: 'What We Do', to: '/capabilities' },
  { label: 'Careers', to: '/careers' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
  { label: 'Investor Relations', to: '/investors' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [searchOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors hover:text-accent-400 ${
      isActive
        ? 'text-accent-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent-500'
        : 'text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-dark-950 text-gray-400 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-8">
          <span className="hidden sm:inline">A global defense, aerospace, and security company</span>
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline">🌐 English (US)</span>
            <button
              type="button"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav
        className="bg-dark-900 border-b-2 border-accent-500"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 whitespace-nowrap"
            aria-label="BAE Systems home"
          >
            {/* BAE Systems styled logo mark */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-500 rounded-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold tracking-wide text-white">
                BAE Systems
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-5 xl:flex" role="list">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-dark-800 focus:ring-2 focus:ring-accent-500 focus:outline-none xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul
            id="mobile-menu"
            className="space-y-1 border-t border-dark-800 px-4 pb-4 pt-2 xl:hidden bg-dark-900"
            role="list"
          >
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-dark-800 ${
                      isActive ? 'text-accent-400 bg-dark-800' : 'text-white'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="bg-dark-900/95 border-b border-dark-800">
          <div className="mx-auto max-w-3xl px-4 py-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search BAE Systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
