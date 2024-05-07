import Image from "next/image";

function Header() {
  return (
    <header className="bg-blue-400">
      <Image src="/logo.svg" alt="logo" width="144" height="39"></Image>
    </header>
  );
}

export default Header;
