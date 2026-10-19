import { ArrowRight, BadgePercent, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredMerchants, sponsoredSpot, type Merchant } from "@/content/landing";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const avatarTones: Record<Merchant["tone"], string> = {
  mandao: "bg-mandao text-cream",
  morro: "bg-morro text-cream",
  sun: "bg-sun text-[#633806]",
  ink: "bg-ink text-cream",
  coral: "bg-mandao-soft text-[#712B13]",
};

function MerchantCard({ merchant }: { merchant: Merchant }) {
  return (
    <li className="flex w-[280px] shrink-0 items-center gap-4 rounded-3xl border border-line bg-white p-4 shadow-card">
      <span
        className={cn(
          "grid h-14 w-14 flex-none place-items-center rounded-2xl text-[16px] font-black",
          avatarTones[merchant.tone],
        )}
        aria-hidden="true"
      >
        {merchant.initials}
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-[16px] font-black">{merchant.name}</span>
        <span className="truncate text-[13px] font-bold text-ink-soft">
          {merchant.category} · {merchant.zone}
        </span>
        {merchant.badge ? (
          <span className="mt-1 w-fit rounded-lg bg-morro-soft px-2 py-0.5 text-[11px] font-black text-morro-dark">
            {merchant.badge}
          </span>
        ) : null}
      </div>
    </li>
  );
}

export function Merchants() {
  const loop = [...featuredMerchants, ...featuredMerchants];
  return (
    <section id="comercios-en-mandaito" className="scroll-mt-24 overflow-hidden bg-sand py-20 lg:py-28">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Comercios aliados"
          title={
            <>
              Ya están en Manda<span className="text-mandao">í</span>to
            </>
          }
          body="Negocios de San Juan que ya venden a domicilio con nosotros. La lista crece cada semana."
        />
        <Button href="/comercios" variant="dark">
          Quiero aparecer aquí <ArrowRight size={18} />
        </Button>
      </Container>

      <div className="group mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max shrink-0 animate-marquee-slow gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {loop.map((m, i) => (
            <MerchantCard key={`${m.name}-${i}`} merchant={m} />
          ))}
        </ul>
      </div>

      <Container className="mt-14">
        <Reveal>
          <article className="relative grid overflow-hidden rounded-[32px] bg-ink text-cream shadow-float lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col gap-5 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-xl bg-cream/10 px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-wider text-cream/80">
                  <Megaphone size={14} /> {sponsoredSpot.label}
                </span>
                <span className="text-[14px] font-extrabold text-mandao-soft">{sponsoredSpot.merchant}</span>
              </div>
              <h3 className="text-balance text-3xl font-black leading-[1.02] tracking-tight sm:text-[44px]">
                {sponsoredSpot.headline}
              </h3>
              <p className="max-w-lg text-pretty text-[16px] leading-relaxed text-cream/80">{sponsoredSpot.body}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <Button href={site.app.android} size="lg">
                  {sponsoredSpot.cta} <ArrowRight size={18} />
                </Button>
                <span className="text-[13px] font-bold text-cream/60">{sponsoredSpot.validity}</span>
              </div>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-mandao p-8">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cream/15" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-morro/40" />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <BadgePercent size={40} className="text-cream/90" aria-hidden="true" />
                <span className="text-[96px] font-black leading-none tracking-tighter sm:text-[128px]">2×1</span>
                <span className="rounded-xl bg-cream px-3 py-1.5 text-[13px] font-black text-mandao">solo los martes</span>
              </div>
              <span className="absolute bottom-4 right-5 text-[11px] font-extrabold text-cream/70">[FOTO DEL PRODUCTO]</span>
            </div>
          </article>
        </Reveal>

        <p className="mt-5 text-center text-[14px] font-bold text-ink-soft">
          ¿Quieres este espacio para tu negocio? Desde [PRECIO] USD por semana.{" "}
          <a
            href={whatsappLink("Hola Mandaíto, quiero anunciar mi negocio en la app y la web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-morro hover:text-morro-dark"
          >
            Escríbenos
          </a>
        </p>
      </Container>
    </section>
  );
}
