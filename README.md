# Baby Shower Site

A single-page, fully static baby shower invite site. Built with Vite + React + TypeScript + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Making it yours

Almost everything you need to change lives in one file:

**`src/data/eventData.ts`** — names, date, time, venue, registry links, schedule, FAQ, host contact info.

To update the map, go to Google Maps, search your venue, click "Share" → "Embed a map", and copy the `src` URL into `venueInfo.mapEmbedUrl`.

If you want to change colors or fonts, look at:
- `tailwind.config.ts` — the `sage` / `blush` / `gold` / `paper` / `ink` color tokens
- `index.html` — the Google Fonts `<link>` tags (currently Fraunces, Work Sans, Space Mono)

## Project structure

```
src/
  components/   UI pieces (Hero, Details, Venue, Registry, FAQ, Footer, Divider)
  types/        TypeScript interfaces describing your event data
  data/         Your actual event content, typed against those interfaces
  App.tsx       Composes all sections in order
  main.tsx      React entry point
```

## Deploying

Push this to a GitHub repo, then import it on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — both auto-detect Vite and need zero configuration. Every push to `main` redeploys automatically.

## Build for production manually

```bash
npm run build
npm run preview   # preview the production build locally
```
