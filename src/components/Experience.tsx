import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHead } from "./ui";
import { EASE } from "../lib/motion";

export function Experience() {
  const { t } = useLanguage();
  const v = t.experience.volunteer;

  return (
    <section className="section experience" id="experience">
      <SectionHead
        index="02"
        label={t.experience.title}
        heading={t.experience.heading}
        lead={t.experience.subtitle}
      />

      <ol className="roles">
        {t.experience.items.map((item, i) => (
          <motion.li
            key={item.company + item.period}
            className="role"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <span className="role__index">{String(i + 1).padStart(2, "0")}</span>
            <div className="role__meta">
              <time>{item.period}</time>
              <span className="role__company">{item.company}</span>
              <span>{item.place}</span>
            </div>
            <div className="role__body">
              <h3>{item.role}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>

      <Reveal>
        <aside className="volunteer">
          <p className="kicker">{v.title}</p>
          <div className="volunteer__grid">
            <div>
              <h3>{v.role}</h3>
              <time>{v.period}</time>
            </div>
            <p>{v.detail}</p>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
