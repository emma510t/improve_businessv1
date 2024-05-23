"use client";
import ProductCardSection from "@/components/productCardSection";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import YdelseSection from "@/components/ydelseSection";
import { supabase } from "@/lib/supabaseclient";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [slugData, setSlugData] = useState({});

  useEffect(() => {
    async function getSlugData() {
      const { data } = await supabase
        .from("ib-product-cards")
        .select("*")
        .eq("url", params.slug);
      setSlugData(data[0]);
    }

    getSlugData();
  }, [params.slug]);

  return (
    <>
      <SplitSection>
        <SplitSectionChild img>
          <Image
            src={`/img/${slugData.icon}.jpg`}
            alt={slugData.title}
            width={800}
            height={800}
            className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none"
          />
        </SplitSectionChild>
        <SplitSectionChild className="bg-ibsilver-500 text-ibsilver-100">
          <PageTagBreadcrumb
            parent={"Consulting"}
            parentHRef={"/consulting"}
            currentPage={params.slug}
          />
          <H1>{slugData.title}</H1>
          <P>{slugData.content}</P>
        </SplitSectionChild>
      </SplitSection>
      <section>
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="">
            Vores <span className="lowercase">{slugData.title}</span>sydelser
          </H2>
          <ProductCardSection parentCategory={slugData.icon} />
        </div>
      </section>
      <YdelseSection parent={slugData.icon} />
    </>
  );
}
