import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Social } from "@/sanity.types";


export async function fetchSocials(): Promise<Social[]> {
  const FETCH_SOCIALS = defineQuery(`
  *[_type == "social"]
`);

  try {
    const result = await sanityFetch(
      { query: FETCH_SOCIALS },
    );
    return result.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
