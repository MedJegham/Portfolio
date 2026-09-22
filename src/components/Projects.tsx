import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section projects" id="projects">
      <div className="section__head">
        <h2>{t.projects.title}</h2>
        <p className="section__lead">{t.projects.subtitle}</p>
      </div>

      <ul className="project-list">
        {t.projects.items.map((project, i) => (
          <motion.li
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <div className="project__top">
                <span className="project__tag">{project.tag}</span>
                <span className="project__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project__stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
