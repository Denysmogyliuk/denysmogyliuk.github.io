import { skills, languages, education } from '../../data/content'
import { Section } from '../Section/Section'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.grid}>
        {skills.map((group) => (
          <div className={styles.group} key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.tags}>
              {group.items.map((skill) => (
                <li className={styles.tag} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.metaColumns}>
        <div>
          <h3 className={styles.groupTitle}>Languages</h3>
          <ul className={styles.plainList}>
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.groupTitle}>Education</h3>
          <ul className={styles.plainList}>
            {education.map((entry) => (
              <li key={entry.name}>
                {entry.year && <span className={styles.year}>{entry.year}</span>}
                {entry.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
