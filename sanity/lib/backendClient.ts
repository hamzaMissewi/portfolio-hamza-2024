import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";


export const backendToken = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_DEVELOPER_TOKEN,
  useCdn: true,
});
