import { useLanguage } from "../context/LanguageContext";
import { SentimentDemo } from "./SentimentDemo";
import { Arrow, Reveal, SectionHead } from "./ui";

function FeaturedProject() {
  const { t } = useLanguage();
  const f = t.projects.featured;

  return (
    <Reveal>
      <article className="case" id="cryptonews">
        <header className="case__head">
          <p className="case__meta">
            <span className="badge">{f.status}</span>
            <span>{f.term}</span>
          </p>
          <h3 className="case__name">
            {f.name} <span className="case__name-sub">— {f.nameEm}</span>
          </h3>
          <p className="case__tag">{f.tag}</p>
          <p className="case__desc">{f.description}</p>
        </header>

        <div className="case__grid">
          <div>
            <h4 className="case__subhead">{f.objectivesTitle}</h4>
            <ol className="objectives">
              {f.objectives.map((o) => (
                <li key={o.code}>
                  <span className="objectives__code">{o.code}</span>
                  <div>
                    <strong>{o.value}</strong>
                    <p>{o.label}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h4 className="case__subhead">{f.pipelineTitle}</h4>
            <ol className="pipeline">
              {f.pipeline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <SentimentDemo />
        </div>

        <dl className="specs">
          {f.specs.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>

        <footer className="case__foot">
          <ul className="tags">
            {f.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="case__disclaimer">{f.disclaimer}</p>
          <a className="link" href={f.link} target="_blank" rel="noreferrer">
            {f.cta} <Arrow />
          </a>
        </footer>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section" id="projects">
      <SectionHead title={t.projects.title} lead={t.projects.subtitle} />

      <FeaturedProject />

      <h3 className="subhead subhead--spaced">{t.projects.othersLabel}</h3>
      <ul className="cards">
        {t.projects.items.map((project, i) => (
          <li key={project.name}>
            <Reveal delay={i * 0.05} className="cards__cell">
              <a href={project.link} target="_blank" rel="noreferrer" className="card">
                <p className="card__tag">{project.tag}</p>
                <h4>
                  {project.name}
                  <Arrow className="card__icon" />
                </h4>
                <p className="card__desc">{project.description}</p>
                <ul className="tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
