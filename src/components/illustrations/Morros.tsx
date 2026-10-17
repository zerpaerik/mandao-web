import { cn } from "@/lib/utils";

interface MorrosProps {
  className?: string;
  /** Darker variant for use over the brand orange. */
  tone?: "green" | "dark";
}

/**
 * Stylized silhouette of Los Morros de San Juan.
 * Decorative only: used as a backdrop until the real photo is in place.
 */
export function Morros({ className, tone = "green" }: MorrosProps) {
  const front = tone === "green" ? "#1F6B4F" : "#2B2724";
  const back = tone === "green" ? "#174F3B" : "#1b1816";
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-full w-full", className)}
    >
      <path
        d="M0 260 L140 130 L250 210 L420 60 L560 190 L700 90 L840 180 L980 110 L1120 200 L1260 140 L1440 210 L1440 320 L0 320 Z"
        fill={back}
        opacity="0.9"
      />
      <path
        d="M0 320 L0 290 L120 240 L260 280 L400 215 L560 285 L720 230 L900 290 L1060 245 L1240 295 L1440 260 L1440 320 Z"
        fill={front}
      />
    </svg>
  );
}
