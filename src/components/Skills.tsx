import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHead } from "./ui";
import { EASE } from "../lib/motion";

function Marquee({ items, reverse }: { items: readonly string[]; reverse?: boolean }) {
  return (
    <div className={`marquee${reverse ? " marquee--reverse" : ""}`} aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <span className="marquee__group" key={copy}>
            {items.map((item) => (
              <span className="marquee__item" key={`${copy}-${item}`}>
                {item}
                <span className="marquee__sep">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const all = t.skills.groups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);

  return (
    <section className="skills" id="skills">
      <div className="section section--flush-bottom">
        <SectionHead
          index="04"
          label={t.skills.title}
          heading={t.skills.heading}
          lead={t.skills.subtitle}
        />
      </div>

      <div className="marquees">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>

      <div className="section section--flush-top">
        <div className="skills__grid">
          {t.skills.groups.map((group, i) => (
            <motion.div
              key={group.name}
              className="skills__group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <h3>
                <span className="skills__n">{String(i + 1).padStart(2, "0")}</span>
                {group.name}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Reveal>
          <div className="certs">
            <p className="kicker">{t.skills.certifications.title}</p>
            <ul>
              {t.skills.certifications.items.map((cert) => {
                const [issuer, ...rest] = cert.split(" — ");
                return (
                  <li key={cert}>
                    <span className="certs__issuer">{issuer}</span>
                    <span className="certs__name">{rest.join(" — ")}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
