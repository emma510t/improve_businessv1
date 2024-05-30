"use client";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabaseclient";
import EmployeeCard from "./ui/employeeCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutCarousel({ type }) {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const autoplayPlugin = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("ib-medarbejdere")
        .select("*")
        .eq("type", type);

      if (error || !data || data.length === 0) {
        console.error("Error fetching data:", error);
        return;
      }

      setFilteredEmployees(data);

      // Initialize Autoplay plugin after data is fetched
      autoplayPlugin.current = Autoplay({
        delay: 4000,
      });
    }

    fetchData();
  }, [type]);

  // Render nothing if Autoplay plugin is not initialized yet
  if (!autoplayPlugin.current) {
    return null;
  }

  return (
    <>
      <Carousel
        className="relative mx-auto xl:max-w-[1280px] px-2.5 md:px-3.5 lg:px-8"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {filteredEmployees.map((employee) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
              key={employee.id}
            >
              <EmployeeCard
                fullname={employee.fullname}
                title={employee.title}
                company={employee.company}
                type={employee.type}
                img={employee.img}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-10px] min-[500px]:left-0" />
        <CarouselNext className="right-[-10px] min-[500px]:right-0" />
      </Carousel>
    </>
  );
}
