import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section experience" id="experience">
      <div className="section__head">
        <h2>{t.experience.title}</h2>
        <p className="section__lead">{t.experience.subtitle}</p>
      </div>

      <ol className="timeline">
        {t.experience.items.map((item, i) => (
          <motion.li
            key={item.company + item.period}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="timeline__meta">
              <time>{item.period}</time>
              <span>
                {item.company} · {item.place}
              </span>
            </div>
            <h3>{item.role}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <aside className="volunteer">
        <p className="volunteer__label">{t.experience.volunteer.title}</p>
        <h3>{t.experience.volunteer.role}</h3>
        <time>{t.experience.volunteer.period}</time>
        <p>{t.experience.volunteer.detail}</p>
      </aside>
    </section>
  );
}
