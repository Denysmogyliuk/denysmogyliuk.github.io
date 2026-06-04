import { experience } from '../../data/content'
import section from '../../styles/section.module.css'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={section.section} id="experience" aria-labelledby="experience-heading">
      <h2 className={section.title} id="experience-heading">Experience</h2>
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li className={styles.job} key={job.company}>
            <div className={styles.head}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.meta}>
                <span className={styles.position}>{job.position}</span>
                <span className={styles.dates}>{job.start} — {job.end}</span>
              </p>
            </div>
            <p className={styles.desc}>{job.description}</p>
            <ul className={styles.impact}>
              {job.impact.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
