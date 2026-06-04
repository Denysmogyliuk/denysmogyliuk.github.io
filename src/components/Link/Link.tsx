import type { ReactNode } from "react";
import styles from "./Link.module.css";

type LinkView = "text" | "primary" | "secondary";

type LinkProps = {
  href: string;
  children: ReactNode;
  view?: LinkView;
  download?: string | boolean;
  emphasis?: boolean;
  className?: string;
};

export function Link({
  href,
  children,
  view = "text",
  download,
  emphasis,
  className,
}: LinkProps) {
  const external = /^https?:/.test(href);
  const classes = [
    styles.link,
    styles[view],
    view === "text" && emphasis && styles.emphasis,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={href}
      {...(download != null ? { download } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.linkText}>{children}</span>
    </a>
  );
}
