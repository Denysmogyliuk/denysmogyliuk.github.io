import type { CSSProperties } from 'react'
import styles from './PageScribbles.module.css'

const spriteClasses = [styles.s1, styles.s2, styles.s3]

const scribbles = [
  { top: 1, side: styles.right, size: 760, spriteId: 1, rotation: -12, drift: 9 },
  { top: 30, side: styles.right, size: 560, spriteId: 2, rotation: 14, drift: -16 },
  { top: 56, side: styles.left, size: 500, spriteId: 3, rotation: 9, drift: 12 },
  { top: 80, side: styles.right, size: 480, spriteId: 1, rotation: -16, drift: -19 },
]

export function PageScribbles() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {scribbles.map((scribble, index) => (
        <span
          key={index}
          className={`${styles.item} ${scribble.side} ${spriteClasses[scribble.spriteId - 1]}`}
          style={
            {
              top: `${scribble.top}%`,
              width: `${scribble.size}px`,
              '--rot': `${scribble.rotation}deg`,
              '--drift': `${scribble.drift}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
