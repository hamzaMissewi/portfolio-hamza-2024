import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Skill } from "@/sanity.types";


export async function fetchSkillsByCategory(skillCategoryId: string): Promise<Skill[]> {
  const FETCH_SKILLS_BY_CATEGORY = defineQuery(
    `*[_type == "skill" && skillCategory._ref == $skillCategoryId] | order(title desc)`);
  // `*[_type == "skill" && references(*[_type == "skillCategory" && skillCategory._ref == "${skillCategoryId}")] | order(title desc)`);
  try {
    const result = await sanityFetch({
      query: FETCH_SKILLS_BY_CATEGORY,
      params: { skillCategoryId: skillCategoryId },
    });
    return result.data || [];
  } catch (error) {
    console.error("error fetching skill categories", error);
    return [];
  }
}

// export async function fetchSkillCategories(): Promise<SkillCategory[]> {
//   const FETCH_SKILL_CATEGORIES = defineQuery(
//     `*[_type == "skillCategory"] | order(title desc)`);
//   try {
//     const result = await sanityFetch({ query: FETCH_SKILL_CATEGORIES });
//     return result.data || [];
//   } catch (error) {
//     console.error("error fetching skill categories", error);
//     return [];
//   }
// }
