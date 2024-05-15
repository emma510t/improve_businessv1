import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import MenuItem from "./ui/menu-item";

async function Header() {
  const headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4eHNpbHlkY3lreHNnZnZmdnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MTIsImV4cCI6MjAxMjQyNzUxMn0.XhVtrw5oL-uS_xjTWDhjvePBXTWqN5qrevhCh9XjUSQ",
  };

  const res = await fetch("https://qxxsilydcykxsgfvfvvz.supabase.co/rest/v1/ib-product-cards", {
    method: "GET",
    headers: headersList,
  });

  const menuItems = await res.json();

  return (
    <header className="text-ibsilver-100 font-poppins sticky top-0 z-10">
      <MainNav menuItems={menuItems} />
    </header>
  );
}

export default Header;
