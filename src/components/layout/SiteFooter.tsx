import { cacheLife } from "next/cache";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site, whatsappLink } from "@/lib/site";

async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCurrentYear();
  return (
    <footer className="border-t border-line bg-cream">
      <Container className="flex flex-col gap-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo size="lg" />
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              {site.tagline} Delivery y mandados en {site.city}, {site.state}. Hecho aquí, para aquí.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-extrabold uppercase tracking-wider text-ink-muted">Mandaíto</span>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit text-[15px] font-bold text-ink hover:text-mandao">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-extrabold uppercase tracking-wider text-ink-muted">Contacto</span>
            <a
              href={whatsappLink("Hola Mandaíto, tengo una pregunta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[15px] font-bold text-morro hover:text-morro-dark"
            >
              Soporte por WhatsApp
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="w-fit text-[15px] font-bold text-ink hover:text-mandao">
              Instagram
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-fit text-[15px] font-bold text-ink hover:text-mandao">
              TikTok
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[13px] font-bold text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name} · {site.city}, {site.state} · {site.domain}
          </span>
          <span className="flex gap-4">
            <Link href="/terminos" className="hover:text-ink">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-ink">
              Privacidad
            </Link>
            <span>[RIF DE LA EMPRESA]</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
