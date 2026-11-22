import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHead } from "./ui";

export function Experience() {
  const { t } = useLanguage();
  const v = t.experience.volunteer;

  return (
    <section className="section" id="experience">
      <SectionHead title={t.experience.title} lead={t.experience.subtitle} />

      <ol className="timeline">
        {t.experience.items.map((item) => (
          <li key={item.company + item.period}>
            <Reveal className="timeline__item">
              <div className="timeline__meta">
                <time>{item.period}</time>
                <span>{item.place}</span>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <aside className="volunteer">
          <h3 className="subhead">{v.title}</h3>
          <p className="volunteer__role">
            {v.role} <time>· {v.period}</time>
          </p>
          <p>{v.detail}</p>
        </aside>
      </Reveal>
    </section>
  );
}
