import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2 } from "@/components/ui/headings";

export default async function consulting() {
  const headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4eHNpbHlkY3lreHNnZnZmdnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MTIsImV4cCI6MjAxMjQyNzUxMn0.XhVtrw5oL-uS_xjTWDhjvePBXTWqN5qrevhCh9XjUSQ",
  };

  const res = await fetch("https://qxxsilydcykxsgfvfvvz.supabase.co/rest/v1/ib-product-cards", {
    method: "GET",
    headers: headersList,
  });

  const cards = await res.json();

  return (
    <>
      <SplitSection>
        <SplitSectionChild style={"bg-ibsilver-200"}>
          <PageTagBreadcrumb currentPage={"Consulting"} />
          <H1>Sammen løser vi dine udfordringer</H1>
          <p className="mt-2 mb-4">Vi hjælper med at udvikle og implementere en effektiv strategi, hvor vi identificerer jeres udfordringer, og sikrer en bæredygtig og fremadseende løsning.</p>
          <p className="mt-2 mb-4">
            Vores ekspertområder dækker alt fra udviklingsfasen af nye ideer og strategier, samt det værdiskabende kommunikative arbejde, som følger en ny implementeret strategi.
          </p>
        </SplitSectionChild>
        <SplitSectionChild type="img"></SplitSectionChild>
      </SplitSection>
      <SplitSection>
        <SplitSectionChild style={"bg-ibgreen-400"}>
          <PageTagBreadcrumb currentPage={"Consulting"} />
          <H2>Sådan kommer du i gang</H2>
        </SplitSectionChild>
        <SplitSectionChild>
          <p>Udforsk vores forskellige ydelser nedenfor og find det, der bedst matcher dine behov.</p>
          <p>Klik på ydelsen for at læse mere om hvad vi kan gøre for dig indenfor området.</p>
          <p>Skriv til os via vores kontaktformular for at aftale, hvordan vi bedst løser dine udfordringer.</p>
          <p>VI glæder os til at høre fra dig!</p>
        </SplitSectionChild>
      </SplitSection>
      <section className="bg-ibsilver-500">
        <H2 className={"text-ibsilver-100"}>Vores ekspertområder</H2>
      </section>
      <h1>Consulting</h1>
      <div className="flex gap-2 flex-wrap">
        {cards
          .sort((a, b) => a.id - b.id)
          .map((card) => {
            return <ProductCard key={card.url} heading={card.title} icon={card.icon} url={card.url}></ProductCard>;
          })}
      </div>
    </>
  );
}
