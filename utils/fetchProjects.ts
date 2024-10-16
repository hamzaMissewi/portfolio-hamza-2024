import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Project } from "@/typings";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[] ->
  } | order(_createdAt desc)
`;

export async function fetchProjects(): Promise<Project[]> {
  return sanityClient.fetch(query);
}
