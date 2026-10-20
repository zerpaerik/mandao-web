import { ArrowRight, BadgePercent, Bike, Megaphone, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
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
    <li className="flex w-[272px] shrink-0 snap-start items-center gap-4 rounded-3xl border border-line bg-white p-4 shadow-card">
      <span
        className={cn("grid h-14 w-14 flex-none place-items-center rounded-2xl text-[16px] font-black", avatarTones[merchant.tone])}
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
          <span className="mt-1 w-fit rounded-lg bg-morro-soft px-2 py-0.5 text-[11px] font-black text-morro-dark">{merchant.badge}</span>
        ) : null}
      </div>
    </li>
  );
}

function SponsoredSpot() {
  return (
    <Reveal>
      <article className="relative grid overflow-hidden rounded-[32px] bg-white shadow-card lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-5 p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl bg-sand px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-wider text-ink-soft">
              <Megaphone size={14} /> {sponsoredSpot.label}
            </span>
            <span className="text-[14px] font-extrabold text-mandao">{sponsoredSpot.merchant}</span>
          </div>
          <h3 className="text-balance text-3xl font-black leading-[1.02] tracking-tight sm:text-[40px]">{sponsoredSpot.headline}</h3>
          <p className="max-w-lg text-pretty text-[16px] leading-relaxed text-ink-soft">{sponsoredSpot.body}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button href={site.app.android} size="lg">
              {sponsoredSpot.cta} <ArrowRight size={18} />
            </Button>
            <span className="text-[13px] font-bold text-ink-muted">{sponsoredSpot.validity}</span>
          </div>
        </div>
        <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-mandao p-8 text-cream">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cream/15" />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <BadgePercent size={36} aria-hidden="true" />
            <span className="text-[88px] font-black leading-none tracking-tighter sm:text-[112px]">2×1</span>
            <span className="rounded-xl bg-cream px-3 py-1.5 text-[13px] font-black text-mandao">solo los martes</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Merchants() {
  return (
    <section id="comercios-en-mandaito" className="scroll-mt-24 py-20 lg:py-28">
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
        <a
          href={whatsappLink("Hola Mandaíto, ¿qué comercios tienen disponibles hoy?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-[15px] font-extrabold text-morro hover:text-morro-dark"
        >
          Ver todos en la app <ArrowRight size={18} />
        </a>
      </Container>

      <Container className="mt-10">
        <ul
          aria-label="Comercios aliados"
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredMerchants.map((m) => (
            <MerchantCard key={m.name} merchant={m} />
          ))}
        </ul>
      </Container>

      {sponsoredSpot.enabled ? (
        <Container className="mt-10">
          <SponsoredSpot />
        </Container>
      ) : null}

      <Container className="mt-14">
        <Stagger className="grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <article className="flex h-full flex-col gap-4 rounded-[28px] bg-white p-7 shadow-card lg:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mandao text-cream">
                <Store size={22} />
              </span>
              <h3 className="text-balance text-2xl font-black leading-tight sm:text-[28px]">Vende a domicilio sin comprar una moto</h3>
              <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">
                Publicamos tu catálogo, te traemos los pedidos y te pagamos diario. Comisión del piloto:{" "}
                {site.pilot.commissionPercent} %, o cuota fija para negocios pequeños.
              </p>
              <Button href="/comercios" className="mt-auto w-fit">
                Registrar mi comercio <ArrowRight size={18} />
              </Button>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="flex h-full flex-col gap-4 rounded-[28px] bg-white p-7 shadow-card lg:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-morro text-cream">
                <Bike size={22} />
              </span>
              <h3 className="text-balance text-2xl font-black leading-tight sm:text-[28px]">Pedidos seguros y pago semanal garantizado</h3>
              <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">
                Trabajas con nuestro operador aliado: chaleco y bolso Mandaíto, pedidos por la app, tope de efectivo para tu
                seguridad y tu semana pagada cada lunes.
              </p>
              <Button href="/riders" variant="morro" className="mt-auto w-fit">
                Quiero ser rider <ArrowRight size={18} />
              </Button>
            </article>
          </StaggerItem>
        </Stagger>
        <p className="mt-6 text-center text-[13px] font-bold text-ink-muted">
          ¿Quieres destacar tu negocio aquí y en la app?{" "}
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
