import { defineQuery } from "next-sanity";
import { Experience } from "../../sanity.types";
import { sanityFetch } from "../../sanity/lib/live";
import { toast } from "react-toast";


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
    toast("Error fetching experiences", { color: "red" });
    return [];
  }

  // const data = await sanityClient.fetch('*[_type == "experience"]');
}
