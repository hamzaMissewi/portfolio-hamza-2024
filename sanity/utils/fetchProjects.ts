import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { Project } from "../../sanity.types";
import { toast } from "react-toast";


export async function fetchProjects(): Promise<Project[]> {
  const GET_PROJECTS = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {...} 
`);
// technologies[] ->

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
