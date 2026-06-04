import { projects } from "../../data/content";
import { Link } from "../Link/Link";
import section from "../../styles/section.module.css";
import styles from "./Projects.module.css";

function domain(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function Projects() {
  return (
    <section
      className={section.section}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 className={section.title} id="projects-heading">
        Projects
      </h2>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li className={styles.card} key={project.url}>
            <a
              className={styles.preview}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                className={styles.previewImg}
                src={project.image}
                alt={`${project.name} website preview`}
                width="760"
                height="475"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className={styles.body}>
              <div className={styles.cardHead}>
                <h3 className={styles.name}>{project.name}</h3>
                <Link className={styles.url} href={project.url} view="text">
                  {domain(project.url)}
                </Link>
              </div>
              <p className={styles.desc}>{project.description}</p>
              <Link className={styles.visit} href={project.url} view="text">
                Visit Website →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
