import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Education } from "@/typings";

const query = groq`
  *[_type == "education"] | order(_createdAt desc)
`;

export async function fetchEducations(): Promise<Education[]> {
  return sanityClient.fetch(query);
}
