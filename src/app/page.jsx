import { Button } from "@/components/ui/button";
import EmployeeCard from "@/components/ui/employeeCard";
import { ProductCard } from "@/components/ui/product-card";
import Image from "next/image";

export default async function Home() {
  const headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4eHNpbHlkY3lreHNnZnZmdnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MTIsImV4cCI6MjAxMjQyNzUxMn0.XhVtrw5oL-uS_xjTWDhjvePBXTWqN5qrevhCh9XjUSQ",
  };

  const res = await fetch("https://qxxsilydcykxsgfvfvvz.supabase.co/rest/v1/ib-product-cards", {
    method: "GET",
    headers: headersList,
  });

  const cards = await res.json();
  console.log(cards);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Forside</h1>
      <div className="flex gap-2">
        {cards.map((card) => {
          return <ProductCard key={card.url} heading={card.title} icon={card.icon}></ProductCard>;
        })}
      </div>
      <div className="flex gap-2">
        {cards.map((card) => {
          return <ProductCard key={card.url} variant="white" heading={card.title} desc={card.desc} icon={card.icon}></ProductCard>;
        })}
      </div>
      <div className="flex gap-2">
        {cards.map((card) => {
          return <ProductCard key={card.url} size="wide" heading={card.title} icon={card.icon}></ProductCard>;
        })}
      </div>
    </main>
  );
}
