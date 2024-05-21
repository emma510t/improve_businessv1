import FormSetup from "@/components/formSetup";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import PageTag from "@/components/ui/pageTag";
import Image from "next/image";

export default function kontakt() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild img className="order-last">
          <Image
            src="/img/contact-hero.webp"
            alt="Improve Business' kontorbygning"
            width={1920}
            height={1080}
            className=" md:w-full md:h-full max-h-[380px] object-cover md:max-h-none"
          />
        </SplitSectionChild>
        <SplitSectionChild>
          <PageTag>Kontakt</PageTag>
          <h1 className="font-bold text-ibsilver-600 text-[36px]">
            Tag kontakt
          </h1>
          <p className="mt-2 mb-4">
            Vi er klar til at hjælpe jer. Udfyld formularen og vi vender tilbage
            snarest!
          </p>
          <FormSetup />
        </SplitSectionChild>
      </SplitSection>
      <div class="bg-ibsilver-600 text-ibsilver-100 mt-8  md:mt-0">
        <div class="max-w-[1280px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto pt-8 pb-16">
          <h2 className="font-bold text-[32px] sm:text-[36px]">
            Kontaktinformation
          </h2>
          <a
            href="tel:+4530141614"
            class="font-bold font-poppins text-[18px] w-fit	"
          >
            +45 30 14 16 14
          </a>
          <a
            href="mailto:kontakt@improvebusiness.dk"
            class="font-bold font-poppins text-[18px] w-fit	"
          >
            kontakt@improvebusiness.dk
          </a>
        </div>
      </div>

      <section className="mt-8 ">
        <div className="min-[850px]:flex min-[850px]:gap-12 lg:gap-24 max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto  md:py-8">
          <div>
            <h2 className="text-[32px] font-bold sm:text-[36px] md:text[46px] mb-8">
              Consulting
            </h2>
            <div className="flex gap-6">
              <div className="min-w-[120px]">
                <Image
                  className="bg-ibgreen-400 object-cover aspect-square px-2 bg-gradient-to-t from-darkoverlay via-transparent via-transparent to-transparent"
                  src="/img/employees/anne.webp"
                  width={125}
                  height={125}
                  alt="billede af Anne"
                />
              </div>
              <div>
                <p>
                  Anne Hørsted er vores CEO og ekspert på Sustainability. Hun er
                  klar til at hjælpe dig, når kundekravene rammer din
                  virkelighed.
                </p>
                <a
                  href="mailto:anne@improvebusiness.dk"
                  className="flex gap-1 items-center text-ibgreen-400 hover:text-ibgreen-200 mt-2"
                >
                  <Image
                    src="/img/svg-icons/email.svg"
                    width={24}
                    height={24}
                    alt="email ikon"
                  />
                  anne@improvebusiness.dk
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 min-[850px]:mt-0">
            <h2 className="text-[32px] font-bold sm:text-[36px] md:text[46px] mb-8">
              Academy
            </h2>
            <div className="flex gap-6">
              <div className="min-w-[120px]">
                <Image
                  className="bg-ibgreen-400 object-cover aspect-square px-2 bg-gradient-to-t from-darkoverlay via-transparent via-transparent to-transparent"
                  src="/img/employees/thea.webp"
                  width={125}
                  height={125}
                  alt="billede af Thea"
                />
              </div>
              <div>
                <p>
                  Thea Eriksen er underviser og projektleder på vores Academy
                  forløb og er klar til at hjælpe dig med at forløse dit
                  potentiale.
                </p>
                <a
                  href="mailto:thea@improvebusiness.dk"
                  className="flex gap-1 items-center text-ibgreen-400 hover:text-ibgreen-200 mt-2"
                >
                  <Image
                    src="/img/svg-icons/email.svg"
                    width={24}
                    height={24}
                    alt="email ikon"
                  />
                  thea@improvebusiness.dk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
