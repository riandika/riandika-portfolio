# Parallax Footer & Freebuf Theme Redesign

## 1. Goal
Redesign the portfolio web application to feature a dark minimalist theme with a vibrant green primary color (inspired by Freebuf) and introduce a Firewatch-style parallax mountain footer containing 3D text.

## 2. Architecture & Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Vanilla CSS (Global variables)
- **Animation/Parallax:** `framer-motion` (`useScroll`, `useTransform`)

## 3. Theme & Colors
- **Background:** Deep dark (`#111111`) transitioning to dark green/black at the bottom.
- **Text:** White (`#ffffff`) and off-white.
- **Primary Accent:** Neon Green (`#00e572` or similar cybersecurity green).
- **Footer Palette:** Layers of dark green, blackish-green, and neon green highlights for the 3D text.

## 4. Components

### 4.1. Core Sections (Hero, About, Projects)
- Retain the current minimalist structure but swap any remaining orange/blue accents for the new Green accent.
- Ensure text contrasts well against the `#111111` background.

### 4.2. Parallax Footer (`ParallaxFooter.tsx`)
A new dedicated component placed at the very bottom of the page.
- **Background:** A gradient tying the black body background into the dark green footer sky.
- **Layer 1 (Back Mountains):** SVG shapes moving at a slower scroll speed (e.g., `y` mapping from `0` to `-50px`).
- **3D Text ("RIANDIKA"):** Centered, large font, with multiple stacked text-shadows to simulate 3D depth. Moves at a medium speed.
- **Layer 2 (Front Mountains):** SVG shapes positioned at the absolute bottom, overlapping the text, moving at a faster scroll speed or remaining fixed at the bottom while other elements move down behind it.

## 5. Implementation Approach
- **Step 1: CSS Variables Update:** Update `src/app/globals.css` to define the new Freebuf-inspired green and dark colors.
- **Step 2: Create ParallaxFooter:** Build the component using `framer-motion`'s `useScroll` tied to the window scroll, mapped via `useTransform` to move the mountain SVG layers and text at different speeds.
- **Step 3: Replace Footer:** Remove the old simple footer and place `<ParallaxFooter />` at the bottom of the main layout/page.
- **Step 4: Cleanup & Polish:** Ensure no legacy "rainbow" or glassmorphism CSS remains. Ensure `framer-motion` animations on the rest of the page (Hero, Projects) use the green theme.

## 6. Testing & Quality
- Verify the parallax effect triggers correctly when reaching the bottom of the page.
- Ensure the 3D text is readable and the mountain SVG layers don't break on mobile screens (responsive SVG handling via `preserveAspectRatio="none"` or `xMidYMax slice`).
