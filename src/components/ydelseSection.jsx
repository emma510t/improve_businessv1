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
    <div>
      <SplitSection>
        <SplitSectionChild className="bg-ibsilver-500 text-ibsilver-100">
          {slugChildrenData.map((child) => (
            <div key={child.icon}>
              <H2>{child.title}</H2>
              {child.content.map((content, index) => (
                <P key={index}>{content.text}</P>
              ))}
              <P>{slugChildrenData.content}</P>
            </div>
          ))}
        </SplitSectionChild>
        <SplitSectionChild img className="bg-ibgreen-400 content-center">
          {/*   <Icon large iconVersion={child.icon} /> */}
        </SplitSectionChild>
      </SplitSection>
    </div>
  );
}
