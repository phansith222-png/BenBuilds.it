# Code Conventions

## Rules

- `"use client"` only for hooks or Framer Motion — keep pages as Server Components
- Always define TypeScript `interface` or `type` for all props (strict mode enabled)
- Files over 150 lines → extract sub-components
- Tailwind utilities only — no custom CSS except complex keyframe animations
- Never add placeholder comments like `// TODO: replace with real data` in committed code

## Quality Checklist (run mentally before every edit)

- [ ] Props typed with `interface` or `type`
- [ ] No `any` types
- [ ] `"use client"` present only if hooks/motion used
- [ ] Animation uses golden easing or a pre-approved pattern (see `design/motion.md`)
- [ ] Image uses `next/image` with `alt`, `width`, `height` or `fill`
- [ ] No inline styles except Framer Motion `style` props
- [ ] Component is under 150 lines
