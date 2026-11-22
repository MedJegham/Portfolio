import { useLanguage } from "../context/LanguageContext";
import { Arrow, Reveal, SectionHead } from "./ui";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const links = [
    { label: c.labels.email, value: c.email, href: `mailto:${c.email}` },
    { label: c.labels.phone, value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { label: c.labels.linkedin, value: c.linkedin, href: "https://linkedin.com/in/mohamed-jegham", external: true },
    { label: c.labels.github, value: c.github, href: "https://github.com/MedJegham", external: true },
  ];

  return (
    <section className="section" id="contact">
      <SectionHead title={c.title} lead={c.subtitle} />

      <Reveal className="contact">
        <a className="btn btn--primary" href={`mailto:${c.email}`}>
          {c.cta}
        </a>
        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">{link.value}</span>
                {link.external && <Arrow className="contact__icon" />}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
