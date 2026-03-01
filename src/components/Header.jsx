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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors hover:text-accent-400 ${
      isActive
        ? 'text-accent-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent-400'
        : 'text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-navy-950 text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-navy-950/40' : ''
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-xl font-bold tracking-wide whitespace-nowrap"
          aria-label="BAE Systems home"
        >
          BAE Systems
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex" role="list">
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
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-navy-800 focus:ring-2 focus:ring-accent-400 focus:outline-none lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            // Close icon
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-navy-800 px-4 pb-4 pt-2 lg:hidden"
          role="list"
        >
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-navy-800 ${
                    isActive ? 'text-accent-400' : 'text-white'
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
    </header>
  );
}
