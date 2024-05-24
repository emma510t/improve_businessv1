import React from "react";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H2 } from "@/components/ui/fonts";

export default function page({ params }) {
  return (
    <>
      <SplitSection>
        <SplitSectionChild></SplitSectionChild>
        <SplitSectionChild>
          <PageTagBreadcrumb
            grandParent={"Consulting"}
            grandParentHRef={"/consulting"}
            parent={params.slug}
            parentHRef={`/consulting/${params.slug}`}
            currentPage={params.id}
          />
          <H2></H2>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
