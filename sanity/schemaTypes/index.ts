import { type SchemaTypeDefinition } from "sanity";
import profile from "./profileType";
import experience from "./experienceType";
import project from "./projectType";
import skill from "./skillType";
import social from "./socialType";
import skillCategory from "./skillCategoryType";
import education from "./educationType";
import certification from "./certificationType";
import blockContent from "./blockContentType";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    skill,
    social,
    skillCategory,
    certification,
    blockContent,
    education,
    project,
    experience, // todo
    profile,
  ],
};
