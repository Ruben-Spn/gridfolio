import {
  getDetails,
  getProjectBySlug,
  getProjectDetails,
} from "../../../sanity/sanity-utils";
import Image from "next/image";
// import EmblaCarousel from "../components/EmblaCarousel";
// import { EmblaOptionsType } from "embla-carousel";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import { urlFor } from "@/sanity/imageBuilder";
import RichContentBlock from "@/app/components/RichContentBlock";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const project = await getDetails(params.slug);

  if (!project) {
    return notFound(); // Redirect to 404 page if project not found
  }

  console.log(project);

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <Header />
      <article className="lg:w-2/4 w-4/5  gap-3 flex flex-col max-w-[1250px] pt-16 min-h-screen">
        <div className="w-full  h-96 rounded-[36px] overflow-hidden">
          <Image
            src={urlFor(project.bannerImage).url()}
            alt="Description of image"
            width={1250}
            height={400}
            className={` object-cover w-full h-full`}
          />
        </div>

        <div>
          <RichContentBlock content={project.content} />
        </div>
      </article>
    </div>
  );
}
