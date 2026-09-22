import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__copy">
          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            {t.hero.role}
          </motion.p>
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__name-line">Mohamed</span>
            <span className="hero__name-line hero__name-line--accent">
              Jegham
            </span>
          </motion.h1>
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            {t.hero.tagline}
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
          >
            <a className="btn btn--primary" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href="#projects">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
