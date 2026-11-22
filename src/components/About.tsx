import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { CountUp, Reveal, SectionHead } from "./ui";
import { EASE } from "../lib/motion";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <SectionHead index="01" label={t.about.title} heading={t.about.heading} lead={t.about.lead} />

      <div className="about__body">
        <Reveal className="about__text">
          <p>{t.about.body}</p>
        </Reveal>
        <ul className="stats">
          {t.about.stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
            >
              <strong>
                <CountUp value={stat.value} />
              </strong>
              <span className="stats__label">{stat.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <Reveal>
        <p className="kicker">{t.about.educationTitle}</p>
      </Reveal>
      <ul className="edu">
        {t.about.education.map((edu, i) => (
          <motion.li
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
          >
            <time className="edu__period">{edu.period}</time>
            <div>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
            <span className="edu__detail">{edu.detail}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
