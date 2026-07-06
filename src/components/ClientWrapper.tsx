'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomCursor from './CustomCursor';
import ScrollToTop from './ScrollToTop';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
      <ScrollToTop />
    </>
  );
}
