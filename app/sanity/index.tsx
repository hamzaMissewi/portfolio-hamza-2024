import { Studio } from "sanity";
import { config } from "@/sanity";

export default function SanityPage() {
  return <Studio config={config} />;
}
