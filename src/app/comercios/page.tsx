import type { Metadata } from "next";
import { Store } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { merchantBenefits } from "@/content/landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para comercios",
  description: `Vende a domicilio en ${site.city} sin comprar una moto. Mandao publica tu catálogo, trae los pedidos y te paga diario.`,
};

const terms = [
  ["Comisión del piloto", `${site.pilot.commissionPercent} % sobre productos vendidos`],
  ["Negocios pequeños", "Cuota fija de 20 USD al mes en vez de comisión"],
  ["Pago", "Diario si superas 10 pedidos al día; semanal si no"],
  ["Precios", "Los mismos del local. Sin sobreprecio en la app"],
  ["Permanencia", "Ninguna. Sales avisando con 7 días"],
] as const;

export default function MerchantsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Para comercios"
        title={
          <>
            Vende a domicilio
            <br />
            sin comprar una moto
          </>
        }
        body="Publicamos tu catálogo, te traemos los pedidos y un rider uniformado los recoge en tu puerta. Tú cocinas o despachas; Mandao hace el resto y te paga diario."
        aside={
          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-ink p-7 text-cream">
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-mandao-soft">Condiciones claras</h2>
              <dl className="mt-4 flex flex-col divide-y divide-cream/10">
                {terms.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <dt className="text-[14px] font-bold text-cream/70">{k}</dt>
                    <dd className="text-[15px] font-extrabold sm:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        }
      />

      <section className="bg-sand py-16 lg:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="Por qué vender por Mandao" />
          <BenefitsGrid items={merchantBenefits} icon={Store} />
        </Container>
      </section>

      <section id="registro" className="scroll-mt-24 py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Registro"
            title="Cuéntanos de tu negocio"
            body="Te visitamos, fotografiamos tus productos y cargamos tu catálogo. En menos de una semana estás vendiendo."
          />
          <Reveal delay={0.1}>
            <LeadForm kind="comercio" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
