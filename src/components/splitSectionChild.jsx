export default function SplitSectionChild({ type, children, className, img }) {
  return (
    <div
      className={
        (img
          ? " h-full w-full max-h-[80vh] "
          : "pb-8 md:pb-12 pt-[25px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 ") +
        `${className}`
      }
    >
      {children}
    </div>
  );
}
