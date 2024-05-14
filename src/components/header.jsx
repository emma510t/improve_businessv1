import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import MenuItem from "./ui/menu-item";

function Header() {
  return (
    <header className="text-ibsilver-100 font-poppins sticky top-0 z-10">
      <MainNav />
    </header>
  );
}

export default Header;
