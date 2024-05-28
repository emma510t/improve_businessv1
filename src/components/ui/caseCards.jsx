import Image from "next/image";
import Link from "next/link";

export default function CaseCards({ title, intro, img, slug }) {
  return (
    <article className="flex flex-col gap-4 max-w-[380px] group">
      <Link href={`/cases/${slug}`}>
        <Image src={`/img/cases/${img}.webp`} alt={title} loading="lazy" width={380} height={180} className="aspect-[19/9] object-cover bg-ibsilver-400" />
        <div>
          <h4 className="text-xl md:text-[26px]/[34px] font-semibold font-poppins text-ibsilver-600 group-hover:underline">{title}</h4>
          <p className="line-clamp-3 text-base md:text-lg">{intro}</p>
        </div>
      </Link>
    </article>
  );
}
