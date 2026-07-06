'use client';
import { motion } from 'framer-motion';



const INFO_CARDS = [
  { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
  { icon: '💼', label: 'Experience', value: '5+ Years' },
  { icon: '✉️', label: 'Email', value: 'riandikatkj@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+6282347009242' },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="about" id="about">
      <div className="container">
        <h2 className="sectionTitle" style={{ color: 'var(--primary)' }}>
          About Me
          <span className="underline" style={{ background: 'var(--primary)' }} />
        </h2>

        <div className="grid">
          {/* Left – Photo */}
          <div className="photoCol" >
            <div className="photoFrame" style={{ borderColor: 'var(--primary)' }}>
              <div className="frameDeco" />
              <img src="/my-photo.png" alt="I Nengah Riandika" className="photo" />
              <div className="frameCorner" />
            </div>
          </div>

          {/* Right – Bio */}
          <div className="bioCol" >
            <div className="glassCard">
              <h3 className="bioTitle" style={{ color: 'var(--primary)' }}>Frontend Engineer &amp; UI Architect</h3>
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

        {/* Info cards */}
        <div className="infoGrid" >
          {INFO_CARDS.map((card) => (
            <div key={card.label} className="infoCard">
              <span className="infoIcon" style={{ color: 'var(--primary)' }}>{card.icon}</span>
              <span className="infoLabel">{card.label}</span>
              <span className="infoValue">{card.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}