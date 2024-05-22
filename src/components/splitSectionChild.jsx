export default function SplitSectionChild({ type, children, className, img }) {
  return (
    <div
      className={
        (img
          ? " h-full w-full max-h-[calc(100vh-79px)] "
          : "pb-8 md:pb-12 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 md:overflow-y-auto ") +
        `${className}`
      }
    >
      {children}
    </div>
  );
}
