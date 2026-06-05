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
  tabIndex?: number;
};

export function Link({
  href,
  children,
  view = "text",
  download,
  emphasis,
  className,
  tabIndex,
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
      {...(tabIndex != null ? { tabIndex } : {})}
      {...(download != null ? { download } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.linkText}>{children}</span>
    </a>
  );
}
