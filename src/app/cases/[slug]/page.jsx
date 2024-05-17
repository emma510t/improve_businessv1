"use client";
import { supabase } from "@/lib/supabaseclient";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CasePage({ params }) {
  const [slugData, setSlugData] = useState({});

  useEffect(() => {
    async function getSlugData() {
      const { data } = await supabase
        .from("ib-cases")
        .select("*")
        .eq("slug", params.slug);
      setSlugData(data[0]);
    }

    getSlugData();
  }, [params.slug]);

  const statements = slugData.statements || [];

  console.log(statements);

  return (
    <>
      <h1 className="font-bold text-4xl text-ibsilver-600">{slugData.h1}</h1>

      <section className="bg-ibsilver-600 text-ibsilver-100 px-3 py-8">
        <h2 className="font-bold font-poppins text-[32px]">
          Situation og udfordringer
        </h2>
        <p>{slugData.situation_udfordringer}</p>
      </section>
      <section className="text-ibsilver-600 px-3 py-8">
        <h2 className="font-bold font-poppins text-[32px]">Løsning</h2>
        <p>Improve Business’ løsningsforslag er tredelt</p>
        <div className="flex flex-col gap-8 py-4">
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Fase 1: {slugData.fase_1_headline}
            </h3>
            <p>{slugData.fase_2_text}</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Fase 2: {slugData.fase_2_headline}
            </h3>
            <p>{slugData.fase_2_text}</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Fase 3: {slugData.fase_3_headline}
            </h3>
            <p>{slugData.fase_3_text}</p>
          </div>
        </div>
      </section>
      <section>
        <Carousel
          className="mx-auto w-full max-w-7xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {statements.map((statement) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
                key={statement.id}
              >
                <p>{statement.statement}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
