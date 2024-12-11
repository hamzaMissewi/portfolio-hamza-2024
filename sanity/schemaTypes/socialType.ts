import { defineField, defineType } from "sanity";
import { MobileDeviceIcon } from "@sanity/icons";

export const socialType = defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: MobileDeviceIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
    }),
    // defineField({
    //   name: "primaryColor",
    //   title: "Primary Colour",
    //   type: "string",
    // }),
    // defineField({
    //   name: "secondaryColor",
    //   title: "Secondary Colour",
    //   type: "string",
    // }),
  ],
});
