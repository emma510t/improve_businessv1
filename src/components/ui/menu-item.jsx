import Link from "next/link";

function MenuItem({ children, linkref }) {
  return (
    <Link className="md:hover:border-b md:hover:border-ibsilver-100 md:hover:border-solid md:ease-in md:duration-150" href={linkref}>
      {children}
    </Link>
  );
}

export default MenuItem;
