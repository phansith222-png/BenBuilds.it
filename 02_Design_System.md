# 02_Design_System.md (Visual & Motion Guidelines)

## 1. Visual Concept: "Modern Split-Screen Minimal"
The design language is high-fidelity, editorial, and Apple-like. It relies on a striking contrast between a Cool Gray and Deep Black layout. The layout on desktop is a 50/50 split screen. Mobile layout stacks the sections elegantly.

## 2. Color Palette (Tailwind Tokens)
Always use these specific hex codes. Map them in `tailwind.config.ts`.
- **Gray Panel (Left):** `#D9D9D9` (Use for the background of the text-heavy side).
- **Black Panel (Right):** `#000000` or `#0A0A0A` (Use for the background of the image/navigation side).
- **Text on Gray:** `#1A1A1A` (Primary text), `#4A4A4A` (Subtext).
- **Text on Black:** `#FFFFFF` (Primary text), `#A3A3A3` (Subtext).

## 3. Typography Rules
- **Font Families:** Use a premium Sans-serif (e.g., Inter, SF Pro Display, or Montserrat).
- **Hierarchy:**
  - *Huge Headings:* Extremely large text for the Hero section. Tight tracking (letter-spacing), solid line-height.
  - *Body Text:* Clean, highly legible, wide line-height (leading-relaxed).
- **Layout Rule:** Typography is the main visual element. Do not clutter with unnecessary borders or background shapes. Let the negative space speak.

## 4. Layout Architecture (The Split Screen)
- **Desktop (`md:` and above):** - `w-1/2` for the left gray panel (sticky or scrollable).
  - `w-1/2` for the right black panel.
- **Mobile:** - Stacked vertically. Gray section on top, Black section below (or vice versa depending on the flow).

## 5. Motion Guidelines (Framer Motion - STRICT RULES)
The animations MUST look expensive. 
- **The Golden Easing:** Always use this custom bezier curve for transitions:
  `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`
- **Absolutely NO Bouncing:** Do not use `type: "spring"` with high bounce. 
- **Typography Reveal:** Text should reveal smoothly from the bottom up (masking) with a slight fade.
  `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Stagger Children:** Use `staggerChildren: 0.1` when revealing lists or project cards.
- **Scroll Animations:** Use `whileInView` for sections appearing as the user scrolls, but keep the `viewport={{ once: true, margin: "-100px" }}` so it doesn't replay annoyingly.