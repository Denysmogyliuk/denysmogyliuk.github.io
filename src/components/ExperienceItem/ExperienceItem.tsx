import type { Job } from '../../data/content'
import styles from './ExperienceItem.module.css'

type ExperienceItemProps = {
  job: Job
}

export function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <li className={styles.job}>
      <div className={styles.heading}>
        <h3 className={styles.company}>{job.company}</h3>
        <p className={styles.meta}>
          <span className={styles.position}>{job.position}</span>
          <span className={styles.dates}>
            {job.start} — {job.end}
          </span>
        </p>
      </div>

      {job.projects.map((project) => (
        <div className={styles.project} key={project.summary}>
          <p className={styles.summary}>{project.summary}</p>
          <ul className={styles.achievements}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </li>
  )
}
