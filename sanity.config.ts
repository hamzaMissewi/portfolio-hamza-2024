import { Config, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "@/components/studio/StudioNavbar/StudioNavbar.component";
import { colorInput } from "@sanity/color-input";
// import Logo from "@/components/studio/Logo/Logo.component";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config: Config = defineConfig({
  basePath: "/studio",
  name: "portfolio-sanity", //"default",
  title: "portfolio sanity",
  projectId: projectId ?? "t1nbpupj",
  dataset: dataset ?? "production", // dataset
  plugins: [colorInput, structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
    },
  },
  // theme: portfolioTheme,
});

export default config;
