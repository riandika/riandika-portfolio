'use client';
import { motion } from 'framer-motion';

const STATS = [
  { value: '5+', label: 'YEARS EXPERIENCE' },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="about" id="about">
      <div className="stars"></div>
      <div className="container">
        <h2 className="sectionTitle">
          About Me
          <span className="underline" />
        </h2>

        <div className="grid">
          {/* Left – Photo */}
          <div className="photoCol" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,114,0.3) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, bottom: 0, animation: 'pulseGlow 3s infinite' }} />
            <img src="/my-photo.png" alt="I Nengah Riandika" style={{ position: 'relative', zIndex: 1, width: '300px', filter: 'grayscale(100%) contrast(1.1)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }} />
          </div>

          {/* Right – Bio */}
          <div className="bioCol" >
            <div className="glassCard">
              <h3 className="bioTitle">Frontend Engineer</h3>
              <p className="bioText">
                I&apos;m a results‑driven frontend engineer with over 5 years of experience designing and
                developing high‑performance web applications in the banking and fintech industry. My expertise
                spans React.js, Angular, Next.js, and micro frontend architectures, enabling me to deliver
                modular, scalable solutions that drive business value.
              </p>
              <p className="bioText">
                I specialize in building enterprise‑level platforms with modern JavaScript/TypeScript ecosystems,
                implementing module federation, optimizing build pipelines, and leading frontend guilds to
                establish best practices across development teams. I&apos;m passionate about creating seamless
                user experiences through clean, maintainable code.
              </p>
            </div>
          </div>
        </div>

        {/* Info stats */}
        <div className="statsRow" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginTop: '60px', padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {STATS.map((stat, idx) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>{stat.value}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{stat.label}</span>
              </div>
              {idx < STATS.length - 1 && <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--border)' }} />}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}