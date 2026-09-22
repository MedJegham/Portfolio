import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section skills" id="skills">
      <div className="section__head">
        <h2>{t.skills.title}</h2>
        <p className="section__lead">{t.skills.subtitle}</p>
      </div>

      <div className="skills__grid">
        {t.skills.groups.map((group) => (
          <div key={group.name} className="skills__group">
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="certs">
        <h3>{t.skills.certifications.title}</h3>
        <ul>
          {t.skills.certifications.items.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
