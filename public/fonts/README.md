# Fonts (self-hosted)

| File | Family | Weight | Used for |
|------|--------|--------|----------|
| `neue-machina.woff2` | Neue Machina (PP Neue Machina Plain) | 400 | display + body (main font) |
| `jetbrains-mono.woff2` | JetBrains Mono | 400 | technical labels (greeting, dates, tags, contact labels, footer) |

`@font-face` declarations live in `src/index.css`; both files are preloaded in `index.html`.

Neue Machina is free for personal use from
[pangrampangram.com/products/neue-machina](https://pangrampangram.com/products/neue-machina).
JetBrains Mono is open source (Apache-2.0).

To swap a font, replace the `.woff2` (keep the filename) or update the `@font-face`
`src` + filename in `src/index.css` and the preload in `index.html`.
