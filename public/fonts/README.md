# Fonts

Drop the self-hosted **Neue Machina** web fonts here as `.woff2`:

- `NeueMachina-Regular.woff2` (weight 400 — body text)
- `NeueMachina-Ultrabold.woff2` (weight 800 — headings, name, monogram)

## Where to get them

PP Neue Machina is **free for personal use** from
[pangrampangram.com/products/neue-machina](https://pangrampangram.com/products/neue-machina).

1. Download the family, then take the **Regular** and **Ultrabold** weights.
2. If you only have `.otf`/`.ttf`, convert to `.woff2` (e.g. the
   [google/woff2](https://github.com/google/woff2) tool, or any "ttf to woff2"
   converter), then rename to the two filenames above.

Until these files are present, the site falls back to the system font stack —
everything still works, it just won't render in Neue Machina.

The `@font-face` declarations live in `src/index.css`; they're preloaded in `index.html`.
