"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseclient";
import CaseCards from "./ui/caseCards";

export default function CasesSection() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases();
  }, []);

  async function getCases() {
    const { data } = await supabase.from("ib-cases").select("*");
    setCases(data);
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-10 min-[850px]:gap-5 lg:gap-6 mx-3.5 py-8">
      {cases.map((caseData) => (
        <CaseCards
          key={caseData.id}
          title={caseData.h1}
          intro={caseData.intro}
          img={caseData.slug}
          slug={caseData.slug}
        />
      ))}
    </div>
  );
}
