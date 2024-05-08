import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import MenuItem from "./ui/menu-item";

function Header() {
  return (
    <header className="text-ibsilver-100 font-poppins">
      <nav className="flex justify-between bg-ibsilver-500 md:px-7 md:py-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="144" height="39"></Image>
        </Link>
        <MainNav></MainNav>
      </nav>
      <nav className="hidden flex justify-between flex-wrap gap-4 bg-ibsilver-600 px-10 py-11">
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
    </header>
  );
}

export default Header;
