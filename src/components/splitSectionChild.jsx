export default function SplitSectionChild({ type, children, style }) {
  return (
    <div
      className={
        (type === "img"
          ? "w-screen relative left-1/2 right-1/2 mx-[-50vw] aspect-video md:aspect-auto "
          : "") +
        "md:w-full md:left-0 md:right-0 md:mx-0 " +
        `${style}` +
        (type !== "img" ? " pb-8 md:pb-12" : "")
      }
    >
      {children}
    </div>
  );
}
