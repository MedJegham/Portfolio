import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { demoHeadlines } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { scoreHeadline, type SentimentClass } from "../lib/toySentiment";

const ORDER: SentimentClass[] = ["bullish", "neutral", "bearish"];
const TYPE_MS = 34;
const HOLD_MS = 3400;

export function SentimentDemo() {
  const { t } = useLanguage();
  const d = t.projects.featured.demo;
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "-80px" });

  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(demoHeadlines[0]);

  // Auto mode: type each example out, hold, then move on. Paused when off-screen.
  useEffect(() => {
    if (mode !== "auto" || !inView) return;
    const target = demoHeadlines[index];
    let timer: number;

    if (reduce) {
      timer = window.setTimeout(() => setText(target), 0);
      const next = window.setTimeout(
        () => setIndex((i) => (i + 1) % demoHeadlines.length),
        HOLD_MS + 1200,
      );
      return () => {
        window.clearTimeout(timer);
        window.clearTimeout(next);
      };
    }

    let n = 0;
    const type = () => {
      n += 1;
      setText(target.slice(0, n));
      if (n < target.length) {
        timer = window.setTimeout(type, TYPE_MS + Math.random() * 30);
      } else {
        timer = window.setTimeout(
          () => setIndex((i) => (i + 1) % demoHeadlines.length),
          HOLD_MS,
        );
      }
    };
    timer = window.setTimeout(type, 400);
    return () => window.clearTimeout(timer);
  }, [mode, index, inView, reduce]);

  const scored = useMemo(() => scoreHeadline(text), [text]);
  const confidence = Math.round(scored.probs[scored.label] * 100);
  const typing = mode === "auto" && text.length < demoHeadlines[index].length;

  const pick = (i: number) => {
    setMode("manual");
    setIndex(i);
    setText(demoHeadlines[i]);
  };

  return (
    <div className="demo" ref={rootRef} data-label={scored.label}>
      <div className="demo__chrome">
        <span className="demo__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="demo__title">{d.title}</span>
        <button
          type="button"
          className={`demo__mode${mode === "auto" ? " is-auto" : ""}`}
          onClick={() => setMode((m) => (m === "auto" ? "manual" : "auto"))}
          aria-pressed={mode === "auto"}
        >
          <span className="demo__mode-dot" aria-hidden="true" />
          {mode === "auto" ? d.auto : d.manual}
        </button>
      </div>

      <div className="demo__body">
        <label className="demo__label" htmlFor="demo-input">
          {d.inputLabel}
        </label>
        <div className="demo__input">
          <span className="demo__prompt" aria-hidden="true">
            ›
          </span>
          <input
            id="demo-input"
            type="text"
            value={text}
            placeholder={d.placeholder}
            spellCheck={false}
            autoComplete="off"
            maxLength={160}
            onFocus={() => setMode("manual")}
            onChange={(e) => {
              setMode("manual");
              setText(e.target.value);
            }}
          />
          {typing && <span className="demo__caret" aria-hidden="true" />}
        </div>

        <div className="demo__section-label">{d.tokens}</div>
        <div className="demo__tokens">
          {scored.tokens.map((tk, i) => (
            <span
              key={`${i}-${tk.text}`}
              className={`tok tok--${tk.polarity}${tk.flipped ? " is-flipped" : ""}`}
            >
              {tk.text}
            </span>
          ))}
          {scored.signals === 0 && !typing && <span className="demo__empty">{d.noSignal}</span>}
        </div>

        <div className="demo__bars">
          {ORDER.map((cls) => {
            const pct = Math.round(scored.probs[cls] * 100);
            return (
              <div
                key={cls}
                className={`bar bar--${cls}${scored.label === cls ? " is-top" : ""}`}
              >
                <span className="bar__name">{d.classes[cls]}</span>
                <span className="bar__track">
                  <span className="bar__fill" style={{ transform: `scaleX(${scored.probs[cls]})` }} />
                </span>
                <span className="bar__pct">{pct}%</span>
              </div>
            );
          })}
        </div>

        <div className="demo__verdict" aria-live={mode === "manual" ? "polite" : "off"}>
          <span className={`verdict verdict--${scored.label}`}>{d.classes[scored.label]}</span>
          <span className="demo__conf">
            {d.confidence} <strong>{confidence}%</strong>
          </span>
        </div>

        <div className="demo__legend" aria-hidden="true">
          <span className="tok tok--pos">{d.legend.pos}</span>
          <span className="tok tok--neg">{d.legend.neg}</span>
          <span className="tok tok--negation">{d.legend.negation}</span>
          <span className="tok tok--ticker">{d.legend.ticker}</span>
        </div>

        <div className="demo__examples">
          <span className="demo__section-label">{d.examples}</span>
          <div className="demo__chips">
            {demoHeadlines.map((h, i) => (
              <button
                key={h}
                type="button"
                className={`chip${index === i ? " is-active" : ""}`}
                onClick={() => pick(i)}
                title={h}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="demo__note">{d.note}</p>
    </div>
  );
}
