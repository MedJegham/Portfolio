import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Arrow, Magnetic, MaskHeading, Reveal } from "./ui";
import { EASE } from "../lib/motion";

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
    <section className="contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="section">
        <p className="shead__label">
          <span className="shead__index">(05)</span>
          <span>{c.title}</span>
        </p>

        <MaskHeading className="contact__title" heading={c.heading} />

        <Reveal delay={0.1}>
          <div className="contact__cta">
            <p className="contact__sub">{c.subtitle}</p>
            <Magnetic strength={0.2}>
              <a className="btn btn--primary btn--lg" href={`mailto:${c.email}`}>
                {c.cta}
                <Arrow className="btn__icon" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <ul className="contact__links">
          {links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE }}
            >
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">{link.value}</span>
                <Arrow className="contact__arrow" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
