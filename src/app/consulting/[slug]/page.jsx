import React from "react";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";

export default function page({ params }) {
  return (
    <div>
      <PageTagBreadcrumb parent={"Consulting"} parentHRef={"/consulting"} currentPage={params.slug} />
      <p>kommunikation {params.slug}</p>
    </div>
  );
}
