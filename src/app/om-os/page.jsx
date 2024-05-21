import AboutCarousel from "@/components/aboutCarousel";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import PageTag from "@/components/ui/pageTag";
import Image from "next/image";

export default function omOs() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild img className="order-last ">
          <Image
            src="/img/om-os-hero.webp"
            alt="To personer taler ved bord"
            width={1920}
            height={1080}
            className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none"
          />
        </SplitSectionChild>
        <SplitSectionChild>
          <PageTag>Om os</PageTag>
          <h1 className="font-bold text-ibsilver-600 text-[36px]">
            Vores vision
          </h1>
          <p className="mt-2 mb-4">
            Hos Improve Business arbejder vi for at skabe en mere bæredygtig og
            effektiv fremtid for dig og din virksomhed. I tæt samarbejde med jer
            identificerer vi og løser de udfordringer, der står i vejen for
            jeres succes.
            <br /> <br /> Fra strategisk rådgivning til hands-on implementering
            af bæredygtige initiativer, er vores fokus altid på at skabe reelle,
            målbare resultater.
            <br />
            <br />
            Vi tilpasser os til jeres behov og visioner, og sammen skaber vi en
            vej fremad, der er både bæredygtig og profitabel.
          </p>
        </SplitSectionChild>
      </SplitSection>
      <section className="bg-ibsilver-600 text-ibsilver-100 py-16 w-screen relative left-1/2 right-1/2 mx-[-50vw]">
        <div className="max-w-[1280px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <div className="max-w-[475px]">
            <h2 className="font-bold text-[32px] sm:text-[36px]">
              Mød vores team
            </h2>
            <p className="mt-2">
              Vi er et professionelt team med en bred vifte af kompetencer og
              erfaringer. Med forståelse af branchens nuværende landskab er vi
              rustet til at hjælpe jer med at løse enhver udfordring.
            </p>
          </div>
          <div className="py-12 lg:py-16">
            <AboutCarousel type="employee" />
          </div>
        </div>
      </section>

      <section className=" text-ibsilver-600 py-16 w-screen relative left-1/2 right-1/2 mx-[-50vw]">
        <div className="max-w-[1280px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <div className="max-w-[475px]">
            <h2 className="font-bold text-[32px] sm:text-[36px]">
              Mød vores netværk
            </h2>
            <p className="mt-2">
              Men vi gør det ikke alene. Stærke partnerskaber og netværk er
              afgørende for os og vi er derfor stolte af at vi på kort tid har
              fået etableret et bredt netværk, stærkt adivisory board og
              partnerskaber både nationalt og internationalt.
            </p>
            <h3 className="font-bold text-2xl	text-ibsilver-600 mt-4">
              Advisory board
            </h3>
          </div>
          <div className="py-12 lg:py-16">
            <AboutCarousel type="advisory" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-2xl	text-ibsilver-600">
          Udvalgte partnerskaber
        </h3>
        <div className="flex flex-wrap gap-16 lg:gap-12 justify-center mt-8 md:mt-12 lg:mt-16">
          <Image
            src="/img/partners/ak_alliancen.svg"
            alt="arbejdskraft alliancen logo"
            width={300}
            height={100}
            className="max-w-[250px] max-h-[80px] object-contain lg:max-w-[200px]"
          />
          <Image
            src="/img/partners/eh-h.svg"
            alt="Erhvervshus Hovedstaden  logo"
            width={300}
            height={100}
            className="max-w-[250px] max-h-[80px] object-contain lg:max-w-[200px]"
          />
          <Image
            src="/img/partners/energysolutions.webp"
            alt="energysolutions logo"
            width={300}
            height={100}
            className="max-w-[250px] max-h-[80px] object-contain lg:max-w-[200px]"
          />
          <Image
            src="/img/partners/lokalvaekst.webp"
            alt="lokalvækst logo"
            width={300}
            height={100}
            className="max-w-[250px] max-h-[80px] object-contain lg:max-w-[200px]"
          />
          <Image
            src="/img/partners/optify.webp"
            alt="optify logo"
            width={300}
            height={100}
            className="max-w-[250px] max-h-[80px] object-contain lg:max-w-[200px]"
          />
        </div>
      </section>
    </>
  );
}
