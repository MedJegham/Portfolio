import { useMemo, useState } from "react";
import { demoHeadlines } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { scoreHeadline, type SentimentClass } from "../lib/toySentiment";

const ORDER: SentimentClass[] = ["bullish", "neutral", "bearish"];

export function SentimentDemo() {
  const { t } = useLanguage();
  const d = t.projects.featured.demo;
  const [text, setText] = useState<string>(demoHeadlines[0]);

  const scored = useMemo(() => scoreHeadline(text), [text]);
  const confidence = Math.round(scored.probs[scored.label] * 100);
  const hasText = text.trim().length > 0;

  return (
    <div className="demo">
      <p className="demo__title">{d.title}</p>

      <label className="demo__label" htmlFor="demo-input">
        {d.inputLabel}
      </label>
      <input
        id="demo-input"
        className="demo__input"
        type="text"
        value={text}
        placeholder={d.placeholder}
        spellCheck={false}
        autoComplete="off"
        maxLength={160}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="demo__examples">
        <span className="demo__label">{d.examples}</span>
        <div className="demo__chips">
          {demoHeadlines.map((h) => (
            <button
              key={h}
              type="button"
              className={`chip${text === h ? " is-active" : ""}`}
              onClick={() => setText(h)}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {hasText && (
        <>
          <div className="demo__label">{d.tokens}</div>
          <p className="demo__tokens">
            {scored.tokens.map((tk, i) => (
              <span
                key={`${i}-${tk.text}`}
                className={`tok tok--${tk.polarity}${tk.flipped ? " is-flipped" : ""}`}
              >
                {tk.text}
              </span>
            ))}
          </p>
          {scored.signals === 0 && <p className="demo__empty">{d.noSignal}</p>}

          <div className="demo__result" aria-live="polite">
            <p className="demo__verdict">
              <span className={`verdict verdict--${scored.label}`}>{d.classes[scored.label]}</span>
              <span className="demo__conf">
                {d.confidence} {confidence}%
              </span>
            </p>
            <div className="demo__bars">
              {ORDER.map((cls) => (
                <div key={cls} className={`bar bar--${cls}`}>
                  <span className="bar__name">{d.classes[cls]}</span>
                  <span className="bar__track">
                    <span
                      className="bar__fill"
                      style={{ transform: `scaleX(${scored.probs[cls]})` }}
                    />
                  </span>
                  <span className="bar__pct">{Math.round(scored.probs[cls] * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <p className="demo__legend">
        <span className="tok tok--pos">{d.legend.pos}</span>
        <span className="tok tok--neg">{d.legend.neg}</span>
        <span className="tok tok--negation">{d.legend.negation}</span>
        <span className="tok tok--ticker">{d.legend.ticker}</span>
      </p>
      <p className="demo__note">{d.note}</p>
    </div>
  );
}
