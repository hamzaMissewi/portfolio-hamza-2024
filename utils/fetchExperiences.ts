import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Experience } from "@/typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[] ->
  } | order(_createdAt desc)
`;

export async function fetchExperiences(): Promise<Experience[]> {
  return sanityClient.fetch(query);
}
