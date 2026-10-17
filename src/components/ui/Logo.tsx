import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}

/** Wordmark: "mandao" with the accented "d". */
export function Logo({ className, tone = "light", size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mandao, inicio"
      className={cn(
        "inline-flex items-center gap-2.5 font-black tracking-tight",
        size === "lg" ? "text-3xl" : "text-2xl",
        tone === "dark" ? "text-cream" : "text-ink",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid place-items-center rounded-xl bg-mandao text-cream",
          size === "lg" ? "h-10 w-10 text-xl" : "h-9 w-9 text-lg",
        )}
      >
        m
      </span>
      <span>
        man<span className="text-mandao">d</span>ao
      </span>
    </Link>
  );
}
