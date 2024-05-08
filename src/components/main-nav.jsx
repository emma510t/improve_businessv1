import MenuItem from "./ui/menu-item";

function MainNav() {
  return (
    <ul className="flex flex-col my-auto text-4xl md:flex-row md:gap-7 md:text-lg">
      <li>
        <MenuItem linkref="/consulting">Consulting</MenuItem>
      </li>
      <li>
        <MenuItem linkref="/academy">Academy</MenuItem>
      </li>
      <li>
        <MenuItem linkref="/om-os">Om os</MenuItem>
      </li>
      <li>
        <MenuItem linkref="/kontakt">Kontakt</MenuItem>
      </li>
    </ul>
  );
}

export default MainNav;
