export default function SplitSection({ children }) {
  return (
    <section className="md:grid md:grid-cols-2  md:h-[80vh]">
      {children}
    </section>
  );
}
