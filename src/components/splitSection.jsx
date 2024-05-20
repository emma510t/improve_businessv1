export default function SplitSection({ children }) {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-9 md:relative">
      {children}
    </section>
  );
}
