import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { steps } from "@/content/landing";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Así de simple"
          body="Sin llamadas de diez minutos ni buscar el número del motorizado. Pides, sigues al rider en el mapa y pagas al recibir."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const last = i === steps.length - 1;
            return (
              <StaggerItem key={step.title}>
                <article className="group flex h-full flex-col gap-5 rounded-3xl bg-cream p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-2xl text-cream",
                        last ? "bg-morro" : "bg-mandao",
                      )}
                    >
                      <Icon size={22} />
                    </span>
                    <span className="text-[13px] font-black text-ink-muted">0{i + 1}</span>
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
      </Container>
    </section>
  );
}
