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
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        height: '450px',
        overflow: 'hidden',
        background: '#050505'
      }}
    >
      {/* Background Image (lembah.jpg) */}
      <motion.div 
        style={{
          position: 'absolute',
          top: -50, left: 0, right: 0, bottom: -50,
          backgroundImage: 'url(/lembah.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: imageY,
          opacity: 0.8,
          filter: 'grayscale(80%) brightness(0.6) contrast(1.1)', // Grey/dark blend
          zIndex: 0
        }} 
      />
      
      {/* Top Gradient to blend with section above */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '150px',
        background: 'linear-gradient(to bottom, var(--background) 0%, rgba(10,10,10,0) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* True 3D Text */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: '30%', 
          width: '100%', 
          textAlign: 'center',
          y: textY,
          zIndex: 2
        }}
      >
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(3rem, 15vw, 9rem)',
          color: '#f0f0f0',
          fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
          fontWeight: 700,
          letterSpacing: '3px',
          opacity: 0.95,
          /* Heavy 3D Text Shadow */
          textShadow: `
            0 1px 0 #b3b3b3,
            0 2px 0 #999999,
            0 3px 0 #808080,
            0 4px 0 #666666,
            0 5px 0 #4d4d4d,
            0 6px 0 #333333,
            0 7px 0 #1a1a1a,
            0 8px 0 #000000,
            0 15px 25px rgba(0,0,0,0.8),
            0 25px 40px rgba(0,0,0,0.9)
          `
        }}>
          Riandika
        </h1>
      </motion.div>

      {/* Front Layer (Hills) - This squeezes the text physically */}
      <svg 
        style={{ position: 'absolute', bottom: '-1px', width: '100%', height: '220px', zIndex: 3, opacity: 0.95 }} 
        preserveAspectRatio="none" viewBox="0 0 100 100"
      >
        <path d="M0,100 L0,70 Q 15,40 30,65 T 60,60 T 85,75 T 100,55 L100,100 Z" fill="#0d0d0d" />
      </svg>
      
      {/* Lowest Front Layer */}
      <svg 
        style={{ position: 'absolute', bottom: '-1px', width: '100%', height: '120px', zIndex: 3 }} 
        preserveAspectRatio="none" viewBox="0 0 100 100"
      >
        <path d="M0,100 L0,80 Q 20,50 40,75 T 80,65 T 100,70 L100,100 Z" fill="#050505" />
      </svg>

      {/* Bottom Gradient overlaying everything (creates the visual sandwiched/blending effect) */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0, height: '250px',
        background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 20%, rgba(5,5,5,0) 100%)',
        zIndex: 4,
        pointerEvents: 'none'
      }} />
    </div>
  );
}
