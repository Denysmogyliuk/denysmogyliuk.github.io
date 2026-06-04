# Portfolio — Single-Page Site Design

**Date:** 2026-06-04
**Owner:** Denys Mogyliuk
**Goal:** A single-page personal portfolio with maximum SEO/meta and performance, deployed to GitHub Pages.

## Summary

A single-page (one HTML document, no router) personal portfolio for a front-end developer.
Design language borrowed from [pepelsbey.dev](https://pepelsbey.dev/): minimalist, single
reading column, accent color, semantic structure. No photos. English only. Light/Auto/Dark
theme switcher.

## Decisions (locked)

| Topic | Decision |
|-------|----------|
| Stack | React + Vite (TypeScript) — keep existing scaffold, strip starter content |
| Themes | Light / Auto / Dark (3-state), persisted in `localStorage`, no flash-of-wrong-theme |
| Sections | Hero / Experience / Skills / Contact |
| Deploy | `denysmogyliuk.github.io` (root). Vite `base: '/'` |
| Accent | Indigo / violet |
| Contact | Email, Telegram, GitHub |
| Language | English only (`<html lang="en">`) |

## Architecture

- **Build:** Vite + `@vitejs/plugin-react`. Output is a static SPA shell + hydrated React.
  Single page, no routing, no data fetching — all content is static in components.
- **Components** (each one purpose, in `src/`):
  - `App.tsx` — composes the page: `<Header>`, `<main>` with the four sections, `<Footer>`.
  - `components/Header.tsx` — site name/wordmark + `ThemeToggle`.
  - `components/ThemeToggle.tsx` — 3-state Light/Auto/Dark control.
  - `components/Hero.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx` — content sections.
  - `data/content.ts` — single source of truth for all CV content (jobs, skills, links).
    Keeps components dumb and content editable in one place.
  - `hooks/useTheme.ts` — reads/writes theme, syncs `data-theme` on `<html>`.
- **Theme mechanism:**
  - CSS custom properties in `index.css`, scoped by `:root` (light defaults) and
    `[data-theme="dark"]`. Auto = no `data-theme` attribute → falls back to
    `@media (prefers-color-scheme: dark)`.
  - Inline blocking script in `index.html` `<head>` sets `data-theme` from `localStorage`
    before first paint → no flash.
  - `<meta name="theme-color">` set per scheme via two media-query'd tags.

## SEO / Meta (the "maximum meta" goal)

All static in `index.html` (single page, so this is complete coverage):
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- `<meta name="author">`, `robots` (index,follow)
- Open Graph: `og:type=profile`, `og:title`, `og:description`, `og:url`, `og:image`,
  `og:locale=en_US`, `og:site_name`
- Twitter Card: `summary_large_image`, title, description, image
- JSON-LD `Person` schema (name, jobTitle, url, sameAs links, knowsAbout = skills)
- `theme-color` meta (per light/dark)
- `lang="en"`, viewport, charset
- `public/robots.txt` (allow all, sitemap ref)
- `public/sitemap.xml` (single URL)
- `public/og.svg` → exported/served OG image (text-based, branded, no photo)
- `favicon.svg` (monogram "DM" in accent color)

## Performance (the "maximum performance" goal)

- System font stack (zero web-font bytes).
- No external requests at runtime (no analytics, no CDN fonts/icons).
- Inline SVG icons (no icon font / sprite network request beyond the bundle).
- Vite minification + tree-shaking; single small CSS file.
- `preconnect`/`preload` not needed (no third parties).
- Target: Lighthouse 100/100/100/100. Keep JS minimal (React only; no extra libs).
- Respect `prefers-reduced-motion` for any transitions.

## Content (from CV — verbatim source of truth)

- **Hero:** Name "Denys Mogyliuk", role "Front-end developer", intro paragraph from CV
  (10M+ DAU, architected React systems across ecommerce/AI/education, fast delivery +
  long-term quality).
- **Experience** (4 roles, newest first):
  1. Niko Technologies — Front-end developer — 11.2025–present
  2. Corpsoft — Front-end developer — 04.2024–11.2025
  3. Memcrab — Front-end developer — 02.2022–04.2024
  4. Progressio agency — Front-end developer — 07.2019–02.2022
  Each with impact bullets + short description from CV.
- **Skills** (grouped): Frontend Architecture; State & Data Layer; Performance &
  Scalability; Real-time Systems; Testing; DevOps & Tooling. Plus Languages (English B2)
  and Education (Odessa National Polytechnic Univ. 2013, HTML Academy).
- **Contact:** denysmogyliuk@gmail.com, Telegram @DenysMogyliuk, GitHub DenysMogyliuk.

## Deploy

- `.github/workflows/deploy.yml` — build on push to `main`, publish `dist/` via GitHub Pages
  (actions/upload-pages-artifact + deploy-pages).
- Vite `base: '/'`.

## Out of scope (YAGNI)

- Routing / multiple pages, blog, CMS, photos, analytics, contact form backend,
  internationalization (English only).

## Accessibility

- Semantic landmarks (`header`/`main`/`footer`/`section` with headings), skip-to-content
  link, focus-visible styles, AA contrast in both themes, accessible theme toggle
  (rad/group with labels).
