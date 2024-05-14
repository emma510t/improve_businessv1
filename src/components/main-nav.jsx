"use client";

import MenuItem from "./ui/menu-item";
import Link from "next/link";
import Image from "next/image";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

function MainNav() {
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
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Innovation og Skalering</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">ISO9001 + ISO14001</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Iværksætteri og skalering</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Nytænking af rekruttering</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Forandringsledelse</MenuItem>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Forretningsudvikling</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">Baseline og ressourcer</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Markedsindsigt</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Strategi</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Involvering af interresenter</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Værdikæde og livscyklus</MenuItem>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Forandring</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">Ledelse af bæredygtighed</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Vision og målsætning</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Kulturforandring</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Kompetenceudvikling</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Bestyrrelsesuddannelse</MenuItem>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Dokumentation</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">ESG</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">CSRD</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">CO2-beregning</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Code of Conduct</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Certificering</MenuItem>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Kommunikation</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">Gennemsigtighed</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Undgå Greenwashing</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Storytelling</MenuItem>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-poppins text-lg">
                    <MenuItem linkref="/">Innovation og Skalering</MenuItem>
                  </p>
                  <ul className="flex flex-col gap-4 text-sm">
                    <li>
                      <MenuItem linkref="/">ISO9001 + ISO14001</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Iværksætteri og skalering</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Nytænking af rekruttering</MenuItem>
                    </li>
                    <li>
                      <MenuItem linkref="/">Forandringsledelse</MenuItem>
                    </li>
                  </ul>
                </div>
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
