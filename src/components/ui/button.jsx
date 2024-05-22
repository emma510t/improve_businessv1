"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { useAmp } from "next/amp";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ibgreen-400 text-ibsilver-500 hover:bg-ibgreen-200 group",
        ghost: "bg-transparent group hover:text-ibgreen-200",
        "ghost-white": "bg-transparent text-ibsilver-100 hover:text-ibgreen-200 group",
      },
      size: {
        default: "text-xl h-10 px-[20px] py-[8px] ",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 px-8 text-[26px]",
        icon: "h-10 w-10",
        noPadding: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ children, className, variant, size, hasArrow = false, hasChevron = false, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {children}
      {hasArrow && <ArrowRight className="h-4 w-4 transition-transform transform translate-x-0 group-hover:translate-x-1" />}
      {hasChevron && <ChevronDown className="h-4 w-4" />}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
