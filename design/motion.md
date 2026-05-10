# Motion Guidelines

Research source: Awwwards, paco.me, rauno.me, Olivier Larose, Linear design system.

## Golden Easing (use this everywhere)

```ts
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

## Motion Rules (strict)

| Scenario | Pattern |
|---|---|
| Text entry | `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}` |
| List/card stagger | `staggerChildren: 0.1` |
| Scroll trigger | `whileInView` + `viewport={{ once: true, margin: "-100px" }}` |
| Hover feedback | `whileHover={{ scale: 1.05 }}` duration 0.2–0.3s |
| Tap feedback | `whileTap={{ scale: 0.95 }}` immediate |
| No spring bounce | Never `type: "spring"` with high bounce value |

---

## Pre-approved Animation Patterns

### Clip-Path Reveal (image/section entrance)
```ts
hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
           transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } }
```

### Split Text — Character-by-character reveal
Split heading into `<span>` per character; parent uses `staggerChildren: 0.05`, each char:
```ts
hidden: { opacity: 0, y: 10 }
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
```

### Magnetic Button
Two-layer button: background layer moves +6px X on hover, text layer moves −6px X.
```ts
hover: { x: 6, transition: { duration: 0.4, ease: "easeInOut" } }
```

### Parallax on Scroll
```ts
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 300], [0, 80]);
```

### Underline Link Hover
Pseudo-element width: `0% → 100%`, duration 0.3s `easeOut`. Use `::after` with `scaleX`.

### Stair-step Page Transition
3–5 vertical columns slide `y: "100%"` staggered at 0.08s. Total 0.6s `easeInOut`.

### Layout Morphing (layoutId)
```tsx
<motion.div layoutId="card" layout>
  {/* Framer auto-animates position/size changes */}
</motion.div>
```

---

## Easing Quick Reference

| Use Case | cubic-bezier | Duration |
|---|---|---|
| Entry | `(0, 0, 0.58, 1)` | 0.6–0.8s |
| Exit | `(0.42, 0, 1, 1)` | 0.4–0.6s |
| Premium/luxury | `(0.65, 0, 0.35, 1)` | 0.7–0.9s |
| Micro-interaction | `(0, 0, 0.58, 1)` | 0.2–0.3s |

---

## Animation Research Workflow

Whenever implementing or upgrading animations:
1. Search for reference implementations from award-winning portfolios (Awwwards, FWA, CSS Design Awards).
2. Present 2–3 options with a description of the visual effect, easing values, and tradeoffs.
3. Ask Ben which direction to pursue before implementing.
4. Reference inspirations: Paco Coursey (paco.me), Rauno (rauno.me), Linear's design system, Olivier Larose tutorials.
