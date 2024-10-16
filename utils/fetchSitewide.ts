import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Sitewide } from "@/typings";

const query = groq`
  *[_type == "sitewide"][0]
`;

export async function fetchSitewide(): Promise<Sitewide> {
  return sanityClient.fetch(query);
}
