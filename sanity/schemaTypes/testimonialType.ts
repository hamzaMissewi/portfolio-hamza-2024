import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

// clients
export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: TextIcon,
  fields: [
    defineField({
      name: "author",
      title: "Author Username",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
