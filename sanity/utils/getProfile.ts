import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import ProfileType from "../schemaTypes/profileType";

// import { Profile } from "../../sanity.types";


export async function getProfile(): Promise<ProfileType | null> {
  const GET_PROFILE = defineQuery(`
  *[_type == "profile"] [0]{...}
`);
// groq`*[_type == "profile"]{ _id, fullName, headline, profileImage { alt, "image": asset->url }, shortBio, location, fullBio, email, "resumeURL": resumeURL.asset->url, socialLinks, skills }`,
// ...
//   icon {
//     ...,
//     asset -> {
//       ...
//     }
//   }
//  }

  try {
    // return sanityClient.fetch(GET_PROFILE);

    const result = await sanityFetch(
      { query: GET_PROFILE },
    );
    return result.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
