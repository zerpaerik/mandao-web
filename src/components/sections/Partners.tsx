import { ArrowRight, Bike, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function Partners() {
  return (
    <section className="bg-ink py-20 text-cream lg:py-28">
      <Container className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col gap-6 rounded-[28px] bg-cream/[0.06] p-8 lg:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-mandao/20 px-3 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-mandao-soft">
              <Store size={16} /> Para comercios
            </span>
            <h2 className="text-balance text-3xl font-black leading-[1.05] sm:text-[36px]">
              Vende a domicilio sin comprar una moto
            </h2>
            <p className="text-pretty text-[16px] leading-relaxed text-cream/80">
              Publicamos tu catálogo, te traemos los pedidos y te pagamos diario. Tú cocinas o despachas; del resto se
              encarga Mandao. Comisión del piloto: {site.pilot.commissionPercent} %, o cuota fija para negocios pequeños.
            </p>
            <div className="mt-auto">
              <Button href="/comercios" variant="secondary" size="lg">
                Registrar mi comercio <ArrowRight size={18} />
              </Button>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="flex h-full flex-col gap-6 rounded-[28px] bg-cream/[0.06] p-8 lg:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-morro/30 px-3 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-morro-soft">
              <Bike size={16} /> Para riders
            </span>
            <h2 className="text-balance text-3xl font-black leading-[1.05] sm:text-[36px]">
              Pedidos seguros y pago semanal garantizado
            </h2>
            <p className="text-pretty text-[16px] leading-relaxed text-cream/80">
              Trabajas con nuestro operador aliado en San Juan: chaleco y bolso Mandao, pedidos por la app, tope de
              efectivo para tu seguridad y liquidación cada semana sin fallar.
            </p>
            <div className="mt-auto">
              <Button href="/riders" variant="morro" size="lg">
                Quiero ser rider <ArrowRight size={18} />
              </Button>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
