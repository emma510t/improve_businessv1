import CasesSection from "@/components/casesSection";
import TestimonialSlider from "@/components/testimonialSlider";
import { Button } from "@/components/ui/button";
import { H1, H2 } from "@/components/ui/headings";
export default function Home() {
  return (
    <>
      <section
        className="h-[60vh] md:h-[75vh] bg-cover bg-center bg-herooverlay relative"
        style={{
          backgroundImage: `url(/img/forside-hero.jpeg)`,
        }}
      >
        <div className="h-full w-full bg-herooverlay">
          <div className="max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto pt-16 md:pt-32">
            <H1 className="text-ibsilver-100 max-w-[900px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
              Bæredygtig fremgang gennem innovativ udvikling
            </H1>
            <p className="text-ibsilver-100 text-[20px] md:text-[24px] lg:text-[26px] max-w-[585px] mt-4">
              Fremtidssikrede strategier og løsninger for dig og din virksomhed
            </p>
            <Button
              className="mt-16 md:px-[30px] md:py-[12px]"
              size="lg"
              hasArrow
            >
              Kontakt os
            </Button>
          </div>
        </div>
        <Button
          hasChevron
          size="xlIcon"
          className="left-1/2 transform -translate-x-1/2 rounded-full absolute -bottom-7 bg-ibsilver-100 border-2  border-ibsilver-500 hover:bg-ibsilver-100"
        />
      </section>
      <section>
        <div>
          <H2>Konsulentområder</H2>
          <p>
            Vi hjælper SMV’er med at udvikle og implementere processer,
            strategier og kommunikation, med bæredygtighed i centrum. Vores
            arbejde er målrettet og effektivt med det formål at opnå de bedste
            resultater for din virksomhed.
          </p>
        </div>
      </section>
      <section>
        <TestimonialSlider />
      </section>
      <section className="bg-ibsilver-200 w-screen">
        <CasesSection />
      </section>
    </>
  );
}
