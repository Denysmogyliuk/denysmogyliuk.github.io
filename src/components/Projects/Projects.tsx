import { projects } from '../../data/content'
import { Section } from '../Section/Section'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.url} project={project} index={index} />
        ))}
      </ul>
    </Section>
  )
}
