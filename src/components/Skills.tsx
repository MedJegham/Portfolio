import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHead } from "./ui";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <SectionHead title={t.skills.title} lead={t.skills.subtitle} />

      <Reveal>
        <dl className="skills">
          {t.skills.groups.map((group) => (
            <div key={group.name} className="skills__row">
              <dt>{group.name}</dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <h3 className="subhead">{t.skills.certifications.title}</h3>
        <ul className="certs">
          {t.skills.certifications.items.map((cert) => {
            const [issuer, ...rest] = cert.split(" — ");
            return (
              <li key={cert}>
                <strong>{issuer}</strong>
                <span>{rest.join(" — ")}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
