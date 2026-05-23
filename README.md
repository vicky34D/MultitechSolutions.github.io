# Multitech Solutions — Reactive Web

Single-page reactive site for **Multitech Solutions** — a digital
transformation partner based in Kolkata, India, with 25+ years of
experience in Oracle, Cloud, AI and Product Design.

## Stack

- Static HTML / CSS / vanilla JS — no build step.
- [Three.js](https://threejs.org/) (via importmap CDN) for the GPU shader particle system.
- [Lenis](https://lenis.darkroom.engineering/) (CDN) for inertial smooth scroll.
- Google Fonts: Inter, Anton, Bebas Neue.

## Reactive features

- **Page-load intro** — animated brand loader; particles assemble from a
  scattered seed into the BUILD WHAT'S NEXT galaxy on completion.
- **GLSL shader particles** — 12,000 GPU particles morph between six
  scroll-anchored shape targets (galaxy → sphere → disc → dispersed →
  vortex) using a vertex-shader From/To lerp with curl-noise turbulence.
- **Starfield parallax** — two star layers + mouse parallax on cloud + camera.
- **Lenis smooth scroll** — inertial scrolling drives every progress value.
- **Ghost typography** — sharp display type over a stroked outline + blurred
  glow clone for the layered USTA-style look.
- **Horizontal showcase** — sticky cases section that scrolls cards
  horizontally based on viewport position.
- **Counter-scrolling team marquee** — name rows drift in opposite directions.
- **Custom blend-mode cursor** + scroll reveal observer.

## Sections

1. Hero — "Build what's next."
2. Mission — Executing digital transformations across Oracle, Cloud, AI & Product Design
3. About — 25+ years, ₹500M+ funding secured, 120+ awards, 150+ enterprise clients
4. Services — Strategy / Oracle & Cloud / AI & Data / Product Design
5. Cases — horizontal-scroll case study cards
6. Team — leadership cards + counter-scrolling marquee
7. Contact — hello@multitechsolutions.in

## Deploy

GitHub Pages serves the repo root directly. No build step.

```bash
git push origin main
```

## Local preview

```bash
python3 -m http.server 5173
# open http://localhost:5173
```
