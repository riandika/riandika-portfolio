'use client';
import { motion } from 'framer-motion';



interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'PT Bank Mandiri (Persero) Tbk',
    period: 'March 2022 – Present',
    bullets: [
      'Developed and maintained large-scale enterprise web applications using React.js, TypeScript, and Redux for state management.',
      'Built and optimized Micro Frontend architecture using Module Federation (Webpack/Rspack), enabling independent team deployments across banking platforms.',
      'Engineered reusable UI component libraries and integrated Ant Design for consistent design systems.',
      'Led frontend guild initiatives to establish coding standards, testing best practices, and code review workflows.',
      'Implemented comprehensive unit testing with Jest and React Testing Library, achieving high code coverage targets.',
      'Collaborated with backend teams on RESTful API integration with SSO Keycloak authentication.',
      'Managed build pipeline optimizations with Webpack, Rspack/Rsbuild, and CRACO configurations.',
      'Deployed and configured applications on Nginx servers with CI/CD pipelines via Jenkins.',
      'Utilized Nx Monorepo for managing multi-project Angular applications with shared libraries.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'PT Flash Informatika Cemerlang',
    period: 'October 2019 – March 2022',
    bullets: [
      'Developed cross-platform web and mobile applications using Stencil.js, Ionic Framework, and Angular.',
      'Built Progressive Web Applications (PWA) for government and education sectors with offline-first capabilities.',
      'Created custom web components using Stencil.js for reusable, framework-agnostic UI elements.',
      'Integrated Google Maps API and real-time data visualization for monitoring dashboards.',
      'Designed responsive layouts with PrimeNG, PrimeFaces, and custom SCSS styling.',
      'Collaborated in agile teams, participating in sprint planning, daily standups, and retrospectives.',
      'Managed version control workflows with Git, Bitbucket, and GitLab for team collaboration.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="experience" id="experience">
      <div className="stars"></div>
      <div className="container">
        <h2 className="sectionTitle" >
          Experience
          <span className="underline" />
        </h2>

        <div className="timeline">
          <div className="timelineLine" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className="timelineItem"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="timelineDot">
                <span className="pulse" />
              </div>

              <div className="glassCard">
                <div className="cardHeaderExp">
                  <h3 className="role" style={{ margin: 0 }}>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">{exp.company}</p>
                <ul className="bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}