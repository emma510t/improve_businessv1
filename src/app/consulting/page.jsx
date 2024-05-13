import { ProductCard } from "@/components/ui/product-card";

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
  console.log(cards);

  return (
    <>
      <h1>consulting</h1>
      <div className="flex gap-2 flex-wrap">
        {cards.map((card) => {
          return <ProductCard key={card.url} heading={card.title} icon={card.icon} url={card.url}></ProductCard>;
        })}
      </div>
    </>
  );
}
