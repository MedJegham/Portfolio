import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHead } from "./ui";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <SectionHead title={t.about.title} lead={t.about.lead} />

      <div className="about">
        <Reveal className="about__text">
          <p>{t.about.body}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="stats">
            {t.about.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal>
        <h3 className="subhead">{t.about.educationTitle}</h3>
        <ul className="edu">
          {t.about.education.map((edu) => (
            <li key={edu.school}>
              <div>
                <h4>{edu.school}</h4>
                <p>{edu.degree}</p>
              </div>
              <div className="edu__meta">
                <time>{edu.period}</time>
                <span>{edu.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
