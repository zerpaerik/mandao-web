"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/** Counts up from 0 to `to` the first time it enters the viewport. */
export function Counter({ to, prefix = "", suffix = "", decimals = 0, duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${v.toFixed(decimals).replace(".", ",")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
