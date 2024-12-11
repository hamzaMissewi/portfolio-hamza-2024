import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { MyProfile } from "@/sanity.types";


export async function getProfile(): Promise<MyProfile | null> {
  const GET_PROFILE = defineQuery(`
  *[_type == "myProfile"][0]
`);

// { _id, fullName, headline, profileImage { alt, "image": asset->url }, shortBio, location, fullBio, email, "resumeURL": resumeURL.asset->url, socialLinks, skills }`,
//   icon {
//     asset -> {}

  try {
    const result = await sanityFetch(
      { query: GET_PROFILE },
    );
    return result.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
