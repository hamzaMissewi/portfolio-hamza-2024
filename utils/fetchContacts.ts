import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { ContactMethod } from "@/typings";

const query = groq`
  *[_type == "contact"] {
    ...,
    icon {
      ...,
      asset -> {
        ...
      }
    }
  } | order(_createdAt desc)
`;

export async function fetchContact(): Promise<ContactMethod[]> {
  return sanityClient.fetch(query);
}
