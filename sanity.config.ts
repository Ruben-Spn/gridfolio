import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  projectId: "yb36xyiy",
  dataset: "production",
  title: "My gridfolio",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
