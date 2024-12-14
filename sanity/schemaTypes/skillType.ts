import { defineField, defineType } from "sanity";
import { CubeIcon } from "@sanity/icons";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CubeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "activeSkill",
      title: "Active Skill",
      type: "boolean",
    }),
    defineField({
      name: "brandColor",
      title: "Brand Color",
      type: "string",
    }),
    defineField({
      name: "percent",
      title: "Percent",
      type: "number",
    }),
    defineField({
      name: "logo",
      title: "Logo",
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
    // OR
    defineField({
      name: "category",
      title: "Select Category",
      type: "string",
      options: {
        list: [
          { title: "ITech", value: "IT" },
          { title: "Service", value: "service" },
          { title: "Database", value: "database" },
          { title: "Language", value: "language" },
          { title: "Apis", value: "apis" },
          { title: "Tools", value: "tools" },
          { title: "Framework", value: "framework" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "skillCategory",
      title: "SkillCategory",
      type: "reference",
      to: {
        type: "skillCategory",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      brandColor: "brandColor",
      percent: "percent",
      activeSkill: "activeSkill",
      media: "logo",
    },
    prepare: (select) => {
      return {
        title: select.title,
        subtitle: `${select.brandColor}- ${select.percent}% - ${select.activeSkill ? "active" : "inactive"}`,
        media: select.media,
      };
    },
  },
});
