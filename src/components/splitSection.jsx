export default function SplitSection({ children }) {
  return <section className="md:grid md:grid-cols-2 md:relative md:min-h-[80vh]">{children}</section>;
}
