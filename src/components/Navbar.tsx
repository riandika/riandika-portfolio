'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    if (pathname !== '/') return;

    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
    let current = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) current = id;
      }
    }
    setActiveSection(current);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="mobileBackdrop"
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 49
          }}
        />
      )}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="inner">
          <Link 
            href="/" 
            className="logo" 
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Riandika<span className="dot">.</span>
          </Link>

          <ul className={`links ${mobileOpen ? 'open' : ''}`} style={mobileOpen ? { zIndex: 10 } : {}}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className={`link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${mobileOpen ? 'hamburgerOpen' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}