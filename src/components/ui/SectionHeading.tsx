import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({ eyebrow, title, body, align = "left", tone = "light", className }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-xl px-3 py-1.5 text-[13px] font-extrabold tracking-wide",
            dark ? "bg-cream/10 text-morro-soft" : "bg-white text-morro",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-[44px]",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p className={cn("max-w-2xl text-pretty text-[17px] leading-relaxed", dark ? "text-cream/80" : "text-ink-soft")}>
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
