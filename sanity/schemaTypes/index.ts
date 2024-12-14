import { type SchemaTypeDefinition } from "sanity";
import { profileType } from "./profileType";
import { experienceType } from "./experienceType";
import { projectType } from "./projectType";
import { skillType } from "./skillType";
import { socialType } from "./socialType";
import { skillCategoryType } from "./skillCategoryType";
import { educationType } from "./educationType";
import { certificationType } from "./certificationType";
import blockContent from "./blockContentType";
import { testimonialType } from "./testimonialType";
import { technologyType } from "@/sanity/schemaTypes/technologyType";
import { itemVideoType } from "@/sanity/schemaTypes/itemVideoType";
// import bioType from "@/sanity/schemaTypes/hamzaType";
// import hamzaType from "@/sanity/schemaTypes/hamzaType";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profileType,
    socialType,
    skillType,
    skillCategoryType,
    certificationType,
    blockContent,
    educationType,
    projectType,
    experienceType,
    testimonialType,
    technologyType,
    itemVideoType,
    // bioType,
  ],
};
