import { Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/content/landing";
import { site } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden bg-morro pb-20 pt-28 text-cream lg:pb-28 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-morro-dark/60" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-mandao/15" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative flex justify-center lg:justify-start">
          <div className="relative w-[260px] sm:w-[300px]">
            <PhoneFrame src="/images/screens/pago.png" alt="Pantalla de pago: eliges efectivo, dices con cuánto pagas y ves tu vuelto" />
            <div className="absolute -right-6 top-[46%] flex items-center gap-2 rounded-2xl bg-cream px-4 py-3 text-ink shadow-float sm:-right-12">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-morro text-cream">
                <Check size={16} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[13px] font-black">Vuelto $5,50 listo</span>
                <span className="text-[11px] font-bold text-ink-soft">el rider lo lleva contado</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            tone="dark"
            eyebrow="Cómo funciona"
            title="Así de simple"
            body="Sin llamadas de diez minutos ni buscar el número del motorizado. Pides, sigues al rider en el mapa y pagas al recibir."
          />
          <Stagger className="flex flex-col gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <article className="flex items-start gap-4 rounded-2xl bg-cream/[0.08] p-4 transition-colors duration-300 hover:bg-cream/[0.14]">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-cream text-morro">
                      <Icon size={20} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[17px] font-black">
                        <span className="mr-2 text-cream/50">0{i + 1}</span>
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-cream/80">{step.body}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
          <Reveal>
            <Button href={site.app.android} variant="secondary" size="lg" className="w-fit">
              <Smartphone size={20} /> Descargar para Android
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
