import { defineQuery } from "next-sanity";
import { Experience } from "@/sanity.types";
import { sanityFetch } from "../live";


export async function fetchExperiences(): Promise<Experience[]> {
  const FETCH_EXPERIENCES = defineQuery(`
  *[_type == "experience"] | order(_createdAt desc)
`);
  try {
    const result = await sanityFetch(
      { query: FETCH_EXPERIENCES },
    );
    return result.data || [];
  } catch (error) {
    console.error("Error fetching experiences", error);
    return [];
  }
}

export async function getExperience(experienceId: string): Promise<Experience | null> {
  const GET_EXPERIENCE_ = defineQuery(`
  *[_type == "experience" && _id == $id][0]
`);

  try {
    const result = await sanityFetch(
      { query: GET_EXPERIENCE_, params: { id: experienceId } },
    );
    return result.data || null;
  } catch (error) {
    console.error("Error fetching experience", error);
    return null;
  }
}

