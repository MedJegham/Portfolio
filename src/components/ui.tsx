import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { EASE } from "../lib/motion";


/** Fade-and-rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Display heading whose text rises out of a mask. The in-view trigger lives on the
 * heading itself, because the clipped inner span never intersects the viewport.
 */
export function MaskHeading({
  className,
  heading,
}: {
  className: string;
  heading: { pre: string; em: string };
}) {
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <span className="mask">
        <motion.span
          className="mask__inner"
          variants={{
            hidden: { y: "105%" },
            show: { y: "0%", transition: { duration: 1.05, ease: EASE } },
          }}
        >
          {heading.pre}
          <em>{heading.em}</em>
        </motion.span>
      </span>
    </motion.h2>
  );
}

/** Editorial section header: index + label on the left, display title with italic serif emphasis. */
export function SectionHead({
  index,
  label,
  heading,
  lead,
}: {
  index: string;
  label: string;
  heading: { pre: string; em: string };
  lead?: string;
}) {
  return (
    <header className="shead">
      <motion.p
        className="shead__label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="shead__index">({index})</span>
        <span>{label}</span>
      </motion.p>
      <div>
        <MaskHeading className="shead__title" heading={heading} />
        {lead && (
          <Reveal delay={0.15} y={16}>
            <p className="shead__lead">{lead}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

/** Element that leans toward the cursor. */
export function Magnetic({
  children,
  strength = 0.3,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  return (
    <motion.span
      className="magnetic"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Counts up to a numeric string such as "20", "14,1" or "14.1" when visible. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const sep = value.includes(",") ? "," : ".";
  const target = parseFloat(value.replace(",", "."));
  const decimals = value.split(sep)[1]?.length ?? 0;
  const static_ = reduce || Number.isNaN(target);
  const [animated, setAnimated] = useState<string | null>(null);

  useEffect(() => {
    if (!inView || static_) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setAnimated(v.toFixed(decimals).replace(".", sep)),
      onComplete: () => setAnimated(value),
    });
    return () => controls.stop();
  }, [inView, static_, target, decimals, sep, value]);

  return <span ref={ref}>{static_ ? value : (animated ?? (0).toFixed(decimals).replace(".", sep))}</span>;
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
