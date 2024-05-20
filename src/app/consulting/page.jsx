import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";

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
      <SplitSection></SplitSection>
      <PageTagBreadcrumb currentPage={"Consulting"} />
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
