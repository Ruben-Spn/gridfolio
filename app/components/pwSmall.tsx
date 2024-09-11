import React, { useState } from "react";
import Image from "next/image";

interface ProjectWidgetProps {
  image: string;
  title?: string;
  link?: string;
}

export default function ProjectWidgetSmall(props: ProjectWidgetProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <article
      onMouseEnter={() => setIsHovering(!isHovering)}
      onMouseLeave={() => setIsHovering(!isHovering)}
      className={` h-[300px] md:h-full w-full rounded-[36px] transition-all ease-in-out duration-300 bg-black relative overflow-hidden ${
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
    </article>
  );
}
