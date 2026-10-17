import Image from "next/image";
import { MapPin } from "lucide-react";
import { Morros } from "@/components/illustrations/Morros";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coverageZones } from "@/content/landing";
import { site } from "@/lib/site";

export function Coverage() {
  return (
    <section id="cobertura" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Zona de cobertura"
            title={
              <>
                Hecho en San Juan,
                <br />
                para San Juan
              </>
            }
            body="Arrancamos en la ciudad: centro, urbanizaciones y avenidas principales. Cada rider conoce las calles porque vive aquí. Vamos ampliando a medida que sumamos motos."
          />
          <Stagger className="grid grid-cols-2 gap-3">
            {coverageZones.map((zone) => (
              <StaggerItem key={zone}>
                <span className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-[15px] font-extrabold text-ink shadow-card">
                  <MapPin size={18} className="text-mandao" /> {zone}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="text-[14px] font-bold text-ink-muted">
            ¿Tu zona no está? Escríbenos y te avisamos cuando lleguemos.
          </p>
        </div>

        <Reveal delay={0.1}>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-[#cfe3f5] shadow-float">
            {site.images.morrosPhoto ? (
              <Image
                src={site.images.morrosPhoto}
                alt={`Los Morros de ${site.city}`}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-[#bcd9f2] to-[#eef5fb]" />
                <div className="absolute right-10 top-10 h-16 w-16 rounded-full bg-mandao" />
                <div className="absolute inset-x-0 bottom-0 h-[62%]">
                  <Morros />
                </div>
                <span className="absolute left-5 top-5 rounded-xl bg-ink/70 px-3 py-1.5 text-[12px] font-extrabold text-cream">
                  Foto de Los Morros: pendiente
                </span>
              </>
            )}
            <figcaption className="absolute bottom-5 left-5 rounded-2xl bg-cream/95 px-4 py-3 text-[14px] font-extrabold text-ink shadow-card">
              Los Morros · {site.city}, {site.state}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
