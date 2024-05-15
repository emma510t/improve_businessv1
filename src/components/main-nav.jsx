"use client";

import MenuItem from "./ui/menu-item";
import Link from "next/link";
import Image from "next/image";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

function MainNav({ menuItems }) {
  return (
    <>
      <NavigationMenu className="w-full flex justify-between bg-ibsilver-500 md:px-7 md:py-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="144" height="39"></Image>
        </Link>
        <NavigationMenuList className="flex flex-col my-auto text-4xl md:flex-row md:gap-7 md:text-lg">
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
                    const subMenuItems = menuItems.filter((subMenuItem) => subMenuItem.parent === menuItem.icon);
                    return (
                      <div key={menuItem.icon} className="flex flex-col gap-8">
                        <p className="font-poppins text-lg">
                          <MenuItem linkref={`/consulting/${menuItem.url}`}>{menuItem.title}</MenuItem>
                        </p>
                        <ul className="flex flex-col gap-4 text-sm">
                          {subMenuItems.map((subMenuItem) => (
                            <li key={subMenuItem.icon}>
                              <MenuItem linkref={`/consulting/${subMenuItem.url}`}>{subMenuItem.title}</MenuItem>
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
      </NavigationMenu>
    </>
  );
}

export default MainNav;
