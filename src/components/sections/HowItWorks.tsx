import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { steps } from "@/content/landing";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden bg-morro pb-20 pt-28 text-cream lg:pb-28 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-morro-dark/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-mandao/15"
      />

      <Container className="relative flex flex-col gap-12">
        <SectionHeading
          tone="dark"
          eyebrow="Cómo funciona"
          title="Así de simple"
          body="Sin llamadas de diez minutos ni buscar el número del motorizado. Pides, sigues al rider en el mapa y pagas al recibir."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden border-t-2 border-dashed border-cream/30 lg:block"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const last = i === steps.length - 1;
              return (
                <StaggerItem key={step.title}>
                  <article className="group relative flex h-full flex-col gap-5 rounded-3xl bg-cream p-6 text-ink shadow-float transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "grid h-12 w-12 place-items-center rounded-2xl text-cream transition-transform duration-300 group-hover:scale-110",
                          last ? "bg-morro" : "bg-mandao",
                        )}
                      >
                        <Icon size={22} />
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-line text-[13px] font-black text-ink-soft">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[19px] font-black">{step.title}</h3>
                      <p className="text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
