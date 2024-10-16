import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Skill } from "@/typings";

const query = groq`
  *[_type == "skill"] {
    ...,
    "category": category[0] -> title
  } | order(lower(title) asc)
`;

export async function fetchSkills(): Promise<Skill[]> {
  return sanityClient.fetch(query);
}
