import { defineField, defineType } from "sanity";
import { CodeBlockIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "brandColor",
      title: "Brand Color",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
      // validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
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
      name: "otherImages",
      title: "Other Product Images (Optional)",
      type: "array",
      of: [
        { type: "image", options: { hotspot: false } },
      ],
    }),
    defineField({
      name: "video",
      title: "Item Video",
      type: "reference",
      to: {
        type: "itemVideo",
      },
    }),
    defineField({
      name: "videoUrl",
      title: "Video Url",
      description: "Video URL (Optional)",
      type: "url",
      // validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: "codeURL",
      title: "Code URL",
      type: "url",
    }),
    defineField({
      name: "previewURL",
      title: "Preview URL",
      description: "Preview Url Live",
      type: "url",
    }),
    defineField({
      name: "projectBackground",
      title: "Project Background",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "skill",
          },
        },
      ],
    }),
  ],
});
