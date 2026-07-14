import type { ReactNode } from "react";
import { contacts, credits, resumeUrl } from "../../data/content";
import { Link } from "../Link/Link";
import styles from "./Contact.module.css";

const email = contacts.find((contact) => contact.label === "Email");
const otherContacts = contacts.filter((contact) => contact.label !== "Email");

type ColumnAlignment = "left" | "center" | "right";

type ContactColumnProps = {
  title: string;
  alignment: ColumnAlignment;
  children: ReactNode;
};

function ContactColumn({ title, alignment, children }: ContactColumnProps) {
  return (
    <div className={`${styles.column} ${styles[alignment]}`}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

export function Contact() {
  return (
    <section
      className={styles.contact}
      id="contact"
      aria-labelledby="contact-heading"
      data-reveal
    >
      <p className={styles.lead} id="contact-heading">
        Open to interesting frontend challenges. Let’s talk.
      </p>

      <div className={styles.columns}>
        <ContactColumn title="Links" alignment="left">
          <li>
            <Link href={resumeUrl} download="Denys-Mogyliuk-CV.pdf">
              Résumé (PDF) ↓
            </Link>
          </li>
          {otherContacts.map((contact) => (
            <li key={contact.label}>
              <Link href={contact.href}>{contact.label}</Link>
            </li>
          ))}
        </ContactColumn>

        {email && (
          <ContactColumn title="Email" alignment="center">
            <li>
              <Link href={email.href}>{email.value}</Link>
            </li>
          </ContactColumn>
        )}

        <ContactColumn title="Credits" alignment="right">
          {credits.map((credit) => (
            <li key={credit.text}>
              {credit.href ? (
                <Link href={credit.href}>{credit.text}</Link>
              ) : (
                <span className={styles.muted}>{credit.text}</span>
              )}
            </li>
          ))}
        </ContactColumn>
      </div>
    </section>
  );
}
