import Image from "next/image";
import Link from "next/link";

export default function CaseCards({ title, intro, img, slug }) {
  return (
    <article className="flex flex-col gap-4 max-w-[380px] group">
      <Link href={`/cases/${slug}`}>
        <Image
          src={`/img/cases/${img}.webp`}
          alt={title}
          loading="lazy"
          width={380}
          height={180}
          className="aspect-[19/9] object-cover"
        />
        <div>
          <h4 className="text-[26px] font-semibold font-poppins text-ibsilver-600 group-hover:underline">
            {title}
          </h4>
          <p className="line-clamp-3 text-lg">{intro}</p>
        </div>
      </Link>
    </article>
  );
}
