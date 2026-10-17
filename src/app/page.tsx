import { Categories } from "@/components/sections/Categories";
import { Coverage } from "@/components/sections/Coverage";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Partners } from "@/components/sections/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <Partners />
      <Coverage />
      <Faq />
      <FinalCta />
    </>
  );
}
