import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { Skill } from "../../sanity.types";
import { toast } from "react-toast";


export async function fetchSkills(): Promise<Skill[]> {
  const FETCH_SKILLS = defineQuery(`
  *[_type == "skill"] {
    ...,
    "category": category[0] -> title,
    "logo": asset->url
  } | order(lower(title) asc)
`);

  try {
    const result = await sanityFetch({ query: FETCH_SKILLS });
    return result.data || [];
  } catch (error) {
    console.error("error fetching skill categories", error);
    toast("Error fetching skills", { color: "red" });
    return [];
  }
}
