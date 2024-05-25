import ProductCardSection from "@/components/productCardSection";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import YdelseSection from "@/components/ydelseSection";
import { supabase } from "@/lib/supabaseclient";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", slug);

  if (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
    };
  }

  const product = data[0];

  return {
    title: product?.title || "Default Title",
  };
}

export default async function Page({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", params.slug);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const slugData = data[0];

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
            currentPage={slugData.title}
          />
          <H1>{slugData.title}</H1>
          {/* {paragraphs.map((paragraph, index) => (
            <P key={index}>{paragraph.text}</P>
          ))} */}
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
      <div className="snap-y snap-mandatory overflow-y-auto">
        {" "}
        <YdelseSection parent={slugData.icon} />
      </div>
      <section>
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="">Se vores andre ekspertiseområder</H2>
          <ProductCardSection
            slugIcon={slugData.icon}
            parentCategory={slugData.parent}
          />
        </div>
      </section>
    </>
  );
}
