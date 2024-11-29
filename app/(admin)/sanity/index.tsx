import { Studio } from "sanity";
import { config } from "@/sanity/sanity";

export default function SanityPage() {
  return <Studio config={config} />;
}
