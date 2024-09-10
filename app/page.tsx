import Image from "next/image";
import { FaLinkedin, FaSquareDribbble, FaSquareGithub } from "react-icons/fa6";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <section className="lg:w-2/3 w-4/5 flex flex-col items-center justify-center gap-3">
        <Image
          src={"./personal_logo_white.svg"}
          alt="Picture of the author"
          width={75}
          height={75}
          className="-ml-3"
        />

        <div className="pt-8 flex flex-col items-start justify-center gap-3 ">
          <p className="font-sans font-[200] text-[1.2rem] leading-relaxed tracking-wide max-w-[550px] min-w-300px">
            Hi, I am a passionate UI/UX Designer with a background in front-end
            development, specializing in creating user-centered products. With a
            strong foundation in both design and development, I bring a unique
            perspective to building intuitive and innovative products. <br />{" "}
            <br /> I'm passionate about so many things—web design and
            development, product design, UX research, illustration/logo design,
            branding and even dabbling in 3D work. It's a mix, but I love it
            all!
          </p>
          <div className="flex justify-between items-center w-full">
            <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
              <button className="flex gap-2 items-center justify-start px-4 py-2 rounded-lg bg-white text-[#222323] font-sans font-semibold tracking-tighter hover:bg-white/50 transition-all duration-300 ease-in-out">
                <AiOutlineMessage className="h-6 w-6" /> Message on Linkedin
              </button>
            </a>

            <div className="flex gap-1">
              <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
                <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all duration-100 ease-in hover:cursor-pointer" />
              </a>
              <a href="https://dribbble.com/Ruben-Spaan">
                <FaSquareDribbble className="h-8 w-8 hover:scale-110 transition-all duration-100 ease-in hover:cursor-pointer" />
              </a>
              <a href="https://github.com/Ruben-Spn">
                <FaSquareGithub className="h-8 w-8 hover:scale-110 transition-all duration-100 ease-in hover:cursor-pointer" />
              </a>
            </div>
          </div>

          {/* the place where everyone pretends they 'live
              for challenges' but secretly just want to survive their next Zoom
              meeting. */}
        </div>
      </section>
      <section className="lg:w-2/4 w-4/5  gap-3 flex flex-col pt-8 max-w-[1250px]">
        <h1 className="font-sans font-medium">My work</h1>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3">
          <article className="bg-white h-[300px] w-full rounded-[36px]"></article>
          <article className="bg-white h-[300px] w-full rounded-[36px]"></article>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-3">
          <article className="bg-white h-[600px] w-full rounded-[36px]"></article>
          <div className="flex flex-col gap-3 w-full">
            <article className="bg-white h-[300px] md:h-full w-full rounded-[36px]"></article>
            <article className="bg-white h-[300px] md:h-full w-full rounded-[36px]"></article>
          </div>
          <article className="bg-white h-[600px] w-full rounded-[36px]"></article>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-3">
          <article className="bg-white h-[300px] w-full rounded-[36px]"></article>
          <article className="bg-white h-[300px] w-full rounded-[36px]"></article>
        </div>
      </section>
    </div>
  );
}
