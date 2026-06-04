import { experience } from '../../data/content'
import { Section } from '../Section/Section'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </ol>
    </Section>
  )
}
