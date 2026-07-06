# Parallax Footer & Freebuf Theme Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio with a dark minimalist theme, neon green accents, and a Firewatch-style parallax mountain footer containing 3D text.

**Architecture:** We will use standard React functional components within Next.js App Router. Global CSS will provide the dark/green variables. `framer-motion` will handle the parallax scrolling effects via `useScroll` and `useTransform` hooks on the window scroll position.

**Tech Stack:** Next.js 16 (App Router), Vanilla CSS, `framer-motion`

## Global Constraints

- Must maintain the user's profile photo in the Hero section.
- Primary accent color must be a cybersecurity neon green (e.g., `#00e572`).
- The parallax footer must use multiple mountain layers overlapping the "RIANDIKA" text.

---

### Task 1: Update Global CSS Variables

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: N/A
- Produces: CSS variables `--background`, `--foreground`, `--primary`, `--primary-dark` used by all subsequent components.

- [ ] **Step 1: Write the updated CSS variables**
```css
:root {
  --background: #111111;
  --foreground: #ffffff;
  --primary: #00e572;
  --primary-dark: #00994d;
  --mountain-back: #184a28;
  --mountain-front: #07140b;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}
```

- [ ] **Step 2: Run dev server to verify visually**
Run: `npm run dev` (Ensure it starts without CSS errors).

- [ ] **Step 3: Commit**
```bash
git add src/app/globals.css
git commit -m "style: apply dark and green theme variables"
```

### Task 2: Create ParallaxFooter Component

**Files:**
- Create: `src/components/ParallaxFooter.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `framer-motion` hooks, CSS variables.
- Produces: `<ParallaxFooter />` React component exported for use in layout/page.

- [ ] **Step 1: Write the component implementation**
```tsx
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
```

- [ ] **Step 2: Add to Page Layout**
Modify `src/app/page.tsx` to import and render `<ParallaxFooter />` at the very bottom, replacing any existing standard footer.

- [ ] **Step 3: Visual Verification**
Check browser at `http://localhost:3000` to ensure scrolling down reveals the parallax mountains and 3D text.

- [ ] **Step 4: Commit**
```bash
git add src/components/ParallaxFooter.tsx src/app/page.tsx
git commit -m "feat: add parallax mountain footer"
```

### Task 3: Refactor Hero Section (Photo + Green Accent)

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: CSS variables.
- Produces: Updated Hero UI with the profile photo styled with a neon green border/glow.

- [ ] **Step 1: Update Hero implementation**
Locate the existing photo/image element inside `src/components/Hero.tsx`. Apply styling to ensure it uses the new primary green color.

```tsx
// Inside src/components/Hero.tsx
// Example modification for the photo container:
<div style={{
  border: '4px solid var(--primary)',
  boxShadow: '0 0 20px var(--primary-dark)',
  borderRadius: '50%',
  overflow: 'hidden',
  // existing width/height
}}>
  <img src="/photo.jpg" alt="Riandika" />
</div>
```
*(Note: Adapt this step's exact code to match the existing photo container in the codebase during execution).*

- [ ] **Step 2: Visual Verification**
Check browser at `http://localhost:3000` to ensure the photo is prominently displayed with the green accent.

- [ ] **Step 3: Commit**
```bash
git add src/components/Hero.tsx
git commit -m "style: update hero photo with green theme"
```

### Task 4: Apply Green Theme to Remaining Components

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Contact.tsx`

**Interfaces:**
- Consumes: CSS variables.
- Produces: Updated UI where buttons, links, or highlights use `var(--primary)` instead of the old accent colors.

- [ ] **Step 1: Replace old colors**
In each component, replace any inline styles or classes that hardcode the old orange/blue colors with `var(--primary)`. Update buttons like "Download CV" to have a green background and black text.

- [ ] **Step 2: Visual Verification**
Ensure all sections look cohesive on `http://localhost:3000`.

- [ ] **Step 3: Commit**
```bash
git add src/components/About.tsx src/components/Projects.tsx src/components/Contact.tsx
git commit -m "style: unify all components to use green primary color"
```
