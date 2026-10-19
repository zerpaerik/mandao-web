import { Sparkles } from "lucide-react";
import { promoLines } from "@/content/landing";

/**
 * Full-width moving strip of promotional lines. The list is rendered twice so the loop is seamless;
 * the animation pauses on hover and is disabled when the visitor prefers reduced motion.
 */
export function PromoMarquee() {
  const items = [...promoLines, ...promoLines];
  return (
    <section aria-label="Promociones" className="relative z-10 -my-4 rotate-[-1.5deg] scale-[1.02] bg-mandao text-cream shadow-float">
      <div className="group flex overflow-hidden py-4">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {items.map((line, i) => (
            <li key={`${line}-${i}`} className="flex items-center gap-4 whitespace-nowrap text-[17px] font-black tracking-tight sm:text-[19px]">
              <Sparkles size={18} className="text-cream/80" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
