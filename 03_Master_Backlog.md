# 03_Master_Backlog.md (AI Execution Tracker)

> **AI INSTRUCTION:** You must update this file by changing `[ ]` to `[x]` when a task is fully completed, tested, and approved by Ben. Do not move to the next phase without explicit permission.

## Phase 1: Foundation & Architecture Setup
- [x] Initialize Next.js 14/15 App Router with TypeScript & Tailwind.
- [x] Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [x] Configure `tailwind.config.ts` with the Custom Color Palette (#D9D9D9, #000000).
- [x] Setup Global Fonts (Inter/Montserrat) in `src/app/layout.tsx`.
- [x] Clean up `globals.css` and `page.tsx` for a blank slate.

## Phase 2: Core Layout & Navigation
- [x] Build the base `SplitScreenLayout` wrapper component (responsive grid/flex).
- [x] Create a Minimalist Top/Right Navigation component inside the Black panel.
- [x] Create Social Links component (Github, LinkedIn, Email) for the Gray panel.

## Phase 3: The Hero Section
- [x] Implement Huge Typography for "Ben (Phansit Hadtakijwattana)".
- [x] Add the "Full Stack Developer" sub-headline.
- [x] Create image placeholder structure on the right (Black panel) with high-quality styling.
- [x] Apply the "Golden Easing" typography reveal animation on load.

## Phase 4: About & The Career Transition
- [x] Build the "About Me" section (scrolling content).
- [x] Write professional copy explaining the Payroll to Tech transition, emphasizing analytical skills.
- [x] Style the section using extreme negative space and clean typography hierarchy.

## Phase 5: The "Learning Roadmap" (Crucial Feature)
- [x] Design a timeline or sleek list UI for the Roadmap.
- [x] Section A: Mastered Tech Stack (React, Node, Tailwind, etc.).
- [x] Section B: Public Plan / Currently Learning.
- [x] Implement smooth scroll-reveal animations for each roadmap item.

## Phase 6: Projects Showcase (BigBode & 4B1K)
- [x] Build the Project Card / Editorial layout component.
- [x] Integrate BigBode data (Focus: AI Tarot, Gemini API).
- [x] Integrate 4B1K data (Focus: Music Community Platform).
- [x] Add interactive hover states (e.g., image slight scale up, text color subtle shift) using Framer Motion.

## Phase 7: Final Polish & Audit
- [x] Mobile Responsiveness Audit (Ensure split-screen stacks perfectly).
- [x] Performance and Animation Audit (Ensure no lag, check Framer Motion easing).
- [x] Deploy instructions to Vercel.