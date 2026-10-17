import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "morro";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-mandao text-cream hover:bg-mandao-dark shadow-card",
  secondary: "bg-white text-ink hover:bg-sand border border-line",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  dark: "bg-ink text-cream hover:bg-black",
  morro: "bg-morro text-cream hover:bg-morro-dark shadow-card",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-[17px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-extrabold transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & { href: string; external?: boolean };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, external } = rest;
    if (external || href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
