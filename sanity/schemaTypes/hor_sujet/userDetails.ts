import { defineField, defineType } from "sanity";

export default defineType({
  name: "userDetails",
  title: "userDetails",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "id",
      type: "text",
    }),
    defineField({
      name: "avatar",
      title: "Profile photo",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Skill logo",
      type: "image",
    }),
    defineField({
      name: "intro",
      title: "About me",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Experience",
      type: "text",
    }),
  ],
});
