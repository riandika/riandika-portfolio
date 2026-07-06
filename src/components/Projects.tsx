'use client';
import { motion } from 'framer-motion';



interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Operation Request Portal (ORP)',
    category: 'Enterprise Banking Platform',
    description:
      'A comprehensive enterprise banking platform for managing operational requests, built with micro frontend architecture enabling independent team deployments and scalable feature development.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Ant Design', 'Module Federation', 'SSO Keycloak'],
  },
  {
    title: 'E-Channel GO',
    category: 'ATM & CRM Monitoring',
    description:
      'Real-time monitoring dashboard for ATM and CRM channels with interactive map visualization, live status tracking, and progressive web app capabilities for field engineers.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Google Maps API', 'PWA'],
  },
  {
    title: 'Bulk Posting System (BPS)',
    category: 'Enterprise Banking',
    description:
      'High-volume transaction processing system for bulk posting operations, leveraging Angular with Nx Monorepo architecture for shared libraries and modular development.',
    tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Nx Monorepo'],
  },
  {
    title: 'Monev.co',
    category: 'Online Exam Platform',
    description:
      'A full-featured online examination platform with real-time proctoring, automated grading, and comprehensive analytics for educational institutions.',
    tech: ['Stencil.js', 'Angular', 'TypeScript', 'PrimeNG', 'PWA'],
    url: 'https://monev.co',
  },
  {
    title: 'Monev Admin',
    category: 'Admin Dashboard',
    description:
      'Administrative dashboard for managing exam content, user roles, and institutional settings with granular access control and reporting capabilities.',
    tech: ['Angular', 'TypeScript', 'PrimeNG', 'RESTful APIs'],
  },
  {
    title: 'Kartu Mamuju Keren (KMK)',
    category: 'Government Web & Mobile App',
    description:
      'Government digital identity and services platform providing citizens with streamlined access to public services through web and mobile applications.',
    tech: ['Ionic', 'StencilJS', 'TypeScript'],
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="projects" id="projects">
      <div className="container">
        <h2 className="sectionTitle" >
          Featured Projects
          <span className="underline" />
        </h2>

        <div className="grid">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="card" data-aos-delay={String(i * 100)}
            >
              <div className="cardGlow" />
              <div className="cardContent">
                <span className="category">{project.category}</span>
                <h3 className="cardTitle">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="titleLink">
                      {project.title}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="description">{project.description}</p>
                <div className="tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}