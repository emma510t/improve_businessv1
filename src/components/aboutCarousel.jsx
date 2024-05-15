"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseclient";
import EmployeeCard from "./ui/employeeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutCarousel({ type }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const { data } = await supabase.from("ib-medarbejdere").select("*");
    setEmployees(data);
  }

  // Filter employees based on the type prop
  const filteredEmployees = employees.filter(
    (employee) => employee.type === type
  );

  return (
    <>
      <Carousel
        className="mx-auto w-full max-w-7xl"
        opts={{
          align: "start",
          loop: true,
        }}
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
