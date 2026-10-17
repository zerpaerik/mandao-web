import { Container } from "@/components/ui/Container";

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <Container as="article" className="flex max-w-3xl flex-col gap-8 py-16 lg:py-24">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="rounded-2xl bg-sun/60 px-4 py-3 text-[14px] font-extrabold text-[#633806]">{intro}</p>
      </header>
      {sections.map((s) => (
        <section key={s.heading} className="flex flex-col gap-2">
          <h2 className="text-xl font-black">{s.heading}</h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">{s.body}</p>
        </section>
      ))}
    </Container>
  );
}
