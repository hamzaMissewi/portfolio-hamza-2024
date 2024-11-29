import { SkillCategory } from "../../typings";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { toast } from "react-toast";

// const query = groq(`*[_type == "skillCategory"] | order(_createdAt desc)`);
const FETCH_SKILL_CATEGORIES = defineQuery(
  `*[_type == "skillCategory"] | order(name desc)`);


export async function fetchSkillCategories(): Promise<SkillCategory[]> {
  // return sanityClient.fetch(FETCH_SKILL_CATEGORIES);
  try {
    const result = await sanityFetch({ query: FETCH_SKILL_CATEGORIES });
    return result.data || [];
  } catch (error) {
    console.error("error fetching skill categories", error);
    toast("Error fetching skill categories", { color: "red" });
    return [];
  }
}
