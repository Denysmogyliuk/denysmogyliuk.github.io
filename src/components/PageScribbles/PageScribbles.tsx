import type { CSSProperties } from "react";
import styles from "./PageScribbles.module.css";

const SPRITE = [styles.s1, styles.s2, styles.s3];

/** Four fixed scribbles, anchored to alternating edges and spread down the
 *  full page height. id = which sprite drawing (scribbles.svg#1..#3). */
const ITEMS = [
  { top: 1, side: styles.right, size: 760, id: 1, rot: -12, drift: 9 },
  { top: 30, side: styles.right, size: 560, id: 2, rot: 14, drift: -16 },
  { top: 56, side: styles.left, size: 500, id: 3, rot: 9, drift: 12 },
  { top: 80, side: styles.right, size: 480, id: 1, rot: -16, drift: -19 },
];

/**
 * A single page-wide background layer holding four dimmed scribbles from the
 * shared SVG sprite. Masked with `var(--text)` so they follow the theme, and
 * each drifts at its own depth as it scrolls through the viewport (CSS
 * scroll-driven animation — GPU, off the main thread). Purely decorative.
 *
 * Sits behind everything via `z-index: -1`; relies on `#root` being a
 * positioned, isolated stacking context (see index.css).
 */
export function PageScribbles() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {ITEMS.map((it, i) => (
        <span
          key={i}
          className={`${styles.item} ${it.side} ${SPRITE[it.id - 1]}`}
          style={
            {
              top: `${it.top}%`,
              width: `${it.size}px`,
              "--rot": `${it.rot}deg`,
              "--drift": `${it.drift}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
