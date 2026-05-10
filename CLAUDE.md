# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@design.md
@system.md
@projects.md

---

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

---

## Collaboration Protocol (READ FIRST)

**Always ask before editing.** Before changing any component, layout, copy, animation, or file:
1. Describe what you plan to change and why.
2. Show a brief before/after summary.
3. Wait for explicit confirmation before writing code.

**No file access without permission.** Do NOT read, edit, copy, delete, or overwrite any file (source code, public assets, config, images) without asking Ben first. This includes:
- Reading source files to "check" something — ask first.
- Copying or replacing images in `public/`.
- Editing config files (`tailwind.config.ts`, `next.config.*`, `package.json`, etc.).
- Clearing caches or running destructive shell commands.
Always state exactly which file you intend to touch and what you will do to it. Wait for explicit "yes" before proceeding.

---

## Portfolio Owner

**Phansit Hadtakijwattana (Ben)** — transitioning from Payroll Outsourcing to Full Stack JavaScript Development. Profile photo: `public/images/profile.png`. Used circularly in HeroSection (right panel) and AboutSection (left side).
