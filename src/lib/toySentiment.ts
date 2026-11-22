/**
 * Toy lexicon scorer used ONLY for the portfolio's interface demo.
 * It is deliberately simple (a VADER-like keyword baseline) and is not
 * the CryptoNews Intelligence model.
 */

export type Polarity = "pos" | "neg" | "negation" | "ticker" | "plain";
export type SentimentClass = "bullish" | "neutral" | "bearish";

export type Token = {
  text: string;
  polarity: Polarity;
  flipped?: boolean;
};

export type Scored = {
  tokens: Token[];
  probs: Record<SentimentClass, number>;
  label: SentimentClass;
  signals: number;
};

const POS = new Set(
  (
    "surge surges surging rally rallies rallied soar soars soaring record ath approval approved " +
    "launch launches launched partnership partners adoption upgrade upgrades gains gain bullish " +
    "inflow inflows breakout jumps jump rises rise climbs climb beats integrates integration " +
    "milestone growth recovers recovery rebound rebounds airdrop listing lists boost boosts " +
    "outperforms expands expansion wins"
  ).split(" "),
);

const NEG = new Set(
  (
    "outage outages hack hacked exploit exploited crash crashes plunge plunges dump dumps dumped " +
    "lawsuit sues sued halt halted halts drop drops falls fall bearish liquidation liquidations " +
    "delist delists delisted outflow outflows congestion fud delayed delay delays drains drain " +
    "fraud scam slump slumps suffers ban bans banned selloff sell-off downtime vulnerability " +
    "probe warns warning losses loss tumbles sinks rug"
  ).split(" "),
);

const NEGATORS = new Set(["not", "no", "never", "without", "fails", "denies", "isn't", "wasn't", "won't", "didn't"]);

const NEGATION_WINDOW = 3;

export function scoreHeadline(headline: string): Scored {
  const raw = headline.split(/\s+/).filter(Boolean);
  let pos = 0;
  let neg = 0;
  let negateLeft = 0;

  const tokens: Token[] = raw.map((text) => {
    const word = text.toLowerCase().replace(/[^\p{L}\p{N}$'-]/gu, "");

    if (/^\$[a-z]{2,6}$/i.test(word)) {
      negateLeft = Math.max(0, negateLeft - 1);
      return { text, polarity: "ticker" };
    }
    if (NEGATORS.has(word) || word.endsWith("n't")) {
      negateLeft = NEGATION_WINDOW;
      return { text, polarity: "negation" };
    }

    const isPos = POS.has(word);
    const isNeg = NEG.has(word);
    const flipped = negateLeft > 0 && (isPos || isNeg);
    negateLeft = Math.max(0, negateLeft - 1);

    if (isPos || isNeg) {
      const positive = isPos !== flipped;
      if (positive) pos += 1;
      else neg += 1;
      return { text, polarity: positive ? "pos" : "neg", flipped };
    }
    return { text, polarity: "plain" };
  });

  const signals = pos + neg;
  const logits: Record<SentimentClass, number> = {
    bullish: pos * 1.2,
    bearish: neg * 1.2,
    neutral: 0.9 + (signals === 0 ? 1.3 : 0) + (pos > 0 && neg > 0 ? 0.6 : 0),
  };
  const max = Math.max(...Object.values(logits));
  const exps = Object.fromEntries(
    Object.entries(logits).map(([k, v]) => [k, Math.exp(v - max)]),
  ) as Record<SentimentClass, number>;
  const total = exps.bullish + exps.neutral + exps.bearish;
  const probs: Record<SentimentClass, number> = {
    bullish: exps.bullish / total,
    neutral: exps.neutral / total,
    bearish: exps.bearish / total,
  };
  const label = (Object.keys(probs) as SentimentClass[]).reduce((a, b) =>
    probs[b] > probs[a] ? b : a,
  );

  return { tokens, probs, label, signals };
}
