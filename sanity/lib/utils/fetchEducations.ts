import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Education } from "@/sanity.types";


export async function fetchEducations(): Promise<Education[]> {
  const FETCH_EDUCATIONS = defineQuery(`
  *[_type == "education"] | order(_createdAt desc)
`);
  try {
    const result = await sanityFetch(
      { query: FETCH_EDUCATIONS },
    );
    return result.data || [];
  } catch (error) {
    console.error("Error fetching educations", error);
    return [];
  }
}
