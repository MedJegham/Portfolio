import { motion } from "framer-motion";
import type { PointerEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SentimentDemo } from "./SentimentDemo";
import { Arrow, Magnetic, Reveal, SectionHead } from "./ui";
import { EASE } from "../lib/motion";

function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function FeaturedProject() {
  const { t } = useLanguage();
  const f = t.projects.featured;

  return (
    <motion.article
      className="feature"
      id="cryptonews"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: EASE }}
      onPointerMove={spotlight}
    >
      <div className="feature__glow" aria-hidden="true" />

      <div className="feature__top">
        <span className="pill pill--live">
          <span className="pulse" aria-hidden="true" />
          {f.status}
        </span>
        <span className="feature__term">{f.term}</span>
      </div>

      <div className="feature__grid">
        <div className="feature__copy">
          <p className="feature__tag">{f.tag}</p>
          <h3 className="feature__name">
            {f.name}
            <span className="feature__name-em">
              <span className="feature__dash">—</span> <em>{f.nameEm}</em>
            </span>
          </h3>
          <p className="feature__desc">{f.description}</p>

          <p className="feature__subhead">{f.objectivesTitle}</p>
          <ol className="objectives">
            {f.objectives.map((o, i) => (
              <motion.li
                key={o.code}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
              >
                <span className="objectives__code">{o.code}</span>
                <strong className="objectives__value">{o.value}</strong>
                <span className="objectives__label">{o.label}</span>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="feature__demo">
          <SentimentDemo />
        </div>
      </div>

      <div className="feature__pipeline">
        <p className="feature__subhead">{f.pipelineTitle}</p>
        <ol className="pipeline">
          {f.pipeline.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            >
              <span className="pipeline__n">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </motion.li>
          ))}
        </ol>
      </div>

      <dl className="specs">
        {f.specs.map((s) => (
          <div key={s.label} className="specs__item">
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="feature__foot">
        <ul className="stack">
          {f.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="feature__actions">
          <p className="feature__disclaimer">{f.disclaimer}</p>
          <Magnetic>
            <a className="btn btn--primary" href={f.link} target="_blank" rel="noreferrer">
              {f.cta}
              <Arrow className="btn__icon" />
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section projects" id="projects">
      <SectionHead
        index="03"
        label={t.projects.title}
        heading={t.projects.heading}
        lead={t.projects.subtitle}
      />

      <p className="kicker">{t.projects.featuredLabel}</p>
      <FeaturedProject />

      <Reveal>
        <p className="kicker kicker--spaced">{t.projects.othersLabel}</p>
      </Reveal>
      <ul className="cards">
        {t.projects.items.map((project, i) => (
          <motion.li
            key={project.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="card"
              onPointerMove={spotlight}
            >
              <div className="card__top">
                <span className="card__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="card__tag">{project.tag}</span>
                <span className="card__arrow">
                  <Arrow />
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="stack stack--small">
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
