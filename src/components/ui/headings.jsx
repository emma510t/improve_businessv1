function H1({ children, className }) {
  return <h1 className={`font-bold text-[36px] lg:text-[50px] ${className}`}>{children}</h1>;
}

function H2({ children, className }) {
  return <h2 className={`font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text[46px] ${className}`}>{children}</h2>;
}

function H3({ children, className }) {
  return <h3 className={`font-bold text-[24px] md:text-[36px] ${className}`}>{children}</h3>;
}

export { H1, H2, H3 };
