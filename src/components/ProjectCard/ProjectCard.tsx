import type { Project } from '../../data/content'
import { Link } from '../Link/Link'
import styles from './ProjectCard.module.css'

function getHostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className={styles.card}>
      <a
        className={styles.preview}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          className={styles.previewImage}
          src={project.image}
          alt={`${project.name} website preview`}
          width="760"
          height="475"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.name}>{project.name}</h3>
          <Link className={styles.domain} href={project.url}>
            {getHostname(project.url)}
          </Link>
        </div>
        <p className={styles.description}>{project.description}</p>
        <Link className={styles.visitLink} href={project.url}>
          Visit Website →
        </Link>
      </div>
    </li>
  )
}
