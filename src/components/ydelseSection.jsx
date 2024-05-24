"use client";
import SplitSection from "./splitSection";
import SplitSectionChild from "./splitSectionChild";
import { supabase } from "@/lib/supabaseclient";
import { useState, useEffect } from "react";
import { H2, P } from "./ui/fonts";
import Icon from "./ui/icon";

export default function YdelseSection({ parent }) {
  const [slugChildrenData, setSlugChildrenData] = useState([]);

  useEffect(() => {
    async function getSlugChildrenData() {
      const { data } = await supabase.from("ib-product-cards").select("*").eq("parent", parent);
      setSlugChildrenData(data);
    }

    getSlugChildrenData();
  }, [parent]);

  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-[calc(100vh-79px)]">
      {slugChildrenData.map((child) => (
        <div key={child.icon} className="snap-start h-[calc(100vh-79px)] flex-shrink-0">
          <SplitSection>
            <SplitSectionChild className="bg-ibsilver-500 text-ibsilver-100">
              <H2>{child.title}</H2>
              <P>{child.content}</P>
            </SplitSectionChild>
            <SplitSectionChild img className="bg-ibgreen-400 content-center">
              <Icon large iconVersion={child.icon} />
            </SplitSectionChild>
          </SplitSection>
        </div>
      ))}
    </div>
  );
}
