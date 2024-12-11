import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { toast } from "react-toast";
import { SkillCategory } from "@/sanity.types";


export async function fetchSkillCategories(): Promise<SkillCategory[]> {
  const FETCH_SKILL_CATEGORIES = defineQuery(
    `*[_type == "skillCategory"] | order(name desc)`);
  try {
    const result = await sanityFetch({ query: FETCH_SKILL_CATEGORIES });
    return result.data || [];
  } catch (error) {
    console.error("error fetching skill categories", error);
    toast("Error fetching skill categories", { color: "red" });
    return [];
  }
}
