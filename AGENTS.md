# AGENTS.md — Monolith Studio Guidelines & Architectural Protocol

This document serves as the persistent architectural reference, design system standard, and execution protocol for AI agents and developers working on the **Monolith Studio** codebase.

---

## 1. Project Overview & Objective

- **Project Name**: Monolith Studio
- **Purpose**: Modern, premium landing page for an independent digital/creative agency & engineering consultancy.
- **Core Mission**: Introduce the studio, articulate its contrarian market positioning, build trust through verified social proof, showcase high-craft case studies, and drive conversions toward a discovery call.
- **Reference Aesthetic**: Inspired by the visual benchmark of [Catalis](https://catalis-temlis.webflow.io/)—delivering top-tier editorial design, generous whitespace, asymmetric layout rhythm, refined micro-interactions, and bold typography without copying directly.

---

## 2. Tech Stack & Environment

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS (`v3.4`) + Custom CSS utilities (`app/globals.css`)
- **Icons**: Lucide React (`lucide-react`)
- **Node Runtime**: Node.js 20+ LTS
  > *Note for Windows environment*: Node and npm are located in `$env:LOCALAPPDATA\Programs\nodejs`. Always ensure this path is prepended to `$env:Path` when executing commands in new shell sessions.

### CLI Commands
```powershell
# Development server (runs on port 3000)
$env:Path = "$env:LOCALAPPDATA\Programs\nodejs;$env:Path"; npm run dev

# Production build & type-checking
$env:Path = "$env:LOCALAPPDATA\Programs\nodejs;$env:Path"; npm run build

# Start production server
$env:Path = "$env:LOCALAPPDATA\Programs\nodejs;$env:Path"; npm run start -- -p 3000

# Linting
$env:Path = "$env:LOCALAPPDATA\Programs\nodejs;$env:Path"; npm run lint
```

---

## 3. Visual & Editorial Design Principles

### Non-Negotiable Aesthetics (Anti-Generic AI Rules)
- **NO Generic SaaS Clichés**: Avoid repetitive rounded card grids, gratuitous purple/pink neon gradients, frosted glassmorphism overlays, floating geometric 3D blobs, or random stock illustrations.
- **Asymmetric Composition**: Balance layouts with deliberate asymmetry, varying aspect ratios, and architectural tension.
- **Editorial Typography**:
  - High-impact grotesque sans-serif (`Inter`) for crisp headings and body copy.
  - Expressive italicized serif accents (`Instrument Serif` / `Georgia`) on selected focal words (e.g. *extraordinary*, *uncompromising*, *iconic*).
- **Restrained Color Palette**:
  - Backgrounds: Canvas (`#FAF9F6` / `#FFFFFF`) and Obsidian (`#0C0D0E` / `#121215`) for high-contrast sections.
  - Text: Ink (`#0F1115`), Muted Charcoal (`#474D58`), Faint Gray (`#848A96`).
  - Accent: One restrained accent—Electric Cobalt (`#1D4ED8`) with subtle emerald status indicators (`#10B981`).
- **Hairline Architectural Dividers**: Fine borders (`border-neutral-200/80` in light sections, `border-neutral-800` in dark sections) and micro-crosshairs (`+`) at coordinates.
- **Generous Whitespace**: Ample vertical padding (`py-24 md:py-36`) to let content breathe and convey luxury/prestige.

---

## 4. Component Structure & Section Hierarchy

All sections are encapsulated in modular client/server components located under `components/`:

```
eager-meitner/
├── assets/                    # Central directory for original landing-page visual assets
│   ├── product_assets.jpg     # Refined product assets & UI design system tokens
│   ├── frameworks_nodes.jpg   # Modular software frameworks and workflow code nodes
│   ├── inter_typography.jpg   # Inter Sans typographic specimen and alignment grid
│   ├── pipeline_engine.jpg    # Sub-second data execution engine & real-time streams
│   ├── workflow_cluster.jpg   # Enterprise multi-tenant workflow cluster & telemetry
│   └── smart_outcomes.jpg     # Automated smart workflows connecting into outcomes
├── app/
│   ├── globals.css            # Base Tailwind layers, fonts, and custom utilities
│   ├── layout.tsx             # Root layout, Google Fonts, SEO metadata, Open Graph
│   ├── page.tsx               # Primary landing page assembling all components
│   ├── plans-pricing/         # Dedicated Plans & Pricing route (/plans-pricing)
│   ├── interface-patterns/    # Dedicated Interface Patterns route (/interface-patterns)
│   ├── frameworks/            # Dedicated Frameworks route (/frameworks)
│   └── creators/              # Dedicated Creators route (/creators)
├── components/
│   ├── Navbar.tsx             # 00 Sticky navigation with Paperflow brand mark & CTA
│   ├── Hero.tsx               # 01 Primary headline, dual CTAs, horizontal 3D card gallery
│   ├── TrustProof.tsx         # 02 Trust & credibility metrics + verified partner marks
│   ├── ProblemSection.tsx     # 03 Problem statement: Operations shouldn't be this complicated
│   ├── AboutUs.tsx            # 04 Solution: 4-card asymmetric Bento Grid foundation
│   ├── HowItWorks.tsx         # 05 3-step orchestration: 01 Build, 02 Connect, 03 Automate
│   ├── BentoGrid.tsx          # 06 Product capabilities & features with custom visual assets
│   ├── UseCases.tsx           # 07 Cross-functional use cases: Ops, Finance, Sales, IT
│   ├── PinnedCaseStudies.tsx  # 08 Enterprise deployment blueprints with expanding slices
│   ├── ScrubTextReveal.tsx    # 08b GSAP ScrollTrigger word scrubbing value proposition
│   ├── Integrations.tsx       # 09 Ecosystem integration connectors grid
│   ├── TestimonialCarousel.tsx# 10 Customer proof: Jordan Hayes, Sourasith, Elena Rostova
│   ├── PlanComparison.tsx     # 11 Core Paperflow plan comparison & subscription pricing
│   ├── FAQSection.tsx         # 12 Frequently asked purchase & architecture questions
│   ├── FinalCTA.tsx           # 13 Conversion action banner with smart outcomes visual
│   └── Footer.tsx             # 14 Site directory, copyright, and smooth back-to-top
```

---

## 5. Visual Asset Architecture & Guidelines

- **Central Asset Directory**: `/assets` is the central directory for original landing-page visual assets. Any new visual asset must be stored there and actually connected to the relevant component.
- **Mirroring for Static Serving**: Assets in `/assets` are also mirrored in `public/assets/` to ensure deterministic URL resolution (`/assets/<name>.<ext>`) in Next.js builds.
- **Design System Cohesion**:
  - No generic stock photography or unrelated placeholder images.
  - All original illustrations must strictly match the Paperflow design palette (`#E65C00`, `#FDFBF7`, `#F7F4EB`, `#FFB380`, `#111827`, `#E5E7EB`).
  - Style: Clean, architectural, isometric vector blueprint aesthetic with high visual craft and no photographic noise.

---

## 6. Interaction & Animation Guidelines

- **Restrained Motion**: Animations must feel intentional and grounded—never frantic or distracting.
- **Hover Transitions**:
  - `btn-roll`: Two-line rolling label animation on primary CTAs.
  - Links: Sliding underline reveal (`scale-x-0` to `scale-x-100`).
  - Project Cards: Subtle image zoom (`scale-105` with `duration-700 ease-out`).
  - Capabilities: Expandable row disclosures with smooth height/opacity reveal.
  - FAQ: Smooth chevron / plus-to-minus icon rotation and content fade-in.
- **Scroll Transitions**: Navbar transitions from transparent to frosted backdrop (`backdrop-blur-md bg-canvas/85`) once scrolled past 20px.

---

## 7. Performance, SEO & Accessibility Standards

- **Core Web Vitals**: Target 100/100 Lighthouse performance. Zero cumulative layout shift (CLS). Sub-40ms TTFB.
- **Semantic HTML**: Strict use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Heading Hierarchy**: Single `<h1>` in `Hero.tsx`, semantic `<h2>` for major sections, `<h3>` for cards/rows.
- **Accessibility**:
  - Accessible names on all buttons and icon triggers (`aria-label`, `aria-expanded`).
  - Focus-visible outlines for keyboard navigation.
  - Contrast ratios meeting WCAG 2.1 AAA standards.
- **Responsive Architecture**: Intentionally styled for Mobile (`375px+`), Tablet (`768px+`), and Desktop (`1200px+`) using Tailwind responsive prefixes.

---

## 8. Instructions for Future Agent Updates

1. **Preserve Design Integrity**: When adding new features or sections, always adhere to the editorial typography, asymmetric layouts, and hairline grid styling outlined in this document.
2. **Visual Assets Protocol**: `/assets` is the central directory for original landing-page visual assets. Any new visual asset must be stored there and actually connected to the relevant component. Never use generic stock photography or remote image URLs.
3. **Verify Build**: Always run `npm run build` after any TypeScript or component modifications to guarantee zero type errors.
