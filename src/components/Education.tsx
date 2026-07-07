'use client';
import { motion } from 'framer-motion';



export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }} className="education" id="education">
      <div className="stars"></div>
      <div className="container">
        <h2 className="sectionTitle" >
          Education
          <span className="underline" />
        </h2>

        <div className="card" >
          <div className="iconWrap">
            <span className="icon">🎓</span>
          </div>
          <div className="info">
            <h3 className="university">STMIK Widya Cipta Dharma Samarinda</h3>
            <p className="degree">Bachelor Degree in Information Technology</p>
            <div className="meta">
              <span className="metaItem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                August 2015 – September 2019
              </span>
              <span className="metaItem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                GPA: 3.55 / 4.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}