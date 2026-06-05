# RetroAltFest Homepage MVP

Production-ready static homepage MVP for RetroAltFest.com, built from the Nocturnal Atlas aesthetic direction.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- TypeScript
- Static JSON-backed festival data
- Node built-in test runner

## Project initialization commands

If starting from scratch, the equivalent setup is:

```bash
cd /Users/saulyd/RetroAltFest/MVP
npx create-next-app@latest retroaltfest-homepage --ts --app --tailwind --eslint --src-dir --import-alias "@/*"
cd retroaltfest-homepage
mkdir -p src/data
# App data is versioned in this repo at src/data/atlas-festivals.json.
npm install
```

This repository is already initialized, so day-to-day work starts with `npm install` if dependencies are missing.

## Folder/file structure

```text
retroaltfest-homepage/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind import + RetroAltFest design tokens
│   │   ├── layout.tsx           # Metadata, fonts, root layout
│   │   └── page.tsx             # Homepage composition only
│   ├── components/
│   │   ├── home/
│   │   │   ├── FeaturedFestivals.tsx
│   │   │   ├── FestivalCard.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MapPreview.tsx
│   │   │   ├── SceneChips.tsx
│   │   │   ├── SubmitFestivalCta.tsx
│   │   │   └── TrustSection.tsx
│   │   └── site/
│   │       ├── Footer.tsx
│   │       └── Header.tsx
│   ├── data/
│   │   └── atlas-festivals.json
│   └── lib/
│       └── festivals.ts         # Typed atlas-data helpers
└── tests/
    └── homepage-mvp.test.mjs
```

## Homepage MVP scope

Included:

1. Hero section with atmospheric atlas preview and primary CTAs.
2. Featured festival cards backed by the atlas JSON dataset.
3. Scene/category chips for goth, darkwave, industrial, post-punk, synthpop, and EBM.
4. Trust/verification section focused on official sources, status labels, and manual curation.
5. Map preview placeholder that avoids guessed coordinates.
6. Submit festival CTA using a simple mailto link for MVP scope.
7. Footer with lightweight site navigation.

Not included yet: auth, CMS, search, real map tiles, geocoding, form backend, festival detail pages, or analytics.

## Starter Tailwind styling

Global design tokens live in `src/app/globals.css`:

- `--raf-black`, `--raf-night`, `--raf-panel` for the cinematic dark base.
- `--raf-violet`, `--raf-magenta`, `--raf-cyan` for atmospheric glow accents.
- `--raf-verified`, `--raf-warning` for data-quality/status cues.
- `.nocturnal-grid` and `.scanline` provide subtle low-cost ambience without images or heavy animation.
- `prefers-reduced-motion` is respected.

## App data integration

Homepage, directory, detail-page, and verification data are imported from:

```text
src/data/atlas-festivals.json
```

Typed helpers live in:

```text
src/lib/festivals.ts
```

Coordinates remain intentionally null until venue geocoding is verified. Do not guess map pins.

## Run instructions

```bash
cd /Users/saulyd/RetroAltFest/MVP/retroaltfest-homepage
npm install
npm run dev
```

Open http://localhost:3000.

Quality checks:

```bash
npm test
npm run lint
npm run build
```

## Deployment recommendations

Recommended MVP deployment path:

1. Push this app to a GitHub repository.
2. Import the repo into Vercel.
3. Use the default Next.js build settings:
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output: managed by Next.js/Vercel
4. Add the production domain `retroaltfest.com` when ready.
5. Add a real Open Graph image before public launch.
6. Keep the submit CTA as mailto until the festival lead-review workflow is ready.
7. Add verified geocoded child records before replacing the map preview with precise map pins.

## Current verification status

- Tests cover the seed dataset, required homepage sections/CTAs, component structure, template-branding removal, Nocturnal Atlas CSS tokens, reduced-motion support, README guidance, and production metadata.
- `npm run build` produces a static prerendered homepage.
