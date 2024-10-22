import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Testimonial } from "@/typings";

// const query = groq`*[_type == "testimonial"] | order(_createdAt desc)

const query = groq`
    *[_type == "testimonial"] {
    ...,
    "image": asset->url
  } | order(_createdAt desc)
`;

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(query);
}
