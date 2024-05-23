"use client";
import { supabase } from "@/lib/supabaseclient";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { H1, H2, P } from "@/components/ui/fonts";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import ProductCardSection from "@/components/productCardSection";
import CaseStatementCard from "@/components/ui/caseStatementCard";

export default function CasePage({ params }) {
  const [slugData, setSlugData] = useState({});

  useEffect(() => {
    async function getSlugData() {
      const { data } = await supabase.from("ib-cases").select("*").eq("slug", params.slug);
      setSlugData(data[0]);
    }

    getSlugData();
  }, [params.slug]);

  const statements = slugData.statements || [];

  console.log(statements);

  return (
    <>
      <div className="bg-ibsilver-600 pb-8 md:pb-16 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <PageTagBreadcrumb currentPage="Case Study" dark />
        <H1 className="text-ibsilver-100">{slugData.h1}</H1>
      </div>

      <section className="md:flex md:min-h-[50vh]">
        <SplitSectionChild className={"pb-0"}>
          <H2 className="font-bold font-poppins text-[32px]">Situation og udfordringer</H2>
        </SplitSectionChild>
        <SplitSectionChild className={"pt-0"}>
          <P>{slugData.situation_udfordringer}</P>
        </SplitSectionChild>
      </section>
      <SplitSection>
        <SplitSectionChild sticky className={"pb-2 bg-ibsilver-500 text-ibsilver-100 md:bg-ibgreen-400 md:text-ibsilver-600 lg:flex lg:flex-col lg:justify-center"}>
          <H2 className="lg:text-8xl">Løsning</H2>
          <p className="text-base md:text-3xl">Improve Business’ løsningsforslag er tredelt</p>
        </SplitSectionChild>
        <SplitSectionChild className={"pt-0 bg-ibsilver-500 text-ibsilver-100"}>
          <div className="flex flex-col gap-8 py-4 md:gap-12">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 1: </span>
                {slugData.fase_1_headline}
              </h3>
              <P>{slugData.fase_1_text}</P>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 2: </span>
                {slugData.fase_2_headline}
              </h3>
              <P>{slugData.fase_2_text}</P>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 3: </span>
                {slugData.fase_3_headline}
              </h3>
              <P>{slugData.fase_3_text}</P>
            </div>
          </div>
        </SplitSectionChild>
      </SplitSection>
      <section className="px-3 py-8 flex flex-col md:flex-row">
        {statements.map((statement) => (
          <CaseStatementCard key={statement.id} desc={statement.statement} title={slugData.h1} />
        ))}
      </section>

      <section className="bg-ibsilver-600">
        <div className="pb-8 md:pb-24 pt-[25px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="text-ibsilver-100">Se vores konsulentområder</H2>
          <ProductCardSection cardVariant="white" parentCategory="consulting" />
        </div>
      </section>
    </>
  );
}
