import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { SkillCategory } from "@/typings";

const query = groq`
  *[_type == "skillCategory"] | order(_createdAt desc)
`;

export async function fetchSkillCategories(): Promise<SkillCategory[]> {
  return sanityClient.fetch(query);
}
