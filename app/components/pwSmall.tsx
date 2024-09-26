import Image from "next/image";

interface ProjectWidgetProps {
  image: string;
  title?: string;
  link?: string;
  tags?: string[];
  dark?: boolean;
}

export default function ProjectWidgetSmall(props: ProjectWidgetProps) {
  return (
    <article
      className={` h-[300px] w-full md:h-full rounded-[36px] transition-all ease-in-out duration-300 bg-black overflow-hidden hover:cursor-pointer relative group hover:shadow-grungy`}
    >
      <Image
        src={`/${props.image}`}
        alt="Description of image"
        layout="fill"
        objectFit="cover"
        className={`transform transition-all ease-in-out duration-1000 w-full h-full hover:scale-105`}
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
      ;
    </article>
  );
}
