'use client';
import { motion } from 'framer-motion';



interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Frameworks',
    icon: '⚛️',
    items: ['React.js', 'Angular', 'Next.js', 'Stencil.js', 'Vue.js'],
  },
  {
    title: 'Languages',
    icon: '💻',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Styling',
    icon: '🎨',
    items: ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'UI Libraries',
    icon: '🧩',
    items: ['Ant Design', 'Angular Material', 'PrimeFaces', 'Ionic Component'],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    items: ['Micro Frontend', 'Module Federation', 'Nx Monorepo'],
  },
  {
    title: 'Build Tools',
    icon: '🔧',
    items: ['Webpack', 'Rspack/Rsbuild', 'Vite', 'CRACO'],
  },
  {
    title: 'Testing',
    icon: '🧪',
    items: ['Jest', 'React Testing Library', 'Unit Testing'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: ['Git', 'Bitbucket', 'GitLab', 'GitHub', 'Jenkins', 'Nginx'],
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="skills" id="skills">
      <div className="stars"></div>
      <div className="container">
        <h2 className="sectionTitle" >
          Skills &amp; Technologies
          <span className="underline" />
        </h2>

        <div className="grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="card"
            >
              <div className="cardHeader">
                <span className="cardIcon">{cat.icon}</span>
                <h3 className="cardTitle">{cat.title}</h3>
              </div>
              <div className="tags">
                {cat.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}