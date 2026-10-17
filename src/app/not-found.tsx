import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-24 lg:py-32">
      <span className="text-[13px] font-extrabold uppercase tracking-wider text-ink-muted">Error 404</span>
      <h1 className="text-balance text-4xl font-black tracking-tight sm:text-6xl">
        Ese mandao no existe.
        <br />
        Pero sí el camino de vuelta.
      </h1>
      <Button href="/" size="lg">
        Ir al inicio
      </Button>
    </Container>
  );
}
