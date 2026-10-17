import type { Metadata } from "next";
import { Bike, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { riderBenefits } from "@/content/landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para riders",
  description: `Trabaja como rider de Mandao en ${site.city}: pedidos por la app, tope de efectivo para tu seguridad y pago semanal garantizado.`,
};

const requirements = [
  "Ser mayor de edad y vivir en San Juan de los Morros",
  "Moto o carro propio con carnet de circulación vigente",
  "Cédula y licencia al día",
  "Teléfono Android con datos",
  "Ganas de tratar bien a la gente",
] as const;

export default function RidersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Para riders"
        title={
          <>
            Tú llevas la ciudad.
            <br />
            Nosotros te respaldamos.
          </>
        }
        body="Trabajas con nuestro operador aliado en San Juan: chaleco y bolso Mandao, pedidos por la app con la ruta y el cobro claros, y tu semana pagada cada lunes."
        aside={
          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-morro p-7 text-cream">
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-morro-soft">Lo que necesitas</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[15px] font-bold">
                    <CheckCircle2 size={20} className="mt-0.5 flex-none text-morro-soft" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        }
      />

      <section className="bg-sand py-16 lg:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="Cómo es trabajar con Mandao" />
          <BenefitsGrid items={riderBenefits} icon={Bike} tone="morro" />
        </Container>
      </section>

      <section id="registro" className="scroll-mt-24 py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Registro"
            title="Anótate para la primera flota"
            body="Nuestro operador aliado te contacta por WhatsApp, revisa tus documentos y te entrega el chaleco con tu código de rider."
          />
          <Reveal delay={0.1}>
            <LeadForm kind="rider" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
