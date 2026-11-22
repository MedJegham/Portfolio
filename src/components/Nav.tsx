import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { EASE } from "../lib/motion";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"] as const;

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return active;
}

export function Nav({ ready }: { ready: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  const links = SECTIONS.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 980) setMenuOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <motion.header
      className={`nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
    >
      <a href="#top" className="nav__brand" onClick={closeMenu} aria-label="Mohamed Jegham">
        <span className="nav__mark">MJ</span>
        <span className="nav__brand-name">Mohamed Jegham</span>
      </a>

      <nav className="nav__links glass" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.id ? "is-active" : undefined}
            aria-current={active === link.id ? "location" : undefined}
          >
            {active === link.id && (
              <motion.span
                className="nav__indicator"
                layoutId="nav-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="nav__link-text">{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="nav__controls">
        <button
          type="button"
          className="nav__theme glass"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
          title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.svg
              key={theme}
              viewBox="0 0 24 24"
              width="17"
              height="17"
              aria-hidden="true"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                  <path
                    d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </>
              ) : (
                <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" fill="currentColor" />
              )}
            </motion.svg>
          </AnimatePresence>
        </button>

        <div className="nav__lang glass" role="group" aria-label="Language">
          {(["fr", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              className={lang === code ? "is-active" : undefined}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {lang === code && (
                <motion.span
                  className="nav__lang-indicator"
                  layoutId="lang-indicator"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="nav__lang-text">{code.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`nav__burger glass${menuOpen ? " is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="nav__mobile"
            aria-label="Mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ol>
              {links.map((link, i) => (
                <li key={link.href} className="mask">
                  <motion.a
                    className="mask__inner"
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: EASE }}
                  >
                    <span className="nav__mobile-n">0{i + 1}</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
