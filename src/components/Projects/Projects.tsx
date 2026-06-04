import { useState } from "react";
import { projects } from "../../data/content";
import { Link } from "../Link/Link";
import section from "../../styles/section.module.css";
import styles from "./Projects.module.css";

function previewUrl(url: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function domain(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

type ProjectCardProps = { project: (typeof projects)[number] };

function PreviewCard({ project }: ProjectCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <a
        className={styles.preview}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        {failed ? (
          <div className={styles.previewFallback}>
            <span className={styles.previewDomain}>{domain(project.url)}</span>
          </div>
        ) : (
          <img
            className={styles.previewImg}
            src={previewUrl(project.url)}
            alt=""
            width="600"
            height="380"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
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
    </>
  );
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
            <PreviewCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
