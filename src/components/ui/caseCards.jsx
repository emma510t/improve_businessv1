import Image from "next/image";
import Link from "next/link";

export default function CaseCards({ title, intro, img }) {
  return (
    <article className="flex flex-col gap-4 max-w-[380px]">
      <Link href="">
        <Image
          src={`/img/cases/${img}.webp`}
          alt={title}
          loading="lazy"
          width={380}
          height={180}
          className="aspect-[19/9] object-cover"
        />
        <div>
          <h4 className="text-[26px] font-semibold font-poppins text-ibsilver-600">
            {title}
          </h4>
          <p>{intro}</p>
        </div>
      </Link>
    </article>
  );
}
