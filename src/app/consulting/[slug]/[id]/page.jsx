import React from "react";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";

export default function page({ params }) {
  return (
    <div>
      <PageTagBreadcrumb grandParent={"Consulting"} grandParentHRef={"/consulting"} parent={params.slug} parentHRef={`/consulting/${params.slug}`} currentPage={params.id} />
      <p>underpunkt {params.id}</p>
    </div>
  );
}
