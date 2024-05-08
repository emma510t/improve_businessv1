import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Forside</h1>
      <Button hasArrow="true">Kontakt os</Button>
      <Button hasArrow="true" variant="ghost">
        Læs mere
      </Button>
    </main>
  );
}
