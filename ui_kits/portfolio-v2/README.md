# Portfolio UI Kit — BenBuilds.it

A pixel-faithful, interactive recreation of the live BenBuilds.it portfolio.
Built as a single HTML file + JSX components — no Next.js, no build step.

## Files

| File | Role |
|---|---|
| `index.html` | Entry point. Loads React + Babel + components, includes click-thru flow |
| `styles.css` | All component styling using tokens from `../../colors_and_type.css` |
| `data.js` | Projects, tech stack, learning phases, languages, channels |
| `app.jsx` | Top-level `<App>` component, sections sequence, project-detail overlay state |
| `Hero.jsx` | Hero split-screen (gray content / black portrait + dot grid) |
| `QuoteBanner.jsx` | Black full-bleed editorial quote |
| `About.jsx` | About + skill bars |
| `Languages.jsx` | Languages strip with dot scale |
| `Roadmap.jsx` | Tech-stack grid + Learning-Path timeline |
| `Projects.jsx` | Selected works grid + project detail overlay |
| `Contact.jsx` | Contact channel cards + footer |
| `primitives.jsx` | Shared icons, eyebrow, motion-on-view wrapper |

## Run

Open `index.html` directly in a browser — everything is CDN-loaded.

## What's faithful, what's not

**Pixel-faithful:** layout, typography (Poppins), colors, hover/press states,
spacing rhythm, rounded radii, the orange accent rules, the editorial period at
end of section headings.

**Simplified:** motion uses CSS transitions + an `IntersectionObserver` hook
rather than Framer Motion — the *result* matches (entry fade + y20, golden
easing), but the implementation is lighter. The `DotGrid` canvas is rendered
as a static SVG dot field; the interactive cursor-influenced version is in
the original codebase. Project detail opens as an in-page overlay rather than
a routed page.

## Tokens

All colors / type / radii / shadows / motion come from
`../../colors_and_type.css`. Touch tokens there if you want a global change;
touch `styles.css` for kit-only layout.
