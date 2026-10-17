import { MessageCircle, Smartphone } from "lucide-react";
import { Morros } from "@/components/illustrations/Morros";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="descargar" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-mandao px-8 py-16 text-cream lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-90">
              <Morros tone="green" />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-6 lg:max-w-2xl">
              <h2 className="text-balance text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-[60px]">
                Tu primer mandao va con envío a ${site.pilot.deliveryFeeUsd}
              </h2>
              <p className="text-pretty text-[18px] leading-relaxed text-cream/90">
                Descarga la app o escríbenos por WhatsApp y pide hoy. Si algo sale mal, hablas con una persona de San
                Juan, no con un robot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={site.app.android} variant="dark" size="lg">
                  <Smartphone size={20} /> Descargar para Android
                </Button>
                <Button href={whatsappLink("Hola Mandao, quiero hacer mi primer pedido.")} variant="secondary" size="lg">
                  <MessageCircle size={20} /> Pedir por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
