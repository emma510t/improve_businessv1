import React from "react";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H2 } from "@/components/ui/fonts";
import { supabase } from "@/lib/supabaseclient";

export async function generateMetadata({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", params.slug + "/" + params.id);

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

export default async function page({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", params.slug + "/" + params.id);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const idData = data[0];

  return (
    <>
      <SplitSection>
        <SplitSectionChild></SplitSectionChild>
        <SplitSectionChild>
          <PageTagBreadcrumb grandParent={"Consulting"} grandParentHRef={"/consulting"} parent={idData.parent} parentHRef={`/consulting/${params.slug}`} currentPage={idData.title} />
          <H2></H2>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
