import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { Social } from "../../sanity.types";

const FETCH_SOCIALS = defineQuery(`
  *[_type == "social"]
`);

export async function fetchSocials(): Promise<Social[]> {
  // return sanityClient.fetch(FETCH_SOCIALS);

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
