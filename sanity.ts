import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import type { Image, ImageUrlBuilder } from "sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "t1nbpupj",
  // apiVersion: "2023-12-31",
  apiVersion: "v2022-03-07",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: Image): ImageUrlBuilder =>
  createImageUrlBuilder(config).image(source);
