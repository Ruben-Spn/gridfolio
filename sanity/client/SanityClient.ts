import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "yb36xyiy",
  dataset: "production",
  apiVersion: "2023-10-01", // Use the latest API version you need
  useCdn: false, // Set to `true` if you want to use the CDN for faster responses (but potentially stale data)
});
