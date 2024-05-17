import Image from "next/image";

export default function TestimonialCards({ desc, name, title, img }) {
  return (
    <article className="p-6 m-4 flex relative">
      <span className="text-ibgreen-400 text-[47px] lg:text-[49px] font-poppins absolute top-0 left-0">
        “{" "}
      </span>
      <div className="flex flex-col gap-4">
        <p className="line-clamp-6 text-xl lg:text-[22px]">{desc}</p>
        <div className="flex gap-3.5">
          <Image
            src={`/img/testimonials/${img}.webp`}
            alt={img}
            width={70}
            height={70}
            className="rounded-full object-cover aspect-square"
          />
          <div>
            <h4 className="font-medium text-xl text-ibsilver-400">{name}</h4>
            <p className="text-ibsilver-400">{title}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
