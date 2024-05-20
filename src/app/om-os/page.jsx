import AboutCarousel from "@/components/aboutCarousel";

export default function omOs() {
  return (
    <>
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
          <div className="py-12">
            <AboutCarousel type="employee" />
          </div>
        </div>
      </section>
      <AboutCarousel type="advisory" />
    </>
  );
}
