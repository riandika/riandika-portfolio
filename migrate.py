import os
import re

COMPONENTS_DIR = "src/components"
GLOBALS_CSS = "src/app/globals.css"

NEW_GLOBALS_CSS = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --bg: #000000;
  --bg-card: #0a0a0a;
  --text-main: #ededed;
  --text-muted: #888888;
  --border: #222222;
  --accent: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent);
}

ul {
  list-style: none;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 24px 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  z-index: 50;
  border-bottom: 1px solid var(--border);
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--accent);
}
.dot {
  color: var(--text-muted);
}
.links {
  display: flex;
  gap: 24px;
}
@media (max-width: 768px) {
  .links {
    display: none;
  }
}
.link {
  font-size: 0.9rem;
  color: var(--text-muted);
}
.link.active, .link:hover {
  color: var(--accent);
}
.hamburger {
  display: none;
}

/* Sections */
section {
  padding: 100px 0;
  border-bottom: 1px solid var(--border);
}
.sectionTitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  color: var(--accent);
}

/* Hero */
.hero {
  padding-top: 180px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: none;
}
.name {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  color: var(--accent);
}
.highlight {
  color: var(--text-main);
}
.titleWrap {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}
.subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 500px;
  margin-bottom: 40px;
}
.cta {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}
.btnPrimary {
  background: var(--accent);
  color: var(--bg);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}
.btnPrimary:hover {
  opacity: 0.9;
}
.btnSecondary {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btnSecondary:hover {
  background: var(--bg-card);
}
.socials {
  display: flex;
  gap: 16px;
}
.social {
  color: var(--text-muted);
}
.social:hover {
  color: var(--accent);
}

/* Shared Cards */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s;
}
.card:hover {
  border-color: var(--text-muted);
}
.cardIcon {
  margin-bottom: 16px;
  color: var(--text-main);
}
.cardTitle {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--accent);
}
.cardDesc {
  font-size: 0.95rem;
  color: var(--text-muted);
}
.cardLabel {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}
.cardValue {
  font-size: 1rem;
  color: var(--text-main);
}

/* Footer */
.footer {
  padding: 48px 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* About / Generic Text */
.text {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 16px;
}
"""

def clean_css_imports(content):
    # Remove CSS module imports
    content = re.sub(r'import\s+styles\s+from\s+[\'"]\./.*?\.module\.css[\'"];?\n?', '', content)
    
    # Replace className={styles.name} with className="name"
    content = re.sub(r'className=\{styles\.([a-zA-Z0-9_]+)\}', r'className="\1"', content)
    
    # Replace template literals like className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
    # We will just do a generic replacement for styles.xxx inside template strings
    content = re.sub(r'styles\.([a-zA-Z0-9_]+)', r"'\1'", content)
    # Fix the generated string concatenations (e.g., `${'nav'} ${...}`)
    content = re.sub(r'\$\{\'([a-zA-Z0-9_]+)\'\}', r'\1', content)
    
    return content

def add_framer_motion(content):
    if "framer-motion" not in content and "<section" in content:
        content = "import { motion } from 'framer-motion';\n" + content
        # Replace <section with <motion.section
        content = content.replace('<section', '<motion.section\n      initial={{ opacity: 0, y: 20 }}\n      whileInView={{ opacity: 1, y: 0 }}\n      viewport={{ once: true, margin: "-100px" }}\n      transition={{ duration: 0.5 }}')
        content = content.replace('</section>', '</motion.section>')
    
    # Remove data-aos attributes
    content = re.sub(r'\s*data-aos="[^"]*"\s*', ' ', content)
    content = re.sub(r'\s*data-aos-delay="[^"]*"\s*', ' ', content)
    
    # In Contact.tsx and Hero.tsx, remove Photo glow & particles if any leftovers
    content = re.sub(r'<div className="photoGlow" />', '', content)
    content = re.sub(r'<div className="scrollIndicator".*?</div>', '', content, flags=re.DOTALL)
    
    return content

def main():
    # 1. Update globals.css
    with open(GLOBALS_CSS, 'w') as f:
        f.write(NEW_GLOBALS_CSS)
    
    # 2. Delete module css
    for root, dirs, files in os.walk(COMPONENTS_DIR):
        for file in files:
            if file.endswith(".module.css"):
                os.remove(os.path.join(root, file))
                
    # 3. Update components
    for root, dirs, files in os.walk(COMPONENTS_DIR):
        for file in files:
            if file.endswith(".tsx"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                content = clean_css_imports(content)
                content = add_framer_motion(content)
                
                # specific cleanup for container wrapper
                content = content.replace('<div className="container">', '<div className="container">')
                
                # Make sure "use client" is at the very top if exists
                if "'use client'" in content:
                    content = content.replace("'use client';", "")
                    content = "'use client';\n" + content.strip()
                
                with open(filepath, 'w') as f:
                    f.write(content)

if __name__ == "__main__":
    main()
