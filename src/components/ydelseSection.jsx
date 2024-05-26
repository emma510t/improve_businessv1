import SplitSection from "./splitSection";
import SplitSectionChild from "./splitSectionChild";
import { supabase } from "@/lib/supabaseclient";

import { H2, P } from "./ui/fonts";
import Icon from "./ui/icon";

export default async function YdelseSection({ parent }) {
  const { data, error } = await supabase.from("ib-product-cards").select("*").eq("parent", parent);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const slugChildrenData = data;

  return (
    <>
      <SplitSection>
        <SplitSectionChild className="bg-ibsilver-500 text-ibsilver-100">
          {slugChildrenData.map((child) => (
            <div key={child.icon} className="md:min-h-[calc(100vh-79px)]">
              <H2>{child.title}</H2>
              {child.content.map((content, index) => (
                <P key={index}>{content.text}</P>
              ))}
              <P>{slugChildrenData.content}</P>
            </div>
          ))}
        </SplitSectionChild>
        <SplitSectionChild img sticky className="bg-ibgreen-400 flex justify-center items-center">
          <div className="w-[150px] h-[150px] overflow-hidden relative">
            {slugChildrenData.map((child) => (
              <div key={child.icon} className="absolute">
                <div className="relative">
                  <Icon large iconVersion={child.icon} />
                </div>
              </div>
            ))}
          </div>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
