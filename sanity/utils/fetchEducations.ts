import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { Education } from "../../sanity.types";


export async function fetchEducations(): Promise<Education[]> {
  // return sanityClient.fetch(FETCH_EDUCATIONS);
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
