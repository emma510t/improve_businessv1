"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseclient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCards from "./ui/testimonialCards";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  async function getTestimonials() {
    const { data } = await supabase.from("ib-testimonials").select("*");
    setTestimonials(data);
  }
  return (
    <>
      <Carousel
        className="mx-auto w-full xl:max-w-[1280px] px-2.5 md:px-3.5 lg:px-8"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              className="md:basis-1/1 lg:basis-1/2 pl-2 md:pl-4"
              key={testimonial.id}
            >
              <TestimonialCards
                name={testimonial.name}
                title={testimonial.title}
                img={testimonial.img}
                desc={testimonial.desc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </>
  );
}
