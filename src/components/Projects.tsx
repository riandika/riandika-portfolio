'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url?: string;
  images: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'Operation Request Portal (ORP)',
    category: 'Enterprise Banking Platform',
    description: 'A comprehensive enterprise banking platform for managing operational requests, built with micro frontend architecture enabling independent team deployments and scalable feature development.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Module Federation', 'Ant Design', 'Tailwind CSS', 'SSO Keycloak', 'React Testing Library'],
    images: ['/projects/orp/login.jpeg', '/projects/orp/home.jpeg', '/projects/orp/dashboard.jpeg', '/projects/orp/custody.jpeg'],
  },
  {
    title: 'E-Channel GO',
    category: 'ATM & CRM Monitoring',
    description: 'Enterprise monitoring dashboard for ATM and CRM operations with real-time status tracking, Google Maps integration, cash replenishment monitoring, transaction insights, asset tracking, and Progressive Web Application (PWA) support for field engineers.',
    tech: ['React.js', 'TypeScript', 'Redux', 'PWA', 'Ant Design', 'Tailwind CSS', 'Google Maps API'],
    url: 'https://echannelgo.bankmandiri.co.id',
    images: ['/projects/echannel-go/image1.png', '/projects/echannel-go/image2.png', '/projects/echannel-go/image3.png'],
  },
  {
    title: 'Loan Maintenance Automation Posting (LMAP)',
    category: 'Enterprise Banking Platform',
    description: 'An internal enterprise application that automates non-cash loan maintenance processes, integrating Single Sign-On (SSO), streamlined order submission workflows, and reporting features to improve operational efficiency.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Ant Design', 'Tailwind CSS', 'React Testing Library'],
    images: ['/projects/lmap/image1.png', '/projects/lmap/image2.png'],
  },
  {
    title: 'Bulk Posting System (BPS)',
    category: 'Enterprise Banking Platform',
    description: 'High-volume transaction processing system for bulk posting operations, leveraging Angular with Nx Monorepo architecture for shared libraries and modular development.',
    tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Nx Monorepo'],
    images: ['/projects/bps/login.png', '/projects/bps/home.png', '/projects/bps/gl.png'],
  },
  {
    title: 'Monev.co - Landing Page',
    category: 'Online Exam Platform',
    description: 'Monev.co is a digital platform that simplifies exam management for educational institutions. The landing page serves as the first touchpoint for users, highlighting Monev’s features, benefits, and guidance for various user roles (Admin, Participant, Help Center).',
    tech: ['Stencil.js', 'TypeScript', 'Ionic Component', 'Tailwind CSS'],
    url: 'https://monev.co',
    images: ['/projects/monev/landing/image1.png', '/projects/monev/landing/image2.png'],
  },
  {
    title: 'Monev Portal',
    category: 'Online Exam Platform',
    description: 'Monev Portal is a centralized platform for managing digital question banks used in computer-based testing (CBT). The portal allows academic staff and reviewers to collaboratively create, filter, review, and manage test questions across various faculties and programs. It includes features such as real-time progress tracking, multi- step review stages, and dashboard analytics for item development.',
    tech: ['Angular', 'TypeScript', 'PrimeNG', 'Primeflex CSS', 'Angular HttpClient'],
    url: 'https://portal.monev.co',
    images: ['/projects/monev/portal/image1.png', '/projects/monev/portal/image2.png', '/projects/monev/portal/image3.png', '/projects/monev/portal/image4.png'],
  },
  {
    title: 'Monev App – Participant',
    category: 'Online Exam Platform',
    description: 'The Monev Participant App is a web-based platform designed for students or exam participants to securely access and complete online exams. The application supports login authentication, real-time exam tracking, and post-submission summaries.',
    tech: ['Stencil.js', 'TypeScript', 'Ionic Component', 'Tailwind CSS', 'PWA'],
    url: 'https://app.monev.co',
    images: ['/projects/monev/participant/image1.png', '/projects/monev/participant/image2.png', '/projects/monev/participant/image3.png', '/projects/monev/participant/image4.png'],
  },
  {
    title: 'Monev Admin',
    category: 'Online Exam Platform',
    description: 'Administrative dashboard for managing exam content, user roles, and institutional settings with granular access control and reporting capabilities.',
    tech: ['Stencil.js', 'TypeScript', 'Ionic Component', 'Tailwind CSS', 'PWA'],
    images: ['/projects/monev/admin/image1.png', '/projects/monev/admin/image2.png', '/projects/monev/admin/image3.png'],
  },
  {
    title: 'Kartu Mamuju Keren (KMK) - Web',
    category: 'Government Web',
    description: 'A web-based application developed to support citizen census and data collection activities in the Mamuju district. The system enables field officers to digitally register residents, update demographic information, and verify household data. It also serves as a centralized platform to manage public assistance programs and other community services.',
    tech: ['StencilJS', 'TypeScript', 'Ionic Component', 'Tailwind CSS '],
    url: 'https://kmk.mamujukab.go.id',
    images: ['/projects/kmk/image1.png', '/projects/kmk/image2.png', '/projects/kmk/image3.png'],
  },
  {
    title: 'Kartu Mamuju Keren (KMK) - Android',
    category: 'Government Mobile App',
    description: 'Android-based version of the Kartu Mamuju Keren platform, designed for census officers to conduct field surveys more efficiently. Built with mobile-first functionality in mind, it enables offline data collection, GPS tagging, and on-site verification of residents’ information. The app helps streamline public service delivery and ensures accurate, real-time data synchronization with the web dashboard when online.',
    tech: ['Ionic Framework', 'TypeScript'],
    images: ['/projects/kmk/image4.png', '/projects/kmk/image5.png'],
  },
];

import Link from 'next/link';

export default function Projects({ limit }: { limit?: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  const openLightbox = (project: Project, index: number) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }} className="projects" id="projects">
        <div className="stars"></div>
        <div className="container">
          {!limit && (
            <div style={{ marginBottom: '40px', marginTop: '-20px' }}>
              <Link href="/" style={{ color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Home
              </Link>
            </div>
          )}
          <h2 className="sectionTitle">
            {limit ? 'Featured Projects' : 'All Projects'}
            <span className="underline" />
          </h2>

          <div className="grid">
            {displayedProjects.map((project, i) => (
              <div
                key={project.title}
                className="glassCard"
                data-aos="fade-up"
                data-aos-delay={(i % limit! || i) * 100}
              >
                <div className="cardGlow" />
                <div className="cardContent" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                  {/* Thumbnail Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    {project.images.slice(0, 3).map((img, imgIdx) => {
                      const isLast = imgIdx === 2;
                      const hasMore = project.images.length > 3;

                      return (
                        <motion.div
                          key={imgIdx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer' }}
                          onClick={(e: React.MouseEvent) => { e.stopPropagation(); openLightbox(project, imgIdx); }}
                        >
                          <img src={img} alt={`${project.title} screenshot ${imgIdx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          {isLast && hasMore && (
                            <div style={{
                              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: 'white', fontSize: '1.2rem', fontWeight: 600
                            }}>
                              +{project.images.length - 2}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  <span className="category" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.9 }}>{project.category}</span>
                  <h3 className="cardTitle" style={{ marginBottom: '16px', color: 'var(--primary)' }}>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="titleLink" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                        {project.title}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="description" style={{ flexGrow: 1, marginBottom: '24px', fontSize: '1rem', color: '#eaeaea' }}>{project.description}</p>
                  <div className="tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag" style={{ background: 'rgba(0,229,114,0.1)', color: 'var(--primary)', borderColor: 'rgba(0,229,114,0.2)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {limit && PROJECTS.length > limit && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
              <Link href="/projects" className="btnPrimary" style={{ padding: '12px 32px' }}>
                View All Projects
              </Link>
            </div>
          )}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <button
              onClick={closeLightbox}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
              aria-label="Close"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {currentProject.images.length > 1 && (
              <button
                onClick={prevImage}
                style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            )}

            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '100%', maxHeight: '90vh' }}
            >
              <img
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.title} image ${currentImageIndex + 1}`}
                style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
              <div style={{ textAlign: 'center', color: '#fff', marginTop: '16px', fontSize: '1.1rem', fontWeight: 500 }}>
                {currentProject.title} <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>({currentImageIndex + 1} / {currentProject.images.length})</span>
              </div>
            </motion.div>

            {currentProject.images.length > 1 && (
              <button
                onClick={nextImage}
                style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}