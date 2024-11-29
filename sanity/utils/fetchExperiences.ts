import { defineQuery } from "next-sanity";
import { Experience } from "../../sanity.types";
import { sanityFetch } from "../lib/live";
import { toast } from "react-toast";


//   // const query = '*[_type == "experience"]'; // Adjust this to your schema
const FETCH_EXPERIENCES = defineQuery(`
  *[_type == "experience"] | order(_createdAt desc)
`);

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    // return sanityClient.fetch(FETCH_EXPERIENCES);
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
