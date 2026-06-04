# Denys Mogyliuk — Portfolio

Single-page personal portfolio. Built for maximum SEO/meta coverage and performance,
deployed to GitHub Pages at [denysmogyliuk.github.io](https://denysmogyliuk.github.io/).

## Stack

- **React 19 + Vite + TypeScript**
- **CSS Modules** — folder-per-component (`Component/Component.tsx` + `Component.module.css`)
- **Theming** via CSS custom properties + `data-theme` attribute (Light / Auto / Dark),
  persisted in `localStorage` with a no-flash inline script in `index.html`.

## Structure

```
src/
  components/<Name>/<Name>.tsx + <Name>.module.css   # one folder per component
  data/content.ts                                    # all CV content (single source of truth)
  hooks/useTheme.ts                                  # theme state + data-theme sync
  styles/section.module.css                          # shared section primitives
  index.css                                          # global tokens, reset, base
public/                                              # favicon.svg, og.png, robots.txt, sitemap.xml
assets-src/og.svg                                    # OG image source (regenerable)
```

## SEO / Meta

`index.html` carries the full set: title, description, canonical, Open Graph, Twitter Card,
JSON-LD `Person`, per-scheme `theme-color`. Plus `robots.txt` and `sitemap.xml`.

## Scripts

```bash
npm run dev       # dev server
npm run build     # tsc + vite build -> dist/
npm run preview   # preview the production build
npm run lint      # eslint
```

## Regenerate the OG image

Edit `assets-src/og.svg`, then (macOS):

```bash
cd public
qlmanage -t -s 1200 -o . ../assets-src/og.svg && mv og.svg.png og.png
sips -c 630 1200 og.png   # crop to centered 1200x630
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages. Enable Pages → "GitHub Actions" in the repo settings once.
