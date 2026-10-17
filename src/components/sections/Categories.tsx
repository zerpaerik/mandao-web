import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { categories, type Category } from "@/content/landing";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const tones: Record<Category["tone"], { card: string; icon: string; text: string }> = {
  mandao: { card: "bg-mandao-soft", icon: "bg-mandao text-cream", text: "text-[#712B13]" },
  morro: { card: "bg-morro-soft", icon: "bg-morro text-cream", text: "text-morro-dark" },
  sun: { card: "bg-sun", icon: "bg-[#BA7517] text-cream", text: "text-[#633806]" },
  ink: { card: "bg-ink", icon: "bg-mandao text-cream", text: "text-cream" },
};

export function Categories() {
  return (
    <section id="categorias" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Qué pedir"
            title="Lo que puedes pedir hoy"
            body="Cuatro puertas, una sola app. Y si lo que necesitas no está en ninguna, lo escribes y lo hacemos."
          />
          <a
            href={whatsappLink("Hola Mandao, ¿qué comercios tienen disponibles hoy?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-[15px] font-extrabold text-morro hover:text-morro-dark"
          >
            Ver comercios disponibles <ArrowRight size={18} />
          </a>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const tone = tones[cat.tone];
            return (
              <StaggerItem key={cat.slug}>
                <a
                  href={site.app.android}
                  className={cn(
                    "group flex h-full min-h-[260px] flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5",
                    tone.card,
                  )}
                >
                  <span className={cn("grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110", tone.icon)}>
                    <Icon size={26} />
                  </span>
                  <div className={cn("flex flex-col gap-1.5", tone.text)}>
                    <h3 className="text-[24px] font-black">{cat.title}</h3>
                    <p className="text-[15px] font-bold leading-snug opacity-85">{cat.body}</p>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
