import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import portrait from "../assets/mohamed-jegham.webp";
import { Arrow } from "./ui";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <motion.div
        className="hero__text"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="hero__hello">{h.hello}</p>
        <h1 className="hero__name">Mohamed Jegham</h1>
        <p className="hero__role">{h.role}</p>
        <p className="hero__tagline">{h.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            {h.ctaPrimary}
          </a>
          <a className="btn btn--secondary" href="#projects">
            {h.ctaSecondary}
          </a>
        </div>

        <ul className="hero__facts">
          <li>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {h.location}
          </li>
          <li>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z M7 11.5V16c0 1.4 2.2 3 5 3s5-1.6 5-3v-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            {h.school}
          </li>
          <li className="hero__status">
            <span className="dot" aria-hidden="true" />
            {h.status}
          </li>
        </ul>
      </motion.div>

      <motion.figure
        className="hero__photo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img src={portrait} alt={h.photoAlt} width={800} height={1000} fetchPriority="high" />
        <a href="#cryptonews" className="hero__now">
          <span className="hero__now-label">{h.now}</span>
          <span className="hero__now-name">{h.nowProject}</span>
          <Arrow className="hero__now-icon" />
        </a>
      </motion.figure>
    </section>
  );
}
