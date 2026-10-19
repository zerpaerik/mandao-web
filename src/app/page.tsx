import { Categories } from "@/components/sections/Categories";
import { Coverage } from "@/components/sections/Coverage";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Merchants } from "@/components/sections/Merchants";
import { Partners } from "@/components/sections/Partners";
import { PromoMarquee } from "@/components/sections/PromoMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoMarquee />
      <HowItWorks />
      <Categories />
      <Merchants />
      <Partners />
      <Coverage />
      <Faq />
      <FinalCta />
    </>
  );
}
