'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const backMountainY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, var(--background), #0a1f11)'
      }}
    >
      {/* Mountain Back */}
      <motion.svg 
        style={{ position: 'absolute', bottom: '15%', width: '100%', height: '200px', y: backMountainY, opacity: 0.6 }} 
        preserveAspectRatio="none" viewBox="0 0 100 100"
      >
        <path d="M0,100 L0,50 L15,20 L30,60 L50,30 L75,70 L100,40 L100,100 Z" fill="var(--mountain-back)" />
      </motion.svg>

      {/* 3D Text */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: '20%', 
          width: '100%', 
          textAlign: 'center',
          y: textY 
        }}
      >
        <h1 style={{
          margin: 0,
          fontSize: '5rem',
          color: '#fff',
          textShadow: '0 4px 0 var(--primary), 0 8px 0 var(--primary-dark), 0 15px 20px rgba(0,0,0,0.8)',
          fontWeight: 900,
          letterSpacing: '5px'
        }}>
          RIANDIKA
        </h1>
      </motion.div>

      {/* Mountain Front */}
      <svg 
        style={{ position: 'absolute', bottom: '-1px', width: '100%', height: '200px' }} 
        preserveAspectRatio="none" viewBox="0 0 100 100"
      >
        <path d="M0,100 L0,80 L20,30 L45,70 L70,40 L100,75 L100,100 Z" fill="var(--mountain-front)" />
      </svg>
    </div>
  );
}
