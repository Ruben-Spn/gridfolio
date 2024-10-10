import { urlFor } from "@/sanity/imageBuilder";
import Image from "next/image";
import Link from "next/link";

export interface ProjectWidgetProps {
  image: string;
  slug?: string;
  tags?: string[];
  dark?: boolean;
}

export default function ProjectWidgetRegular(props: ProjectWidgetProps) {
  return (
    <Link href={`/projects/${props.slug}`}>
      <article
        className={` w-full h-[300px] md:w-full rounded-[36px] transition-all ease-in-out duration-300 bg-black relative overflow-hidden group hover:cursor-pointer hover:shadow-grungy`}
      >
        <Image
          src={urlFor(props.image).url()}
          alt="Description of image"
          height={300}
          width={600}
          className={`transform transition-all object-cover ease-in-out duration-1000 w-full h-full hover:scale-105`}
        />
        <div className="absolute -bottom-8 group-hover:bottom-4 group-hover:opacity-100 px-4 flex gap-3 transition-all duration-500 ease-in-out opacity-0 select-none">
          {props.tags?.map((tag: string, index: number) => (
            <div
              className={`bg-[#222323]/10 backdrop-blur-md ${props.dark ? `text-white` : "text-[#222323]"}  rounded-full px-3 py-1 py font-[600] text-[0.9em] antialiased font-sans `}
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </article>
    </Link>
  );
}
