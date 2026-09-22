import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section contact" id="contact">
      <div className="section__head">
        <h2>{t.contact.title}</h2>
        <p className="section__lead">{t.contact.subtitle}</p>
      </div>

      <div className="contact__row">
        <a className="btn btn--primary" href={`mailto:${t.contact.email}`}>
          {t.contact.cta}
        </a>
        <ul className="contact__links">
          <li>
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </li>
          <li>
            <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>
              {t.contact.phone}
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mohamed-jegham"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.linkedin}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MedJegham"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.github}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
