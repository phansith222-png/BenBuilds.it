# Component Architecture

## Component Map

| File | Role |
|---|---|
| `src/app/page.tsx` | Root page — sequences all sections (Server Component) |
| `src/app/layout.tsx` | Root layout — Poppins font + metadata |
| `src/lib/data.ts` | Centralised content: languages, techStack, learningPath, channels, marquee items |
| `src/lib/projects.ts` | Project data (BigBode, 4B1K) with full case-study fields |
| `src/components/navigation/Navbar.tsx` | Sticky UtilBar — branding + pulsing dot + nav links |
| `src/components/sections/HeroSection.tsx` | Full-viewport hero — portrait drift/breathe, staggered entries, Bangkok clock |
| `src/components/sections/AboutSection.tsx` | Origin section — career narrative, quote, 4-item meta grid |
| `src/components/sections/LanguagesSection.tsx` | Trilingual section — 3 language cards with dot scale on paper background |
| `src/components/sections/ProjectsSection.tsx` | Works section — type-first case list, owns WorkDetail overlay state |
| `src/components/sections/RoadmapSection.tsx` | Capabilities section — tech icon grid + 3-phase learning path |
| `src/components/sections/ContactSection.tsx` | Contact channels + footer with Bangkok clock |
| `src/components/projects/WorkDetail.tsx` | In-page project overlay (Escape to close, scroll lock) |
| `src/components/ui/Marquee.tsx` | Infinite-scroll text strip — dark and light variants |
| `src/components/ui/GrainOverlay.tsx` | Fixed SVG grain texture — z-index 200, pointer-events none |
| `src/components/ui/BangkokClock.tsx` | Live UTC+7 clock, updates every second |

## File Size Rule

Files over 150 lines → extract sub-components into `src/components/ui/` or a sibling file.
