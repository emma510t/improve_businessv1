import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import Image from "next/image";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import { Button, buttonVariants } from "@/components/ui/button";
import ProductCardSection from "@/components/productCardSection";

export default function consulting() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild img className="order-last">
          <Image src="/img/consulting-hero.webp" alt="To personer taler ved bord" width={1920} height={1080} className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none" />
        </SplitSectionChild>
        <SplitSectionChild className={"bg-ibsilver-200"}>
          <PageTagBreadcrumb currentPage={"Consulting"} />
          <H1>Sammen løser vi dine udfordringer</H1>
          <P className="mt-2 mb-4">Vi hjælper med at udvikle og implementere en effektiv strategi, hvor vi identificerer jeres udfordringer, og sikrer en bæredygtig og fremadseende løsning.</P>
          <P className="mt-2 mb-4">
            Vores ekspertområder dækker alt fra udviklingsfasen af nye ideer og strategier, samt det værdiskabende kommunikative arbejde, som følger en ny implementeret strategi.
          </P>
          {/*    <Button
            onClick={() => {
              console.log("hej");
            }}
            hasChevron
          >
            Se vores ekspertområder
          </Button> */}
        </SplitSectionChild>
      </SplitSection>
      <SplitSection>
        <SplitSectionChild className={"md:bg-ibgreen-400 md:flex md:flex-col md:justify-between px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10"}>
          <H2>Sådan kommer du i gang</H2>
          <Button className="hidden md:flex md:mr-auto" variant="ghost" size="noPadding" hasArrow>
            Kontakt os
          </Button>
        </SplitSectionChild>
        <SplitSectionChild className={"flex flex-col gap-8 md:pt-11"}>
          <P>Udforsk vores forskellige ydelser nedenfor og find det, der bedst matcher dine behov.</P>
          <P>Klik på ydelsen for at læse mere om hvad vi kan gøre for dig indenfor området.</P>
          <P>Skriv til os via vores kontaktformular for at aftale, hvordan vi bedst løser dine udfordringer.</P>
          <P>VI glæder os til at høre fra dig!</P>
          <Button className="mr-auto md:hidden" variant="ghost" size="noPadding" hasArrow>
            Kontakt os
          </Button>
        </SplitSectionChild>
      </SplitSection>
      <section className="bg-ibsilver-500">
        <div className="pb-8 md:pb-24 pt-[25px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className={"text-ibsilver-100"}>Vores ekspertområder</H2>
          <ProductCardSection parentCategory="consulting" cardVariant="white" desc></ProductCardSection>
        </div>
      </section>
      <SplitSection>
        <SplitSectionChild img>
          <Image src="/img/consulting-potentiale.jpg" alt="To personer taler ved bord" width={1920} height={1080} className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none" />
        </SplitSectionChild>
        <SplitSectionChild>
          <H2>Opnå højere potentiale</H2>
          <P className="mt-2 mb-4">Vores mål er at optimere din virksomheds potentiale gennem skræddersyet rådgivning baseret på høje faglige standarder og et solidt etisk fundament.</P>
          <P className="mt-2 mb-4">
            Sammen med vores erfarne konsulenter identificerer vi nøgleområder inden for bæredygtighed og udvikler gradvise løsninger til at forbedre din virksomheds præstationer og resultater.
          </P>
          <Button hasArrow>Kontakt os</Button>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
