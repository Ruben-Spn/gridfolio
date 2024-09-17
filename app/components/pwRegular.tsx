import React, { useState } from "react";
import Image from "next/image";

interface ProjectWidgetProps {
  image: string;
  title?: string;
  link?: string;
  tags?: string[];
}

export default function ProjectWidgetRegular(props: ProjectWidgetProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <article
      onClick={() => (props.link ? (window.location.href = props.link) : "")}
      onMouseEnter={() => setIsHovering(!isHovering)}
      onMouseLeave={() => setIsHovering(!isHovering)}
      className={` h-[300px] w-full rounded-[36px] transition-all ease-in-out duration-300 bg-black relative overflow-hidden group ${
        isHovering ? "cursor-pointer shadow-grungy  " : ""
      }`}
    >
      <Image
        src={`/${props.image}`}
        alt="Description of image"
        layout="fill"
        objectFit="cover"
        className={`transform transition-all ease-in-out duration-1000 w-full h-full ${
          isHovering ? "scale-105" : "scale-100"
        }`}
      />
      <div className="absolute -bottom-8 group-hover:bottom-4 group-hover:opacity-100 px-4 text-black flex gap-3 transition-all duration-500 ease-in-out opacity-0 select-none">
        {props.tags?.map((tag: string, index: number) => (
          <div
            className="bg-[#222323]/10 backdrop-blur-md text-[#222323] rounded-full px-3 py-1 py font-[600] text-[0.9em] antialiased font-sans "
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
}
