import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Skill } from "@/sanity.types";


export async function fetchSkills(): Promise<Skill[]> {
  const FETCH_SKILLS = defineQuery(`
  *[_type == "skill"] {...,
  "logoUrl": logo.asset->url,
  } | order(title asc)
`);

  try {
    const result = await sanityFetch({ query: FETCH_SKILLS });
    return result.data || [];
  } catch (error) {
    console.error("error fetching skill categories", error);
    return [];
  }
}
