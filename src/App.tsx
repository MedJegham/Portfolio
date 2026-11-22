import { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Intro, shouldPlayIntro } from "./components/Intro";
import { useClock } from "./lib/motion";
import "./App.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

function Footer() {
  const { t } = useLanguage();
  const time = useClock("Africa/Tunis");
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {t.footer}
        </p>
        <p className="footer__credit">{t.footerCredit}</p>
        <p className="footer__time">
          Sousse · <time>{time}</time>
        </p>
        <a href="#top" className="footer__top">
          {t.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}

function Portfolio() {
  const [intro, setIntro] = useState(shouldPlayIntro);
  const endIntro = useCallback(() => setIntro(false), []);
  const ready = !intro;

  return (
    <>
      <AnimatePresence>{intro && <Intro onDone={endIntro} />}</AnimatePresence>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LanguageProvider>
          <Portfolio />
        </LanguageProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
