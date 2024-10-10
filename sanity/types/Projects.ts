export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  coverImageUrl: string;
  bannerImageUrl: string;
  carouselImagesUrls: string[];
  content: string;
}

export interface ProjectCoverSlugTags {
  slug: string;
  coverImageUrl: string;
  tags: string[];
}
