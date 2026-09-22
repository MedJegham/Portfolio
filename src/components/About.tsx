import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="section__head">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          {t.about.title}
        </motion.h2>
        <motion.p
          className="section__lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {t.about.lead}
        </motion.p>
      </div>

      <div className="about__body">
        <p>{t.about.body}</p>
        <ul className="about__stats">
          {t.about.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="about__edu">
        {t.about.education.map((edu) => (
          <li key={edu.school}>
            <div>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
            <div className="about__edu-meta">
              <time>{edu.period}</time>
              <span>{edu.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
