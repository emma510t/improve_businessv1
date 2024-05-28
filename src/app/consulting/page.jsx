import { ProductCard } from "@/components/ui/product-card";
import Image from "next/image";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import { Button, buttonVariants } from "@/components/ui/button";
import ProductCardSection from "@/components/productCardSection";
import Link from "next/link";

export const metadata = {
  title: "Consulting",
};

export default function consulting() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild img className="order-last">
          <Image
            src="/img/consulting-hero.webp"
            alt="To personer taler ved bord"
            width={1920}
            height={1080}
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400"
          />
        </SplitSectionChild>
        <SplitSectionChild className={"bg-ibsilver-200 flex flex-col"}>
          <PageTagBreadcrumb currentPage={"Consulting"} />
          <H1>Sammen løser vi dine udfordringer</H1>
          <P>
            Vi hjælper med at udvikle og implementere en effektiv strategi, hvor
            vi identificerer jeres udfordringer, og sikrer en bæredygtig og
            fremadseende løsning.
          </P>
          <P>
            Vores ekspertområder dækker alt fra udviklingsfasen af nye ideer og
            strategier, samt det værdiskabende kommunikative arbejde, som følger
            en ny implementeret strategi.
          </P>
          <Link className="pt-7 mt-auto" href="#ekspertOmråder">
            <Button hasChevron>Se vores ekspertområder</Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
      <SplitSection>
        <SplitSectionChild
          sticky
          className={
            "max-md:pb-0 md:bg-ibgreen-400 md:flex md:flex-col md:justify-between px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10"
          }
        >
          <H2>Sådan kommer du i gang</H2>
          <Link className="hidden md:block md:mr-auto" href="/kontakt">
            <Button variant="ghost" size="noPadding" hasArrow>
              Kontakt os
            </Button>
          </Link>
        </SplitSectionChild>
        <SplitSectionChild
          className={"max-md:pt-0 flex flex-col gap-8 md:pt-11"}
        >
          <P>
            Udforsk vores forskellige ydelser nedenfor og find det, der bedst
            matcher dine behov.
          </P>
          <P>
            Klik på ydelsen for at læse mere om hvad vi kan gøre for dig
            indenfor området.
          </P>
          <P>
            Skriv til os via vores kontaktformular for at aftale, hvordan vi
            bedst løser dine udfordringer.
          </P>
          <P>VI glæder os til at høre fra dig!</P>
          <Link className="md:hidden" href="/kontakt">
            <Button
              className="mr-auto"
              variant="ghost"
              size="noPadding"
              hasArrow
            >
              Kontakt os
            </Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
      <section id="ekspertOmråder" className="bg-ibsilver-500 scroll-m-[79px]">
        <div className="pb-8 md:pb-24 pt-[25px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className={"text-ibsilver-100"}>Vores ekspertområder</H2>
          <ProductCardSection
            parentCategory="consulting"
            cardVariant="white"
            desc
          ></ProductCardSection>
        </div>
      </section>
      <SplitSection>
        <SplitSectionChild img>
          <Image
            src="/img/consulting-potentiale.webp"
            alt="To personer taler ved bord"
            width={1920}
            height={1080}
            className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none bg-ibsilver-400"
          />
        </SplitSectionChild>
        <SplitSectionChild className="flex flex-col">
          <H2>Opnå højere potentiale</H2>
          <P>
            Vores mål er at optimere din virksomheds potentiale gennem
            skræddersyet rådgivning baseret på høje faglige standarder og et
            solidt etisk fundament.
          </P>
          <P>
            Sammen med vores erfarne konsulenter identificerer vi nøgleområder
            inden for bæredygtighed og udvikler gradvise løsninger til at
            forbedre din virksomheds præstationer og resultater.
          </P>
          <Link className="pt-7 mt-auto w-fit h-fit" href="/kontakt">
            <Button variant="ghost" hasArrow>
              Kontakt os
            </Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
