import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import ProjectWidgetSmall from "./components/pwSmall";
import ProjectWidgetRegular from "./components/pwRegular";
import ProjectWidgetLarge from "./components/pwLarge";
import { Project } from "@/sanity/types/Projects";
import { getProjectCovers } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects: Project[] = await getProjectCovers();
  const getProjectBySlug = (slug: string) => {
    return projects.find((e) => e.slug === slug);
  };

  const ahoy = getProjectBySlug("ahoy");
  const everloop = getProjectBySlug("everloop");
  const M = getProjectBySlug("m");
  const teamleader = getProjectBySlug("teamleader");
  const teamleaderIntegrations = getProjectBySlug("teamleader-integrations");
  const calandra = getProjectBySlug("calandra");
  const blueprint = getProjectBySlug("blueprint");

  console.log(blueprint);

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <section className="lg:w-2/3 w-4/5 flex flex-col items-center justify-center gap-3">
        <a href="/">
          <Image
            src={"./personal_logo_white.svg"}
            alt="Picture of the author"
            width={75}
            height={75}
            className="-ml-3"
          />
        </a>
        <div className="pt-8 flex flex-col items-start justify-center gap-8 ">
          <p className="font-sans font-[200] text-[1.2rem] leading-relaxed tracking-wide max-w-[550px] min-w-300px">
            Hi, I am a passionate UI/UX Designer with a background in front-end
            development, specializing in creating user-centered products. With a
            strong foundation in both design and development, I bring a unique
            perspective to building intuitive and innovative products. <br />{" "}
            <br /> I&apos;m passionate about so many things—web design and
            development, product design, UX research, illustration/logo design,
            branding and even dabbling in 3D work. It&apos;s a mix, but I love
            it all!
          </p>
          <div className="flex justify-center sm:justify-between items-center w-full">
            <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
              <button className=" gap-1 items-center justify-start px-4 py-2 rounded-lg bg-white text-[#222323] font-sans font-semibold tracking-tighter hover:bg-white/50 transition-all duration-300 ease-in-out hidden sm:flex">
                <AiOutlineMessage className="h-6 w-6" /> Contact me
              </button>
            </a>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/ruben-spaan-b266481bb/">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"./icons/linkedin.svg"}
                    alt="Go to my Linkedin"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
              <a href="https://dribbble.com/Ruben-Spaan">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"./icons/dribbble.svg"}
                    alt="Go to my Dribbble"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
              <a href="https://github.com/Ruben-Spn">
                <div className="rounded-full bg-[#f7f9f9] w-10 h-10 flex items-center justify-center hover:bg-white/50 transition-all duration-300 ease-in-out">
                  <Image
                    src={"./icons/github.svg"}
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
      <section className="w-4/5  lg:w-[1012px]   gap-3 flex flex-col pt-8 max-w-[1250px]">
        <h1 className="font-sans font-medium">My work</h1>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3">
          <ProjectWidgetRegular
            image={ahoy?.coverImageUrl}
            tags={ahoy?.tags}
            slug={ahoy?.slug}
          />
          <ProjectWidgetRegular
            image={everloop?.coverImageUrl}
            tags={everloop?.tags}
            slug={everloop?.slug}
            dark={true}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-3 justify-evenly ">
          <ProjectWidgetLarge
            image={calandra?.coverImageUrl}
            tags={calandra?.tags}
            slug={calandra?.slug}
          />
          <div className="flex flex-col gap-3 w-full">
            <ProjectWidgetSmall
              image={M?.coverImageUrl}
              tags={M?.tags}
              slug={M?.slug}
              dark={true}
            />
            <ProjectWidgetSmall
              image={teamleaderIntegrations?.coverImageUrl}
              tags={teamleaderIntegrations?.tags}
              slug={teamleaderIntegrations?.slug}
            />
          </div>
          <ProjectWidgetLarge
            image={blueprint?.coverImageUrl}
            tags={blueprint?.tags}
            slug={blueprint?.slug}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-3">
          <ProjectWidgetRegular
            image={teamleader?.coverImageUrl}
            tags={teamleader?.tags}
            slug={teamleader?.slug}
          />
          {/* <ProjectWidgetRegular image="" /> */}
        </div>
      </section>
    </div>
  );
}
