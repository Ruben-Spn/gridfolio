import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "yb36xyiy",
    dataset: "production",
  });

  return client.fetch(
    groq`*[_type = "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset=>url,
      url,
      content,
      }`
  );
}

export async function getWidget() {
  const client = createClient({
    projectId: "yb36xyiy",
    dataset: "production",
  });

  return client.fetch(
    groq`*[_type = "widget"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset=>url,
      }`
  );
}
