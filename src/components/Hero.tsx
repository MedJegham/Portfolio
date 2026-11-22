import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Arrow, Magnetic } from "./ui";
import { EASE, useClock } from "../lib/motion";

/** Safety net: shrink the name if a line would overflow its container. */
function useFitName() {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const lines = el.querySelectorAll<HTMLElement>(".hero__line-inner");
      if (!lines.length) return;
      el.style.fontSize = "";
      const parentWidth = el.clientWidth;
      if (parentWidth <= 0) return;
      let widest = 0;
      lines.forEach((line) => {
        const indent = parseFloat(getComputedStyle(line.parentElement!).paddingLeft) || 0;
        widest = Math.max(widest, line.scrollWidth + indent);
      });
      if (widest > parentWidth) {
        const current = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = `${Math.max(18, (current * parentWidth) / widest)}px`;
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    document.fonts?.ready?.then(fit);
    return () => ro.disconnect();
  }, []);

  return ref;
}

export function Hero({ ready }: { ready: boolean }) {
  const { t } = useLanguage();
  const nameRef = useFitName();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const time = useClock("Africa/Tunis");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);
  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  const state = ready ? "show" : "hidden";
  const line = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 1.25, delay: 0.1 + i * 0.12, ease: EASE },
    }),
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: EASE },
    }),
  };

  return (
    <section className="hero" id="top" ref={sectionRef} aria-label="Intro">
      <motion.div className="hero__aurora" style={{ y: auroraY }} aria-hidden="true">
        <span className="blob blob--a" />
        <span className="blob blob--b" />
        <span className="blob blob--c" />
      </motion.div>
      <div className="hero__lines" aria-hidden="true" />

      <motion.div className="hero__inner" style={{ opacity: fade }}>
        <motion.div
          className="hero__meta"
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0.05}
        >
          <span>{t.hero.edition}</span>
          <span className="hero__meta-mid">
            {t.hero.location} · <time>{time}</time> GMT+1
          </span>
          <span className="pill">
            <span className="pulse" aria-hidden="true" />
            {t.hero.status}
          </span>
        </motion.div>

        <motion.h1 ref={nameRef} className="hero__name" style={{ y: nameY }}>
          <span className="hero__line">
            <motion.span
              className="hero__line-inner"
              variants={line}
              initial="hidden"
              animate={state}
              custom={0}
            >
              Mohamed
            </motion.span>
          </span>
          <span className="hero__line hero__line--em">
            <motion.span
              className="hero__line-inner"
              variants={line}
              initial="hidden"
              animate={state}
              custom={1}
            >
              Jegham<span className="hero__dot">.</span>
            </motion.span>
          </span>
        </motion.h1>

        <div className="hero__bottom">
          <motion.p
            className="hero__role"
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0.55}
          >
            {t.hero.role}
          </motion.p>
          <motion.div
            className="hero__pitch"
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0.65}
          >
            <p className="hero__tagline">{t.hero.tagline}</p>
            <div className="hero__actions">
              <Magnetic>
                <a className="btn btn--primary" href="#contact">
                  {t.hero.ctaPrimary}
                  <Arrow className="btn__icon" />
                </a>
              </Magnetic>
              <a className="btn btn--ghost" href="#projects">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero__footer"
        variants={fadeUp}
        initial="hidden"
        animate={state}
        custom={0.85}
      >
        <a href="#about" className="hero__scroll">
          <span className="hero__scroll-line" aria-hidden="true" />
          {t.hero.scroll}
        </a>
        <a href="#cryptonews" className="hero__now">
          <span className="hero__now-label">{t.hero.now}</span>
          <span className="hero__now-name">{t.hero.nowProject}</span>
          <Arrow />
        </a>
      </motion.div>
    </section>
  );
}
