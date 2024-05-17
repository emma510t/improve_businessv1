import CasesSection from "@/components/casesSection";
import TestimonialSlider from "@/components/testimonialSlider";
export default function Home() {
  return (
    <>
      <h1>Forside</h1>

      <section>
        <TestimonialSlider />
      </section>
      <section className="bg-ibsilver-200 w-screen">
        <CasesSection />
      </section>
    </>
  );
}
