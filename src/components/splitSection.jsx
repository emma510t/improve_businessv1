export default function SplitSection({ children }) {
  return (
    <section className="w-screen relative left-1/2 right-1/2 mx-[-50vw]  md:grid md:grid-cols-2 md:gap-9 ">
      {children}
    </section>
  );
}
