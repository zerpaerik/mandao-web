import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  aside?: ReactNode;
}

/** Top block for secondary pages: heading on the left, optional card on the right. */
export function PageIntro({ eyebrow, title, body, aside }: PageIntroProps) {
  return (
    <section className="pb-12 pt-10 lg:pb-16 lg:pt-16">
      <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        {aside}
      </Container>
    </section>
  );
}
