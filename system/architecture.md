# Component Architecture

## Component Map

| File | Role |
|---|---|
| `src/app/page.tsx` | Root page — sequences all sections (Server Component) |
| `src/app/layout.tsx` | Root layout — Poppins font + metadata |
| `src/components/layout/SplitScreen.tsx` | 50/50 split layout — props: `leftContent`, `rightContent` |
| `src/components/sections/` | All page sections |
| `src/components/ui/` | Reusable primitives (buttons, typography wrappers) |
| `src/components/navigation/Navbar.tsx` | Nav inside hero right panel |
| `src/components/social/SocialLinks.tsx` | GitHub / LinkedIn / Mail icons |

## File Size Rule

Files over 150 lines → extract sub-components into `src/components/ui/` or a sibling file.
