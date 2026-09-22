import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="nav__brand">
        MJ
      </a>
      <nav className="nav__links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav__controls">
        <button
          type="button"
          className="nav__theme"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
          title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <div className="nav__lang" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === "fr" ? "is-active" : undefined}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
          <button
            type="button"
            className={lang === "en" ? "is-active" : undefined}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>
    </motion.header>
  );
}
