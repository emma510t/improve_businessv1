import SplitSection from "./splitSection";
import SplitSectionChild from "./splitSectionChild";
import { supabase } from "@/lib/supabaseclient";
import { useState, useEffect } from "react";
import { H2, P } from "./ui/fonts";
import Image from "next/image";
import Icon from "./ui/icon";

export default function YdelseSection({ parent }) {
  const [slugChildrenData, setSlugChildrenData] = useState([]);

  useEffect(() => {
    async function getSlugChildrenData() {
      const { data } = await supabase
        .from("ib-product-cards")
        .select("*")
        .eq("parent", parent);
      setSlugChildrenData(data);
    }

    getSlugChildrenData();
  }, [parent]);

  return (
    <>
      {slugChildrenData.map((child) => {
        return (
          <SplitSection key={child.icon}>
            <SplitSectionChild>
              <H2>{child.title}</H2>
              <P>{child.content}</P>
            </SplitSectionChild>
            <SplitSectionChild img>
              <Icon iconVersion={child.icon} />
            </SplitSectionChild>
          </SplitSection>
        );
      })}
    </>
  );
}
