function H1({ children }) {
  return <h1 className="font-bold text-[50px]">{children}</h1>;
}

function H2({ children, className }) {
  return <h2 className={`font-bold text-[36px] ${className}`}>{children}</h2>;
}

function H3({ children }) {
  return <h3 className="font-bold text-[36px]">{children}</h3>;
}

export { H1, H2, H3 };
