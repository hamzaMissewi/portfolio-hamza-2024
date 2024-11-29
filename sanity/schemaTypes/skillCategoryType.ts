import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export default defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      // validation: (Rule) => Rule.required("Icon is required"),
    }),
  ],
});
