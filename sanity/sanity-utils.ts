import { groq } from "next-sanity";
import { sanityClient } from "./client/SanityClient";
import { Project, ProjectCoverSlugTags } from "./types/Projects";

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    "bannerImageUrl": bannerImage.asset->url,
    "carouselImagesUrls": carouselImages[].asset->url,
    content
  }`;

  const projects = await sanityClient.fetch(query);
  return projects;
}

export async function getProjectCovers(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    tags
  }`;

  const projects = await sanityClient.fetch(query);
  return projects;
}

export async function getDetails(slug: string): Promise<Project | null> {
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    "slug": slug.current,
    bannerImage,
    content,
    tags
  }`;

  const project = await sanityClient.fetch(query, { slug });
  return project || null;
}

export async function getProjectsCoversSlugsTags(): Promise<
  ProjectCoverSlugTags[]
> {
  const query = groq`*[_type == "project"]{
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    tags
  }`;

  const projects: ProjectCoverSlugTags[] = await sanityClient.fetch(query);
  return projects;
}
