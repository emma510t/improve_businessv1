export default function SplitSectionChild({ type, children }) {
  return (
    <div
      className={
        type === "img" ? "w-screen relative left-1/2 right-1/2 mx-[-50vw]" : ""
      }
    >
      {children}
    </div>
  );
}
