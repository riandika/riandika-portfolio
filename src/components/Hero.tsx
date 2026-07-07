'use client';
import { motion } from 'framer-motion';


import { useEffect, useState } from 'react';

const TITLES = ['Frontend Engineer', 'React | Angular | TypeScript', 'Micro Frontend'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100);
    } else if (!deleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  const displayedTitle = TITLES[titleIndex].slice(0, charIndex);

  return (
    <section className="hero" id="hero">
      <div className="stars stars-hero"></div>
      <div className="shooting-star" style={{ top: '20%', left: '80%', animationDelay: '0s' }}></div>
      <div className="shooting-star" style={{ top: '40%', left: '60%', animationDelay: '2s' }}></div>
      <div className="shooting-star" style={{ top: '10%', left: '40%', animationDelay: '4s' }}></div>
      <div className="content">
        <div className="heroGrid">
          <div className="heroPhoto">
            {/* Photo with Orbit */}
            <div className="photoContainer" data-aos="zoom-in">
              <div className="gear-border"></div>
              <div className="inner-ring"></div>
              <div className="orbit-badge react">
                <svg width="16" height="16" viewBox="-10.5 -9.45 21 18.9" fill="currentColor">
                  <circle cx="0" cy="0" r="2"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
                React
              </div>
              <div className="orbit-badge angular">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 6l1.8 12.3L12 22l9.2-3.7L23 6 12 2zm0 2.5l5.8 13.5h-2.1l-1.3-3.4H9.6l-1.3 3.4H6.2L12 4.5zM10.4 13h3.2L12 8.7 10.4 13z" />
                </svg>
                Angular
              </div>
              <div className="orbit-badge typescript">
                <svg viewBox="0 0 256 256" width="16" height="16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" />
                </svg>
                TypeScript
              </div>
              <div className="photoWrap">
                <img src="/my-photo.png" alt="I Nengah Riandika" className="photo" />
              </div>
            </div>
          </div>

          <div className="heroText">
            {/* Name */}
            <h1 className="name" data-aos="fade-up" data-aos-delay="100">
              I Nengah <span className="highlight">Riandika</span>
            </h1>

            {/* Typing title */}
            <div className="titleWrap" data-aos="fade-up" data-aos-delay="200">
              <span className="title">{displayedTitle}</span>
              <span className="cursor">|</span>
            </div>

            {/* Subtitle */}
            <p className="subtitle" data-aos="fade-up" data-aos-delay="300">
              Passionate frontend engineer with 5+ years of experience building scalable,
              high‑performance web applications using React, Angular, and modern JavaScript ecosystems.
            </p>

            <div className="cta" data-aos="fade-up" data-aos-delay="400">
              <a href="/resume.pdf" className="btnPrimary" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                CV
              </a>
            </div>

            {/* Social links */}
            <div className="socials" data-aos="fade-up" data-aos-delay="500">
              <a href="https://github.com/riandika" target="_blank" rel="noopener noreferrer" className="social" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://linkedin.com/in/iriandika48" target="_blank" rel="noopener noreferrer" className="social" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:riandikatkj@gmail.com" className="social" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ position: 'absolute', bottom: '30px', left: 0, right: 0, margin: '0 auto', width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)' }}
      >
        <span style={{ fontSize: '0.8rem', marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </motion.div>
    </section>
  );
}