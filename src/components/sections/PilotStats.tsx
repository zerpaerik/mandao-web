import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { pilotStats } from "@/content/landing";

/** Row of real pilot figures. Renders nothing until `pilotStats.enabled` is true. */
export function PilotStats() {
  if (!pilotStats.enabled) return null;
  return (
    <section aria-label="Cifras del piloto" className="py-14">
      <Container>
        <Reveal>
          <dl className="grid gap-4 rounded-[28px] bg-white p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {pilotStats.items.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-line lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                <dd className="text-[40px] font-black leading-none">
                  <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="text-[14px] font-bold text-ink-soft">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-center text-[12px] font-bold text-ink-muted">{pilotStats.updatedLabel}</p>
        </Reveal>
      </Container>
    </section>
  );
}
