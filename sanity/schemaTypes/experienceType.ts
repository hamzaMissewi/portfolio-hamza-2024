import { defineField, defineType } from "sanity";

import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "experience",
  title: "Hamza Experience",
  type: "document",
  icon: HomeIcon,
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
      // type: "array",
      // of: [{ type: "string" }],
    }),
    defineField({
      name: "type",
      title: "Type",
      description: "Type of experience (e.g:Job, Freelance, Internship...)",
      type: "string",
      options: {
        // layout: "radio",
        // enum: ["contractJob", "fulltimeJob", "freelance", "internship"],
        list: [
          { title: "contractJob", value: "contract job" },
          { title: "fullTimeJob", value: "fullTime job" },
          { title: "freelance", value: "freelance" },
          { title: "internship", value: "internship" },
        ],
      },
    }),
    defineField({
      name: "role",
      title: "Experience Role",
      type: "string",
    }),
    // defineField({
    //   // description: "Select true if Contract role",
    //   name: "contractRole",
    //   title: "Contract Role",
    //   type: "boolean",
    // }),
    defineField({
      name: "company",
      title: "CompanyName",
      type: "string",
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      // options: {
      //   hotspot: true,
      // },
      // fields: [
      //   {
      //     name: "alt",
      //     type: "string",
      //     title: "Alternative Text",
      //   },
      // ],
    }),
    defineField({
      name: "companyDescription",
      title: "Company Description",
      type: "text",
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
      options: {
        dateFormat: "MM/YYYY",
      },
    }),
    defineField({
      // hidden: ({ document }) => document?.currentlyWorkplace === true,
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
      options: {
        dateFormat: "MM/YYYY",
      },
    }),
    defineField({
      name: "currentlyOccupied",
      title: "Is Current Occupied",
      type: "boolean",
    }),
    // TODO or will got error
    // defineField({
    //   name: "technologies",
    //   title: "Technologies",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "technology",
    //       },
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: "title",
      role: "role",
      // description: "description",
      startDate: "startDate",
      endDate: "endDate",
      company: "company",
      media: "companyLogo",
    },
    prepare({ title, role, startDate, endDate, company, media }) {
      return {
        title: title,
        subtitle: ` ${role} \n ${startDate} - ${endDate} - ${company}`,
        media,
      };
    },
  },
});
