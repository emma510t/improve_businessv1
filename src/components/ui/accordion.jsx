"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, toggleDrawer, children, link, ...props }, ref) => {
    const handleTextClick = (e) => {
      if (link) {
        e.stopPropagation(); // Prevent triggering the accordion toggle
        window.location.href = link; // Redirect to the link if it's provided
        toggleDrawer();
      }
    };

    const handleChevronClick = (e) => {
      e.stopPropagation(); // Prevent triggering the text click
    };

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
            className
          )}
          {...props}
        >
          <div className="flex-1 text-left max-w-fit" onClick={handleTextClick}>
            {children}
          </div>
          <ChevronDown
            className="h-4 w-4 shrink-0 transition-transform duration-200 ml-2 cursor-pointer pointer-events-none	"
            onClick={handleChevronClick}
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
