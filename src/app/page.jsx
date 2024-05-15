import CasesSection from "@/components/casesSection";
import { Button } from "@/components/ui/button";
import EmployeeCard from "@/components/ui/employeeCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Forside</h1>

      <section className="bg-ibsilver-200 w-screen">
        <CasesSection />
      </section>
    </main>
  );
}
