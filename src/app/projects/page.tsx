'use client';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ParallaxFooter from '@/components/ParallaxFooter';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mainContent" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Projects />
      </main>
      <ParallaxFooter />
    </>
  );
}
