import { skills, languages, education } from '../../data/content'
import section from '../../styles/section.module.css'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section className={section.section} id="skills" aria-labelledby="skills-heading">
      <h2 className={section.title} id="skills-heading">Skills</h2>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div className={styles.group} key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.tags}>
              {group.items.map((item) => (
                <li className={styles.tag} key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.metaCols}>
        <div>
          <h3 className={styles.groupTitle}>Languages</h3>
          <ul className={styles.plainList}>
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.groupTitle}>Education</h3>
          <ul className={styles.plainList}>
            {education.map((e) => (
              <li key={e.name}>
                {e.year && <span className={styles.year}>{e.year}</span>}
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
