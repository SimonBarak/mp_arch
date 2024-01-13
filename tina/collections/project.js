/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Projekty",
  name: "project",
  path: "content/project",
  format: "md",
  fields: [
    {
      type: "number",
      name: "weight",
      label: "Order",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: ["Stavba", "Film", "Navrh"],
    },
    {
      type: "string",
      name: "odkaz_na_navrh",
      label: "Odkaz na realizaci/návrh",
    },
    {
      type: "object",
      name: "awards",
      label: "Awards",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "placement",
          label: "Placement",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "number",
          name: "year",
          label: "Year",
        },
      ],
    },
    {
      type: "object",
      name: "media",
      label: "Projekt v mediích",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "number",
      name: "year",
      label: "Year",
    },
    {
      type: "string",
      name: "size",
      label: "Size",
    },
    {
      type: "string",
      name: "price",
      label: "Price",
    },
    {
      type: "image",
      name: "images",
      label: "Images",
      list: true,
    },
    {
      type: "number",
      name: "latitude",
      label: "Latitude",
    },
    {
      type: "number",
      name: "longitude",
      label: "Longitude",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
    },
    {
      type: "string",
      name: "investor",
      label: "Investor",
    },
    {
      type: "string",
      name: "visualization",
      label: "Visualization",
    },
    {
      type: "string",
      name: "collaborations",
      label: "Collaborations",
      list: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/projects/${document._sys.filename}`;
    },
  },
};
