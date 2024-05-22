export default function SplitSection({ children }) {
  return <section className="md:grid md:grid-cols-2  md:h-[calc(100vh-79px)]">{children}</section>;
}
