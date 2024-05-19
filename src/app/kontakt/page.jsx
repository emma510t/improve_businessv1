import FormSetup from "@/components/formSetup";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import PageTag from "@/components/ui/pageTag";
import Image from "next/image";

export default function kontakt() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild type="img">
          <Image
            src="/img/contact-hero.webp"
            alt="Improve Business' kontorbygning"
            width={1920}
            height={1080}
          />
        </SplitSectionChild>
        <SplitSectionChild>
          <PageTag>Kontakt</PageTag>
          <h1 className="font-bold text-ibsilver-600 text-4xl">Tag kontakt</h1>
          <p className="mt-2 mb-4">
            Vi er klar til at hjælpe jer. Udfyld formularen og vi vender tilbage
            snarest!
          </p>
          <FormSetup />
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
