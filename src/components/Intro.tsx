import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { EASE } from "../lib/motion";

const KEY = "mj-intro-played";

export function shouldPlayIntro() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
}

/** Opening title card, played once per session. */
export function Intro({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable: intro simply plays again next time */
    }
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(onDone, 1700);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      className="intro"
      aria-hidden="true"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="intro__center">
        <span className="mask">
          <motion.span
            className="mask__inner intro__mark"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Mohamed <em>Jegham</em>
          </motion.span>
        </span>
        <motion.span
          className="intro__bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.span
          className="intro__caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.intro}
        </motion.span>
      </div>
    </motion.div>
  );
}
