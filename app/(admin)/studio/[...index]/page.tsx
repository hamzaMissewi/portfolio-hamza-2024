import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
