import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface Benefit {
  title: string;
  body: string;
}

interface BenefitsGridProps {
  items: readonly Benefit[];
  icon: LucideIcon;
  tone?: "mandao" | "morro";
}

export function BenefitsGrid({ items, icon: Icon, tone = "mandao" }: BenefitsGridProps) {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2">
      {items.map((item, i) => (
        <StaggerItem key={item.title}>
          <article className="flex h-full gap-4 rounded-3xl bg-white p-6 shadow-card">
            <span
              className={cn(
                "grid h-11 w-11 flex-none place-items-center rounded-2xl text-cream",
                tone === "mandao" ? "bg-mandao" : "bg-morro",
              )}
            >
              <Icon size={20} />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[18px] font-black leading-tight">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
              <span className="sr-only">Beneficio {i + 1}</span>
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
