import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

import { Skill } from "@/typings";

const query = groq`
  *[_type == "skill"] {
    ...,
    "category": category[0] -> title,
    "logo": asset->url
  } | order(lower(title) asc)
`;

export async function fetchSkills(): Promise<Skill[]> {
  return sanityClient.fetch(query);
}

// AI EXAM
export async function getProfile() {
  return sanityClient.fetch(
    groq`*[_type == "profile"]{ _id, fullName, headline, profileImage { alt, "image": asset->url }, shortBio, location, fullBio, email, "resumeURL": resumeURL.asset->url, socialLinks, skills }`
  );
}
