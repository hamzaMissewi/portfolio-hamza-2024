import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";
// import SchoolIcon from "@mui/icons-material/School";

export const educationType = defineType({
  name: "education",
  title: "Hamza Education",
  type: "document",
  icon: BookIcon,//SchoolIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "universityName",
      title: "University Name",
      type: "string",
    }),
    defineField({
      name: "universityIcon",
      title: "University Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      // fields: [
      //   {
      //     name: "alt",
      //     type: "string",
      //     title: "Alternative Text",
      //   },
      // ],
    }),
    defineField({
      name: "subjects",
      title: "Subjects",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [{ type: "string" }],
      // of: [{ type: "object", groups: [{ title: "Title" }] }],
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
      // hidden: ({ document }) => document?.currentlyStudying === true,
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
      options: {
        dateFormat: "MM/YYYY",
      },
    }),
  ],
});
