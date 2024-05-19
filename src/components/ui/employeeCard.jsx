export default function EmployeeCard({ type, company, fullname, title, img }) {
  return (
    <article
      className={`${
        type === "advisory" ? "bg-ibblue-400" : "bg-ibgreen-400"
      }  max-h-[406px] aspect-[304/406] relative`}
    >
      <div
        className="absolute bg-contain bg-bottom bg-no-repeat	top-0 right-0 left-0 bottom-0"
        style={{
          backgroundImage: `url('/img/employees/${img}.webp')`,
        }}
      >
        <div className="font-inter w-full h-full flex flex-col justify-end py-3 px-5 bg-gradient-to-t from-darkoverlay via-transparent via-transparent to-transparent">
          <h4 className="font-bold text-ibsilver-100 text-xl">{fullname}</h4>
          <p className="text-ibsilver-100 font-medium text-lg opacity-75">
            {title}
          </p>
          {type === "advisory" ? (
            <p className="text-ibsilver-100 font-medium text-lg opacity-75">
              {company}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
