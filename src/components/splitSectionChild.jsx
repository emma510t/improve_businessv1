export default function SplitSectionChild({ type, children, className, img }) {
  return (
    <div className={(img ? "w-screen relative left-1/2 right-1/2 mx-[-50vw] aspect-video md:aspect-auto " : "pb-8 md:pb-12 pt-[25px] ") + "md:w-full md:left-0 md:right-0 md:mx-0 " + `${className}`}>
      {children}
    </div>
  );
}
