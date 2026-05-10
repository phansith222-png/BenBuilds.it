# Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js (App Router) | No Pages Router — App Router strictly |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS | Utility classes only — avoid custom CSS |
| Animation | Framer Motion | See `design/motion.md` for patterns |
| Icons | Lucide React | |
| Components | Functional only | No class components |

## Key Rules

- `"use client"` only when hooks (`useState`, `useEffect`) or Framer Motion are required
- Keep pages as Server Components by default
- Tailwind utilities only — no custom CSS except complex keyframe animations
- Read `node_modules/next/dist/docs/` before writing any Next.js code (breaking changes exist)
