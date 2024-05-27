"use client";

import MenuItem from "./ui/menu-item";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MainNav({ menuItems }) {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setOpenAccordions([]);
    setIsOpen((prevState) => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDrawer();
    }
  };

  // const handleLinkClick = (e) => {
  //   toggleDrawer();
  //   setOpenAccordions([]);
  //   console.log("Handlelink kørt", openAccordions);
  // };

  useEffect(() => {
    if (isOpen) {
      // Prevent vertical scrolling when the drawer is open
      document.body.style.overflowY = "hidden";
    } else {
      // Re-enable vertical scrolling when the drawer is closed
      document.body.style.overflowY = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <NavigationMenu className="w-full flex justify-between bg-ibsilver-500 px-5 py-3 md:px-7 md:py-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="144" height="39" />
        </Link>
        <NavigationMenuList className="hidden my-auto text-4xl md:flex md:flex-row md:gap-7 md:text-lg">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuItem linkref="/consulting">Consulting</MenuItem>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <nav className="flex flex-wrap justify-between gap-4 bg-ibsilver-600 text-ibsilver-100 px-10 py-11 w-full">
                {menuItems
                  .filter((menuItem) => menuItem.parent === "consulting")
                  .sort((a, b) => a.id - b.id)
                  .map((menuItem) => {
                    const subMenuItems = menuItems.filter(
                      (subMenuItem) => subMenuItem.parent === menuItem.icon
                    );
                    return (
                      <div key={menuItem.icon} className="flex flex-col gap-8">
                        <p className="font-poppins text-lg">
                          <MenuItem linkref={`/consulting/${menuItem.url}`}>
                            {menuItem.title}
                          </MenuItem>
                        </p>
                        <ul className="flex flex-col gap-4 text-sm">
                          {subMenuItems.map((subMenuItem) => (
                            <li key={subMenuItem.icon}>
                              <MenuItem
                                linkref={`/consulting/${subMenuItem.url}`}
                              >
                                {subMenuItem.title}
                              </MenuItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </nav>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem linkref="/academy">Academy</MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem linkref="/om-os">Om os</MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem linkref="/kontakt">Kontakt</MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex self-center md:hidden">
          <svg
            onKeyDown={handleKeyDown}
            tabIndex={0}
            onClick={toggleDrawer}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
          >
            <g filter="url(#filter0_d_93_211)">
              <path
                d="M2 2H31"
                stroke="#C8C8C8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 13H31"
                stroke="#C8C8C8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 24H31"
                stroke="#C8C8C8"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{ width: "100vw", height: "100%", overflow: "auto" }}
          >
            <div className="flex flex-col min-h-[100vh] bg-ibsilver-500 text-ibsilver-100">
              <div className="flex m-6 justify-end">
                <svg
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  onClick={toggleDrawer}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M2.5 26L26.5 2"
                    stroke="#C8C8C8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2L26 26"
                    stroke="#C8C8C8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col mt-12">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="consulting" className="border-none">
                    <AccordionTrigger
                      link="/consulting"
                      toggleDrawer={toggleDrawer}
                      setOpenAccordions={setOpenAccordions}
                      className="p-4 border-t-2 border-b border-ibsilver-400 text-2xl font-semibold"
                    >
                      Consulting
                    </AccordionTrigger>
                    <AccordionContent className="p-0 bg-ibsilver-600">
                      <ul className="flex flex-col text-sm">
                        {menuItems
                          .filter(
                            (menuItem) => menuItem.parent === "consulting"
                          )
                          .sort((a, b) => a.id - b.id)
                          .map((menuItem) => (
                            <AccordionItem
                              key={menuItem.icon}
                              value={menuItem.icon}
                              className="border-b-0 border-t border-ibsilver-400 p-4"
                            >
                              <AccordionTrigger
                                link={`/consulting/${menuItem.url}`}
                                toggleDrawer={toggleDrawer}
                                setOpenAccordions={setOpenAccordions}
                                className="p-2 text-lg"
                              >
                                {menuItem.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="flex flex-col text-sm">
                                  {menuItems
                                    .filter(
                                      (subItem) =>
                                        subItem.parent === menuItem.icon
                                    )
                                    .sort((a, b) => a.id - b.id)
                                    .map((subItem) => (
                                      <li key={subItem.icon}>
                                        <Link
                                          onClick={toggleDrawer}
                                          href={`/consulting/${subItem.url}`}
                                          className="px-4 py-3 text-base"
                                        >
                                          {subItem.title}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/academy"
                    className="p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold"
                  >
                    Academy
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/om-os"
                    className="p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold"
                  >
                    Om os
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/kontakt"
                    className="p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </NavigationMenu>
    </>
  );
}

export default MainNav;
