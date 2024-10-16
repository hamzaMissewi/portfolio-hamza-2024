import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { SectionWrapper } from "@/typings";

const query = groq`
  *[_type == "section"] | order(_createdAt desc)
`;

export async function fetchSections(): Promise<SectionWrapper[]> {
  return sanityClient.fetch(query);
}
