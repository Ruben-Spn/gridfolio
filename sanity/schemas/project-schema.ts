import { Rule } from "sanity";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    // Title
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },

    // Slug
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required(),
    },

    // Cover Image
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Important for SEO and accessibility.",
        },
      ],
    },

    // Banner Image
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Important for SEO and accessibility.",
        },
      ],
    },

    // Carousel Images
    {
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Image alt text for accessibility.",
            },
          ],
        },
      ],
    },

    // Rich Text Content Block
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags", // Provides a user-friendly tag input UI
      },
      validation: (Rule: Rule) =>
        Rule.required().min(1).warning("At least one tag is recommended."),
    },
  ],
};

export default project;
