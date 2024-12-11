import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { Project } from "../../sanity.types";
import { toast } from "react-toast";


export async function fetchProjects(): Promise<Project[]> {
  const GET_PROJECTS = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {...} 
`);

  try {
    const result = await sanityFetch(
      { query: GET_PROJECTS },
    );
    return result.data || [];
  } catch (error) {
    console.error("Error fetching projects", error);
    toast("Error fetching projects", { color: "red" });
    return [];
  }
}

// export async function getProjectById(projectId: string): Promise<Project | null> {
//   const GET_PROJECT_BY_ID = defineQuery(`
//   *[_type == "project" && _id == $projectId][0] | order(_createdAt desc) {
//   ...
//   }
// `);
//
//   try {
//     const result = await sanityFetch(
//       { query: GET_PROJECT_BY_ID, params: { projectId: projectId } },
//     );
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching project", error);
//     return null;
//   }
// }


// export async function getProjectVideo(projectId: string): Promise<Project | null> {
//   const GET_PROJECT_WITH_VIDEO = defineQuery(`
//   *[_type == "project" && _id == $projectId][0] | order(_createdAt desc) {
//   ...,
//    "videoAssetUrl": video.asset-> url
//   }
// `);
//
//   try {
//     const result = await sanityFetch(
//       { query: GET_PROJECT_WITH_VIDEO, params: { projectId: projectId } },
//     );
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching project", error);
//     return null;
//   }
// }
