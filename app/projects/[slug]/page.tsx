"use client";

import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import EmblaCarousel from "../../components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Page({ params }: { params: { slug: string } }) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <section className="lg:w-2/3 w-4/5 flex flex-col items-center justify-center gap-3">
        <a href="/">
          <Image
            src={"../personal_logo_white.svg"}
            alt="Picture of the author"
            width={75}
            height={75}
            className="-ml-3"
          />
        </a>
        <div className="pt-8 flex flex-col items-start justify-center gap-8 ">
          <div className="flex justify-center sm:justify-between items-center w-full gap-12">
            <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
              <button className=" gap-1 items-center justify-start px-4 py-2 rounded-lg bg-white text-[#222323] font-sans font-semibold tracking-tighter hover:bg-white/50 transition-all duration-300 ease-in-out hidden sm:flex">
                <AiOutlineMessage className="h-6 w-6" /> Contact me
              </button>
            </a>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"../icons/linkedin.svg"}
                    alt="Go to my Linkedin"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
              <a href="https://dribbble.com/Ruben-Spaan">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"../icons/dribbble.svg"}
                    alt="Go to my Dribbble"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
              <a href="https://github.com/Ruben-Spn">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"../icons/github.svg"}
                    alt="Go to my Github"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-2/4 w-4/5  gap-3 flex flex-col max-w-[1250px] pt-16 min-h-screen">
        <div className="w-full bg-red-400 h-96 rounded-[36px]"></div>
        <div>{params.slug}</div>
        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
    </div>
  );
}
