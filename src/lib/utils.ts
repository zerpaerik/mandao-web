/** Joins class names, dropping falsy values. Tiny stand-in for clsx. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats a USD amount the way the site writes prices: "$13,00" (Venezuelan decimal comma). */
export function formatUsd(value: number): string {
  const number = new Intl.NumberFormat("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  return `$${number}`;
}
