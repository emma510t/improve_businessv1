import AboutCarousel from "@/components/aboutCarousel";
import Loading from "@/components/loading/loading";
import { Suspense } from "react";

export default function omOs() {
  return (
    <Suspense fallback={<Loading />}>
      <h1>Om os</h1>
      <AboutCarousel type="employee" />
      <AboutCarousel type="advisory" />
    </Suspense>
  );
}
