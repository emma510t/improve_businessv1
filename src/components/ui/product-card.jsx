import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("flex flex-col gap-5 min-h-48 p-5 lg:min-h-56", {
  variants: {
    variant: {
      default: "group bg-ibsilver-500 text-ibsilver-100 hover:bg-ibgreen-400 hover:text-ibsilver-500",
      white: "group bg-ibsilver-100 text-ibsilver-500 hover:bg-ibgreen-400",
    },
    size: {
      default: "w-48 lg:w-56",
      wide: "w-48 lg:w-72",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const ProductCard = React.forwardRef(({ className, desc, heading, icon, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  let hasDesc = desc ? true : false;
  return (
    <Comp className={cn(cardVariants({ variant, size, className }))} ref={ref} {...props}>
      <Image src="/icons/innovation-og-skalering.svg" alt="icon" width="52" height="52" className="[&>*]:fill-ibgreen-400" />
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-ibgreen-400 stroke-ibgreen-400 group-hover:fill-ibsilver-500 group-hover:stroke-ibgreen-400"
      >
        {icon}
      </svg>
      <h4 className="text-xl font-bold lg:text-2xl">{heading}</h4>
      {hasDesc && <p className="text-sm font-normal lg:text-base">{desc}</p>}
      <ArrowRight className="ml-auto mt-auto h-5 w-5 transition-transform transform translate-x-0 group-hover:translate-x-1" />
    </Comp>
  );
});
ProductCard.displayName = "Card";

export { ProductCard, cardVariants };
