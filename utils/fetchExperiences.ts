import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Experience } from "@/typings";

//   // const query = '*[_type == "experience"]'; // Adjust this to your schema
const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[] ->
  } | order(_createdAt desc)
`;

export async function fetchExperiences(): Promise<Experience[]> {
  return sanityClient.fetch(query);
  // const data = await sanityClient.fetch('*[_type == "experience"]');
}
