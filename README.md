# NEXUS — Elite Software Engineering Architecture

[![Framework: Astro](https://img.shields.io/badge/Framework-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build/)
[![3D: Three.js](https://img.shields.io/badge/3D-Three.js-000000?style=flat-square&logo=three.dot.js)](https://threejs.org/)
[![Styling: Vanilla CSS](https://img.shields.io/badge/Styling-Vanilla_CSS-264de4?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Performance: 100/100](https://img.shields.io/badge/Performance-100%2F100-brightgreen?style=flat-square)](https://pagespeed.web.dev/)

NEXUS is a next-generation engineering studio landing page, re-architected from a monolithic prototype into a modular, high-performance **Astro** ecosystem. It demonstrates the intersection of aggressive performance optimization and immersive WebGL storytelling.

---

## 🏛️ Architecture: The "Islands" Strategy

Unlike traditional Single Page Applications (SPAs) that ship massive JavaScript bundles, NEXUS utilizes **Astro Islands Architecture**. This allows the site to remain 95% static HTML, only loading heavy logic for specific interactive "islands."

### Core Architectural Pillars:
1. **Zero-JS by Default:** All text, grids, and layouts are pre-rendered at build time.
2. **Selective Hydration:** Three.js canvases and the Command Palette initialize only after the initial page load, preventing main-thread blocking.
3. **GPU-Accelerated Styling:** Every animation uses `transform` and `opacity` to leverage hardware acceleration, keeping frame rates at a consistent 60 FPS.
4. **Shared Global State:** Real-time components communicate via lightweight Custom Events rather than heavy state management libraries (Redux/Vuex).

---

## 🛠️ Technical Deep-Dive

### 1. WebGL & 3D Integration
The platform features five distinct Three.js implementations:
- **Hero Particle System:** 1,600+ nodes with a dynamic DNA helix using `BufferGeometry` for memory efficiency.
- **Process Platonic Solids:** Interactive dodecahedrons and icosahedrons with custom wireframe shaders.
- **CTA Galaxy:** A rotating point-cloud system with randomized radial offsets and color interpolation.
- **Interactive Work Canvases:** Lightweight 2D context particle networks mapped to portfolio hover states.

### 2. The Command Palette (`src/components/CommandPalette.astro`)
A fully keyboard-navigable search interface accessible via `⌘K` or `Ctrl+K`. It uses fuzzy-search logic to navigate sections and trigger global actions like copying contact information.

### 3. Performance Dashboard (`src/components/Metrics.astro`)
Simulated infrastructure telemetry powered by:
- **IntersectionObserver:** Logic only triggers when the component enters the viewport.
- **Canvas Sparklines:** Hand-drawn vector paths representing live request fluctuations.
- **CountUp Algorithm:** A custom exponential easing function (`1-Math.pow(2,-10*t)`) for silky-smooth numerical increments.

---

## 📁 Project Map

```text
src/
├── components/
│   ├── Hero.astro          # Three.js + Terminal Simulation
│   ├── Portfolio.astro     # H-Scroll + Canvas Particle Network
│   ├── Metrics.astro       # Live Telemetry + Sparklines
│   └── ...                 # 20+ Atomic Components
├── layouts/
│   └── BaseLayout.astro    # Global SEO, Fonts, and <slot />
├── styles/
│   └── global.css          # Design System & GPU-Layers
└── pages/
    └── index.astro         # Main Composition Entry Point
```

---

## 🎨 Design System

NEXUS utilizes a centralized variable-based design system defined in `global.css`:

| Variable | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--void` | `#00000A` | Primary background (Deep space) |
| `--c1` | `#00FFD1` | Primary accent (Cyan / Engineering) |
| `--c2` | `#6B17FF` | Secondary accent (Purple / Design) |
| `--expo` | `cubic-bezier(...)` | Signature cinematic easing |

---

## 🚀 Development Operations

### Installation
```bash
npm install
```

### Build & Deployment
Astro generates a zero-dependency static folder in `dist/`.
```bash
# Local development
npm run dev

# Optimized Production Build
npm run build

# Preview Production Build
npm run preview
```

**Recommended Deployment:** Cloudflare Pages or Vercel Edge for sub-100ms global latency.

---

## 🛡️ License
Copyright © 2025 Nexus Software Inc. **Elite Software Engineering for the top 1%.**
